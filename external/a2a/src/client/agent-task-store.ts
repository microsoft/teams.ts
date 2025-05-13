import { IListStorage, ListLocalStorage } from '@microsoft/teams.common';

import { ITaskStore, TaskAndHistory } from '../server/types/a2a-types';

export interface IAgentTaskStore extends ITaskStore {
    lastTasks(n: number): Promise<TaskAndHistory[]>;
}

export interface IAgentTaskStoreFactory {
    getStore(agentKey: string): IAgentTaskStore;
}

/**
 * Implmenets a task store for a given agent using a list storage.
 */
export class AgentTaskStore implements IAgentTaskStore {
    constructor(private store: IListStorage<TaskAndHistory>) { }

    async save(data: TaskAndHistory): Promise<void> {
        const all = await this.store.values();
        const idx = all.findIndex(t => t.task.id === data.task.id);
        if (idx !== -1) {
            await this.store.set(idx, data);
        } else {
            await this.store.push(data);
        }
    }

    async load(taskId: string): Promise<TaskAndHistory | null> {
        const all = await this.store.values();
        const found = all.find(t => t.task.id === taskId);
        return found ?? null;
    }

    async lastTasks(n: number): Promise<TaskAndHistory[]> {
        const all = await this.store.values();
        return all.slice(-n);
    }
}

/**
 * In-memory task store factory.
 */
export class InMemoryTaskStoreFactory implements IAgentTaskStoreFactory {
    private stores = new Map<string, IAgentTaskStore>();

    getStore(agentKey: string): IAgentTaskStore {
        if (!this.stores.has(agentKey)) {
            this.stores.set(agentKey, new AgentTaskStore(new ListLocalStorage<TaskAndHistory>()));
        }
        return this.stores.get(agentKey)!;
    }
}