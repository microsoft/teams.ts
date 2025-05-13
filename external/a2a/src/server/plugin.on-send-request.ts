import { ILogger } from '@microsoft/teams.common';

import * as schema from '../common/schema';

import { Result } from '../common/type-utils';

import { A2APlugin } from './plugin';
import { createSuccessResponse, normalizeError } from './serverUtils';
import { TaskManager } from './tasks/task-manager';
import {
  ITaskStore,
  TaskAndHistory,
  TaskContext,
  TaskUpdate,
} from './types/a2a-types';
import { AccumulateArtifacts, Respond } from './types/event-types';

interface ITaskOperationContext {
  taskManager: TaskManager;
  taskStore: ITaskStore;
  logger: ILogger;
  taskId: string;
  reqId: number | string | null;
  contextRef: { current: TaskContext };
  dataRef: { current: TaskAndHistory };
}

/**
 * Handles the tasks/send request by processing the user message and setting up event handlers
 *
 * @param req - The request containing the task parameters
 * @param cb - The callback to call with the response
 */
export async function onSendRequest(
  this: A2APlugin,
  req: schema.SendTaskRequest,
  cb: (result?: schema.SendTaskResponse) => void
) {
  const { id: taskId, message, sessionId, metadata } = req.params;

  // Load or create task AND history
  const currentData = await this._taskManager.loadOrCreateTaskAndHistory(
    taskId,
    message,
    sessionId,
    metadata
  );

  const taskContext = this._taskManager.createTaskContext(
    currentData.task,
    message,
    currentData.history
  );

  // Create operation context with references that can be updated
  const operationContext: ITaskOperationContext = {
    taskManager: this._taskManager,
    taskStore: this._taskStore,
    logger: this._logger,
    taskId,
    reqId: req.id || null,
    contextRef: { current: taskContext },
    dataRef: { current: currentData },
  };

  // Create the helper functions with operation context
  const respond = createRespondFunction(operationContext, cb);
  const accumulateArtifacts = createArtifactsFunction(operationContext, cb);

  // Emit the event to process the task
  this.emit('a2a:message', {
    taskContext,
    respond,
    accumulateArtifacts,
  });
}

async function updateTask(
  ctx: ITaskOperationContext,
  update: TaskUpdate
): Promise<Result<TaskAndHistory>> {
  try {
    // Apply the update to the task
    const updatedData = await ctx.taskManager.applyUpdateToTaskAndHistory(
      ctx.dataRef.current,
      update
    );

    // Save the updated task
    await ctx.taskStore.save(updatedData);

    // Update the task context reference
    ctx.contextRef.current.task = updatedData.task;

    // Return success result
    return {
      success: true,
      data: updatedData,
    };
  } catch (error) {
    return handleUpdateError(ctx, error, ctx.dataRef.current);
  }
}

async function handleUpdateError(
  ctx: ITaskOperationContext,
  error: unknown,
  currentData: TaskAndHistory
): Promise<Result<TaskAndHistory>> {
  // Convert error to failure state
  const failedUpdate = ctx.taskManager.createFailedTaskState(
    `Handler failed: ${error instanceof Error ? error.message : String(error)}`
  );

  // Apply failure state to task
  const failedData = await ctx.taskManager.applyUpdateToTaskAndHistory(
    currentData,
    failedUpdate
  );

  // Try to save the failed state
  try {
    await ctx.taskStore.save(failedData);
  } catch (saveError) {
    ctx.logger.error(
      `Failed to save task ${ctx.taskId} after handler error:`,
      saveError
    );
  }

  // Return failure result with original error
  return {
    success: false,
    error: new Error(
      `Handler failed: ${error instanceof Error ? error.message : String(error)
      }`
    ),
  };
}

function createRespondFunction(
  ctx: ITaskOperationContext,
  callback: (result?: schema.SendTaskResponse) => void
): Respond {
  return async (update) => {
    ctx.logger.debug(`Responding to task ${ctx.taskId}`);
    let responseValue: TaskUpdate;
    if (typeof update === 'string') {
      responseValue = ctx.taskManager.createCompletedTaskState(update);
    } else {
      responseValue = update;
    }

    const result = await updateTask(ctx, responseValue);

    // Update the current data reference with the latest version
    if (result.success) {
      ctx.dataRef.current = result.data;
    }

    if (!result.success) {
      ctx.logger.error(`Failed to save task during response: ${result.error}`);
      callback(normalizeError(result.error, ctx.reqId, ctx.taskId));
      return;
    }

    callback(createSuccessResponse(ctx.taskId, ctx.dataRef.current.task));
  };
}

function createArtifactsFunction(
  ctx: ITaskOperationContext,
  callback: (result?: schema.SendTaskResponse) => void
): AccumulateArtifacts {
  return async (artifact) => {
    const result = await updateTask(ctx, artifact);

    if (result.success) {
      ctx.dataRef.current = result.data;
    } else {
      ctx.logger.error(`Failed to accumulate artifacts: ${result.error}`);
      callback(normalizeError(result.error, ctx.reqId, ctx.taskId));
    }
  };
}
