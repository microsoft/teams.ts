import * as schema from '../../common/schema';
import { TaskAndHistory, TaskContext, TaskUpdate } from '../types/a2a-types';

import { getCurrentTimestamp } from './task-utils';

/**
 * Handles task-specific operations like state transitions and updates
 */
export class TaskUtilities {
  private activeCancellations: Set<string>;

  constructor(activeCancellations: Set<string>) {
    this.activeCancellations = activeCancellations;
  }

  createContext(
    task: schema.Task,
    userMessage: schema.Message,
    history: schema.Message[]
  ): TaskContext {
    return {
      task: { ...task },
      userMessage,
      history: [...history],
      isCancelled: () => this.activeCancellations.has(task.id),
    };
  }

  withAppliedUpdate(
    current: TaskAndHistory,
    update: TaskUpdate
  ): TaskAndHistory {
    return this.isTaskStatusUpdate(update)
      ? this.applyStatusUpdate(current, update)
      : this.applyArtifactUpdate(current, update);
  }

  stateChangeOnNewRequest(
    currentState: schema.TaskState
  ): schema.TaskState | null {
    switch (currentState) {
      case 'completed':
      case 'failed':
      case 'canceled':
        // In the original sample, they chose to restart the task.
        // A stricter approach could be to throw an error here.
        // Might make sense to make this behavior configurable.
        throw new Error(`Cannot transition from final state: ${currentState}`);
      case 'input-required':
        // If the previous state was "input-required", we can assume the task is still in progress.
        return 'working';
      case 'working':
        return null;
      case 'submitted':
        // The orgiinal sample considered this odd, but didn't care
        return null;
      case 'unknown':
        // Let the caller handle this case
        return null;
    }
  }

  createStateUpdate(state: schema.TaskState): TaskUpdate {
    if (state === 'submitted') {
      // If this is a new task, we reset the message
      return { state, message: null };
    }

    return { state };
  }

  /**
   * Creates a status update event object
   */
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

  /**
   * Creates an artifact update event object
   */
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

  private applyStatusUpdate(
    current: TaskAndHistory,
    update: Omit<schema.TaskStatus, 'timestamp'>
  ): TaskAndHistory {
    const newTask = { ...current.task };
    const newHistory = [...current.history];

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

    return { task: newTask, history: newHistory };
  }

  private applyArtifactUpdate(
    current: TaskAndHistory,
    update: schema.Artifact | schema.Artifact[]
  ): TaskAndHistory {
    const newTask = { ...current.task };
    newTask.artifacts = newTask.artifacts ? [...newTask.artifacts] : [];
    const updates = Array.isArray(update) ? update : [update];

    for (const update of updates) {
      const existingIndex = this.findArtifactIndex(newTask.artifacts, update);

      if (existingIndex >= 0) {
        newTask.artifacts[existingIndex] = update.append
          ? this.appendToArtifact(newTask.artifacts[existingIndex], update)
          : { ...update };
      } else {
        newTask.artifacts.push({ ...update });
        this.sortArtifacts(newTask.artifacts);
      }
    }

    return { task: newTask, history: current.history };
  }

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

  private isTaskStatusUpdate(
    update: TaskUpdate
  ): update is Omit<schema.TaskStatus, 'timestamp'> {
    return 'state' in update;
  }
}
