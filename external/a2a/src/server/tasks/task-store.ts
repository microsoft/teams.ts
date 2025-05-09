import { IStorage } from '@microsoft/teams.common';

import { ITaskStore, TaskAndHistory } from '../types/a2a-types';

export class TaskStore implements ITaskStore {
    constructor(private storage: IStorage<string, TaskAndHistory>) { }

    async save(data: TaskAndHistory): Promise<void> {
        return this.storage.set(data.task.id, data);
    }

    async load(taskId: string): Promise<TaskAndHistory | null> {
        const result = await this.storage.get(taskId);
        return result ?? null;
    }
}
