import { ILogger } from '@microsoft/teams.common';

import * as schema from '../../common/schema';
import {
  ITaskStore,
  TaskAndHistory,
  TaskContext,
  TaskUpdate,
} from '../types/a2a-types';

import {
  getCurrentTimestamp,
  isArtifactUpdate,
  isTaskStatusUpdate,
} from './task-utils';

// Handle state transitions for existing tasks
export const finalStates: schema.TaskState[] = [
  'completed',
  'failed',
  'canceled',
];

export class TaskManager {
  constructor(private taskStore: ITaskStore, private logger: ILogger) { }

  applyUpdateToTaskAndHistory(
    current: TaskAndHistory,
    update: TaskUpdate
  ): TaskAndHistory {
    const newTask = { ...current.task }; // Shallow copy task
    const newHistory = [...current.history]; // Shallow copy history

    if (isTaskStatusUpdate(update)) {
      // Merge status update
      newTask.status = {
        ...newTask.status, // Keep existing properties if not overwritten
        ...update, // Apply updates
        timestamp: getCurrentTimestamp(), // Always update timestamp
      };
      // If the update includes an agent message, add it to history
      if (update.message?.role === 'agent') {
        newHistory.push(update.message);
      }
    } else if (
      isArtifactUpdate(update) ||
      (Array.isArray(update) && update.every(isArtifactUpdate))
    ) {
      // Handle artifact update
      if (!newTask.artifacts) {
        newTask.artifacts = [];
      } else {
        // Ensure we're working with a copy of the artifacts array
        newTask.artifacts = [...newTask.artifacts];
      }

      const updates = Array.isArray(update) ? update : [update];
      for (const artifact of updates) {
        const existingIndex = this.findArtifactIndex(
          newTask.artifacts,
          artifact
        );

        if (existingIndex >= 0) {
          newTask.artifacts[existingIndex] = artifact.append
            ? this.appendToArtifact(newTask.artifacts[existingIndex], artifact)
            : { ...artifact };
        } else {
          newTask.artifacts.push({ ...artifact });
          this.sortArtifacts(newTask.artifacts);
        }
      }
    }

    return { task: newTask, history: newHistory };
  }

  stateChangeOnNewRequest(
    currentState: schema.TaskState
  ): schema.TaskState | null {
    switch (currentState) {
      case 'completed':
      case 'failed':
      case 'canceled':
        // Reset to submitted when receiving message in final state
        return 'submitted';
      case 'input-required':
        // If the previous state was "input-required", transition to working
        return 'working';
      case 'working':
      case 'submitted':
      case 'unknown':
        // No state change needed
        return null;
    }
  }

  async loadOrCreateTaskAndHistory(
    taskId: string,
    initialMessage: schema.Message,
    sessionId?: string | null, // Allow null
    metadata?: Record<string, unknown> | null // Allow null
  ): Promise<TaskAndHistory> {
    let data = await this.taskStore.load(taskId);
    let needsSave = false;

    if (!data) {
      // Create new task and history
      const initialTask: schema.Task = {
        id: taskId,
        sessionId: sessionId ?? undefined, // Store undefined if null
        status: {
          state: 'submitted', // Start as submitted
          timestamp: getCurrentTimestamp(),
          message: null, // Initial user message goes only to history for now
        },
        artifacts: [],
        metadata: metadata ?? undefined, // Store undefined if null
      };
      const initialHistory: schema.Message[] = [initialMessage]; // History starts with user message
      data = { task: initialTask, history: initialHistory };
      needsSave = true; // Mark for saving
      this.logger.debug(`[Task ${taskId}] Created new task and history.`);
    } else {
      this.logger.debug(`[Task ${taskId}] Loaded existing task and history.`);
      // Add current user message to history
      // Make a copy before potentially modifying
      data = { task: data.task, history: [...data.history, initialMessage] };
      needsSave = true; // History updated, mark for saving

      // Use the state transition helper
      const newState = this.stateChangeOnNewRequest(data.task.status.state);
      if (newState) {
        const stateUpdate: Omit<schema.TaskStatus, 'timestamp'> = {
          state: newState,
          message: newState === 'submitted' ? null : data.task.status.message,
        };
        data = this.applyUpdateToTaskAndHistory(data, stateUpdate);
        this.logger.debug(
          `[Task ${taskId}] Transitioned state to ${newState}.`
        );
      }
    }

    // Save if created or modified before returning
    if (needsSave) {
      await this.taskStore.save(data);
    }

    // Return copies to prevent mutation by caller before handler runs
    return { task: { ...data.task }, history: [...data.history] };
  }

  createTaskContext(
    task: schema.Task,
    userMessage: schema.Message,
    history: schema.Message[]
  ): TaskContext {
    return {
      task: { ...task }, // Pass a copy
      userMessage: userMessage,
      history: [...history], // Pass a copy of the history
      isCancelled: () => false, // TODO: support this when cancellations are implemented
    };
  }

  isFinalState(current: TaskAndHistory): boolean {
    return finalStates.includes(current.task.status.state);
  }

  createFailedTaskState(failureText: string): TaskUpdate {
    return {
      state: 'failed',
      message: {
        role: 'agent',
        parts: [
          {
            type: 'text',
            text: failureText,
          },
        ],
      },
    } satisfies TaskUpdate;
  }

  createCompletedTaskState(text?: string): TaskUpdate {
    return {
      state: 'completed',
      message: {
        role: 'agent',
        parts: [
          {
            type: 'text',
            text: text ?? 'task completed',
          },
        ],
      },
    };
  }

  createTaskStatusEvent(
    taskId: string,
    status: schema.TaskStatus,
    final: boolean
  ): schema.TaskStatusUpdateEvent {
    return {
      id: taskId,
      status: status,
      final: final,
    };
  }

  createTaskArtifactEvent(
    taskId: string,
    artifact: schema.Artifact,
    final: boolean
  ): schema.TaskArtifactUpdateEvent {
    return {
      id: taskId,
      artifact: artifact,
      final: final,
    };
  }

  // Private helper methods
  private findArtifactIndex(
    artifacts: schema.Artifact[],
    update: schema.Artifact
  ): number {
    if (update.index !== undefined) {
      return update.index < artifacts.length ? update.index : -1;
    }
    return update.name
      ? artifacts.findIndex((a) => a.name === update.name)
      : -1;
  }

  private appendToArtifact(
    existing: schema.Artifact,
    update: schema.Artifact
  ): schema.Artifact {
    // Create a deep copy for modification to avoid mutating original
    const artifact = JSON.parse(JSON.stringify(existing));
    artifact.parts.push(...update.parts);
    if (update.metadata) {
      artifact.metadata = { ...(artifact.metadata || {}), ...update.metadata };
    }
    if (update.lastChunk !== undefined) artifact.lastChunk = update.lastChunk;
    if (update.description) artifact.description = update.description;
    return artifact;
  }

  private sortArtifacts(artifacts: schema.Artifact[]): void {
    if (artifacts.some((a) => a.index !== undefined)) {
      artifacts.sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
    }
  }
}
