import { ILogger } from '@microsoft/teams.common';
import * as schema from "../schema";
import { ITaskStore, TaskAndHistory, TaskContext, TaskUpdate } from '../types';
import { getCurrentTimestamp, isArtifactUpdate, isTaskStatusUpdate } from './utils';

// Handle state transitions for existing tasks
export const finalStates: schema.TaskState[] = [
    "completed",
    "failed",
    "canceled",
];


export class TaskManager {
    constructor(
        private taskStore: ITaskStore,
        private logger: ILogger
    ) {
    }

    applyUpdateToTaskAndHistory(
        current: TaskAndHistory,
        update: TaskUpdate,
    ): TaskAndHistory {
        let newTask = { ...current.task }; // Shallow copy task
        let newHistory = [...current.history]; // Shallow copy history

        if (isTaskStatusUpdate(update)) {
            // Merge status update
            newTask.status = {
                ...newTask.status, // Keep existing properties if not overwritten
                ...update, // Apply updates
                timestamp: getCurrentTimestamp(), // Always update timestamp
            };
            // If the update includes an agent message, add it to history
            if (update.message?.role === "agent") {
                newHistory.push(update.message);
            }
        } else if (isArtifactUpdate(update) || (Array.isArray(update) && update.every(isArtifactUpdate))) {
            // Handle artifact update
            if (!newTask.artifacts) {
                newTask.artifacts = [];
            } else {
                // Ensure we're working with a copy of the artifacts array
                newTask.artifacts = [...newTask.artifacts];
            }

            const updates = Array.isArray(update) ? update : [update];
            for (const update of updates) {
                const existingIndex = update.index ?? -1; // Use index if provided
                let replaced = false;

                if (existingIndex >= 0 && existingIndex < newTask.artifacts.length) {
                    const existingArtifact = newTask.artifacts[existingIndex];
                    if (update.append) {
                        // Create a deep copy for modification to avoid mutating original
                        const appendedArtifact = JSON.parse(JSON.stringify(existingArtifact));
                        appendedArtifact.parts.push(...update.parts);
                        if (update.metadata) {
                            appendedArtifact.metadata = {
                                ...(appendedArtifact.metadata || {}),
                                ...update.metadata,
                            };
                        }
                        if (update.lastChunk !== undefined)
                            appendedArtifact.lastChunk = update.lastChunk;
                        if (update.description)
                            appendedArtifact.description = update.description;
                        newTask.artifacts[existingIndex] = appendedArtifact; // Replace with appended version
                        replaced = true;
                    } else {
                        // Overwrite artifact at index (with a copy of the update)
                        newTask.artifacts[existingIndex] = { ...update };
                        replaced = true;
                    }
                } else if (update.name) {
                    const namedIndex = newTask.artifacts.findIndex(
                        (a) => a.name === update.name
                    );
                    if (namedIndex >= 0) {
                        newTask.artifacts[namedIndex] = { ...update }; // Replace by name (with copy)
                        replaced = true;
                    }
                }

                if (!replaced) {
                    newTask.artifacts.push({ ...update }); // Add as a new artifact (copy)
                    // Sort if indices are present
                    if (newTask.artifacts.some((a) => a.index !== undefined)) {
                        newTask.artifacts.sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
                    }
                }
            }
        }

        return { task: newTask, history: newHistory };
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
                    state: "submitted", // Start as submitted
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

            if (finalStates.includes(data.task.status.state)) {
                console.warn(
                    `[Task ${taskId}] Received message for task already in final state ${data.task.status.state}. Handling as new submission (keeping history).`
                );
                // Option 1: Reset state to 'submitted' (keeps history, effectively restarts)
                const resetUpdate: Omit<schema.TaskStatus, "timestamp"> = {
                    state: "submitted",
                    message: null, // Clear old agent message
                };
                data = this.applyUpdateToTaskAndHistory(data, resetUpdate);
                // needsSave is already true

                // Option 2: Throw error (stricter)
                // throw A2AError.invalidRequest(`Task ${taskId} is already in a final state.`);
            } else if (data.task.status.state === "input-required") {
                this.logger.debug(
                    `[Task ${taskId}] Received message while 'input-required', changing state to 'working'.`
                );
                // If it was waiting for input, update state to 'working'
                const workingUpdate: Omit<schema.TaskStatus, "timestamp"> = {
                    state: "working",
                };
                data = this.applyUpdateToTaskAndHistory(data, workingUpdate);
                // needsSave is already true
            } else if (data.task.status.state === "working") {
                // If already working, maybe warn but allow? Or force back to submitted?
                console.warn(
                    `[Task ${taskId}] Received message while already 'working'. Proceeding.`
                );
                // No state change needed, but history was updated, so needsSave is true.
            }
            // If 'submitted', receiving another message might be odd, but proceed.
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
        history: schema.Message[] // Add history parameter
    ): TaskContext {
        return {
            task: { ...task }, // Pass a copy
            userMessage: userMessage,
            history: [...history], // Pass a copy of the history
            isCancelled: () => false, // TODO: support this when cancellations are implemented
        };
    }

    isFinalState(current: TaskAndHistory,): boolean {
        return finalStates.includes(current.task.status.state);
    }
}