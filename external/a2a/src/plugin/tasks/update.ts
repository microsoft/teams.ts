import * as schema from '../schema';
import { TaskAndHistory } from '../types';
import { getCurrentTimestamp, isArtifactUpdate, isTaskStatusUpdate } from './utils';


export function applyUpdateToTaskAndHistory(
    current: TaskAndHistory,
    update: Omit<schema.TaskStatus, "timestamp"> | schema.Artifact
): TaskAndHistory {
    const newTask = { ...current.task };
    const newHistory = [...current.history];

    if (isTaskStatusUpdate(update)) {
        applyStatusUpdate(newTask, newHistory, update);
    } else if (isArtifactUpdate(update)) {
        applyArtifactUpdate(newTask, update);
    }

    return { task: newTask, history: newHistory };
}

function applyStatusUpdate(
    task: schema.Task,
    history: schema.Message[],
    update: Omit<schema.TaskStatus, "timestamp">
) {
    task.status = {
        ...task.status,
        ...update,
        timestamp: getCurrentTimestamp(),
    };
    if (update.message?.role === "agent") {
        history.push(update.message);
    }
}

function applyArtifactUpdate(task: schema.Task, update: schema.Artifact) {
    if (!task.artifacts) task.artifacts = [];
    else task.artifacts = [...task.artifacts];

    const idx = update.index ?? -1;
    let replaced = false;

    if (idx >= 0 && idx < task.artifacts.length) {
        if (update.append) {
            const artifact = JSON.parse(JSON.stringify(task.artifacts[idx]));
            artifact.parts.push(...update.parts);
            if (update.metadata) artifact.metadata = { ...(artifact.metadata || {}), ...update.metadata };
            if (update.lastChunk !== undefined) artifact.lastChunk = update.lastChunk;
            if (update.description) artifact.description = update.description;
            task.artifacts[idx] = artifact;
        } else {
            task.artifacts[idx] = { ...update };
        }
        replaced = true;
    } else if (update.name) {
        const namedIdx = task.artifacts.findIndex(a => a.name === update.name);
        if (namedIdx >= 0) {
            task.artifacts[namedIdx] = { ...update };
            replaced = true;
        }
    }

    if (!replaced) {
        task.artifacts.push({ ...update });
        if (task.artifacts.some(a => a.index !== undefined)) {
            task.artifacts.sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
        }
    }
}
