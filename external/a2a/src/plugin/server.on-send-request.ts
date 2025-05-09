import * as schema from './schema';
import { A2APlugin } from './server';
import { createSuccessResponse, normalizeError } from './serverUtils';
import { TaskAndHistory, TaskUpdate } from './types/a2a-types';
import { AccumulateArtifacts, Respond } from './types/event-types';
import { Result } from './types/type-utils';

export async function onSendRequest(
    this: A2APlugin,
    req: schema.SendTaskRequest,
    cb: (result?: schema.SendTaskResponse) => void
) {
    const { id: taskId, message, sessionId, metadata } = req.params;
    // Load or create task AND history
    let currentData = await this._taskManager.loadOrCreateTaskAndHistory(
        taskId,
        message,
        sessionId,
        metadata
    );

    const context = this._taskManager.createTaskContext(
        currentData.task,
        message,
        currentData.history
    );

    const updateTask = async (update: TaskUpdate): Promise<Result<TaskAndHistory>> => {
        try {
            currentData = await this._taskManager.applyUpdateToTaskAndHistory(currentData, update);
            await this._taskStore.save(currentData);
            context.task = currentData.task;
            return {
                success: true,
                data: currentData,
            };
        } catch (error) {
            // Convert error to failure state
            const failedUpdate = this._taskManager.createFailedTaskState(`Handler failed: ${error instanceof Error
                ? error.message
                : String(error)
                }`);
            currentData = await this._taskManager.applyUpdateToTaskAndHistory(currentData, failedUpdate);
            try {
                await this._taskStore.save(currentData);
            } catch (saveError) {
                this._logger.error(
                    `Failed to save task ${taskId} after handler error:`,
                    saveError
                );
            }

            return {
                success: false,
                error: new Error(`Handler failed: ${error instanceof Error
                    ? error.message
                    : String(error)
                    }`),
            }
        }
    }

    const respond: Respond = async (update) => {
        this._logger.debug(`Responding to task ${taskId}`);
        let responseValue: TaskUpdate;
        if (typeof update === 'string') {
            responseValue = this._taskManager.createCompletedTaskState(update);
        } else {
            responseValue = update;
        }
        let result = await updateTask(responseValue);

        if (result.success) {
            if (!this._taskManager.isFinalState(result.data)) {
                this._logger.info(`Task ${taskId} is not in a final state, so automatically setting to completed.`);
                // By default, we will set the task to "completed" state
                result = await updateTask(this._taskManager.createCompletedTaskState());
            }
        }

        if (!result.success) {
            this._logger.error(`Failed to save task during response: ${result.error}`);
            cb(normalizeError(result.error, req.id, taskId))
        }

        cb(createSuccessResponse(taskId, currentData.task))
    }

    const accumulateArtifacts: AccumulateArtifacts = async (artifact) => {
        const result = await updateTask(artifact);
        if (!result.success) {
            this._logger.error(`Failed to accumulate artifacts: ${result.error}`);
            cb(normalizeError(result.error, req.id, taskId))
        }
    }

    this.emit('a2a:receive', {
        taskContext: context,
        respond,
        accumulateArtifacts
    })
}
