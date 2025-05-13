import * as schema from '../common/schema';

import { A2APlugin } from './plugin';
import { createSuccessResponse, normalizeError } from './serverUtils';
import { A2AError } from './types/a2a-error';


export async function onGetTaskRequest(
    this: A2APlugin,
    req: schema.GetTaskRequest,
    cb: (result?: schema.GetTaskResponse) => void
) {
    const { id: taskId } = req.params;
    // Load both task and history
    const data = await this._taskStore.load(taskId);
    if (!data) {
        cb(normalizeError(A2AError.taskNotFound(taskId), taskId));
        return;
    }
    // Return only the task object as per spec
    cb(createSuccessResponse(taskId, data.task));
}