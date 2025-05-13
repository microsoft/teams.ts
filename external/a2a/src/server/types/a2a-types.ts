import * as schema from '../../common/schema';

// Helper type for the simplified store
export type TaskAndHistory = {
    task: schema.Task;
    history: schema.Message[];
};

/**
 * Simplified interface for task storage providers.
 * Stores and retrieves both the task and its full message history together.
 */
export interface ITaskStore {
    /**
     * Saves a task and its associated message history.
     * Overwrites existing data if the task ID exists.
     * @param data An object containing the task and its history.
     * @returns A promise resolving when the save operation is complete.
     */
    save(data: TaskAndHistory): Promise<void>;

    /**
     * Loads a task and its history by task ID.
     * @param taskId The ID of the task to load.
     * @returns A promise resolving to an object containing the Task and its history, or null if not found.
     */
    load(taskId: string): Promise<TaskAndHistory | null>;
}

/**
 * Context object provided to the TaskHandler.
 */
export type TaskContext = {
    /**
     * The current state of the task when the handler is invoked or resumed.
     * Note: This is a snapshot. For the absolute latest state during async operations,
     * the handler might need to reload the task via the store.
     */
    task: schema.Task;

    /**
     * The specific user message that triggered this handler invocation or resumption.
     */
    userMessage: schema.Message;

    /**
     * Function to check if cancellation has been requested for this task.
     * Handlers should ideally check this periodically during long-running operations.
     * @returns {boolean} True if cancellation has been requested, false otherwise.
     */
    isCancelled(): boolean;

    /**
     * The message history associated with the task up to the point the handler is invoked.
     * Optional, as history might not always be available or relevant.
     */
    history?: schema.Message[];
};

/**
 * Represents the possible types of updates a TaskHandler can yield.
 * It's either a partial TaskStatus (without the server-managed timestamp)
 * or a complete Artifact object.
 */
export type TaskUpdate =
    | Omit<schema.TaskStatus, 'timestamp'>
    | schema.Artifact
    | schema.Artifact[];