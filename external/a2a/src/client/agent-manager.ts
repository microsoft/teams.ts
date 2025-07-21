import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { A2AAgentClientOptions, AgentCardNotFoundError, AgentClient } from './agent-client';

import { IAgentTaskStoreFactory, InMemoryTaskStoreFactory } from './agent-task-store';

import type { AgentCard, Task, TaskSendParams } from '../common/schema';
import type { TaskAndHistory } from '../server/types/a2a-types';
export type AgentCardWithDetails = { key: string, url: string, card: AgentCard };

export type AgentManagerOptions = Pick<A2AAgentClientOptions, 'fetchImpl' | 'logger'> & {
    /**
     * Optional map of agent keys to their details.
     */
    agentCards?: Map<string, AgentCardWithDetails>;
    /**
     * Optional task store factory.
     */
    taskStoreFactory?: IAgentTaskStoreFactory;
};

export class AgentManager {
    private _clients = new Map<string, { url: string, client: AgentClient }>();
    private _defaultOptions: Pick<AgentManagerOptions, 'fetchImpl' | 'logger'>;
    private _logger: ILogger;
    private _taskStoreFactory: IAgentTaskStoreFactory;

    constructor(options: AgentManagerOptions = {}) {
        const { agentCards, taskStoreFactory, ...sharedOptions } = options;
        this._logger = sharedOptions.logger?.child('A2AAgentManager') ?? new ConsoleLogger('A2AAgentManager');
        this._defaultOptions = sharedOptions;
        this._taskStoreFactory = taskStoreFactory ?? new InMemoryTaskStoreFactory();
        if (agentCards) {
            for (const [key, { url, card }] of agentCards) {
                this.use(key, url, card);
            }
        }
    }

    /**
     * Register a new agent with the manager.
     * @param key The unique key for the agent
     * @param baseUrl The base URL of the agent
     * @param agentCard Optional agent card. If not provided, it will be fetched when needed
     * @returns The client instance for this agent
     */
    use(key: string, baseUrl: string, agentCard?: AgentCard): AgentManager {
        this.getOrCreateClient(key, baseUrl, true, { agentCard });
        return this;
    }

    /**
     * Send a task to an agent.
     * @param key The key of the agent
     * @param params The parameters for the task
     * @returns The task after it has been sent and received from the agent
     */
    async sendTask(key: string, params: TaskSendParams): Promise<Task | null> {
        const { client } = this.getOrCreateClient(key);
        // Save before sending
        if (params.id) {
            await this.saveTask(key, { task: { ...params, status: { state: 'submitted', timestamp: new Date().toISOString(), message: params.message }, artifacts: [], metadata: params.metadata }, history: [params.message] });
        }
        const result = await client.sendTask(params);
        // Save after sending (with updated task)
        if (result) {
            await this.saveTask(key, { task: result, history: [params.message] });
        } else {
            this._logger.warn(`A null result was returned from agent ${key}`);
        }
        return result;
    }

    /**
     * Get the agent card for a given agent key, fetching it if necessary.
     * @param key The key of the agent
     * @param throwIfNotFound If true, throw an error if the agent card is not found
     * @returns The agent card
     */
    async getAgentCard(key: string, throwIfNotFound = false): Promise<AgentCard | null> {
        const { client } = this.getOrCreateClient(key);
        try {
            const card = await client.agentCard();
            return card;
        } catch (error) {
            if (error instanceof AgentCardNotFoundError) {
                if (throwIfNotFound) {
                    this._logger.warn(`Agent card not found for key ${key}`);
                    throw error;
                }
                return null;
            }
            throw error;
        }
    }

    /**
     * Get all registered agent cards.
     * @param throwIfNotFound If true, throw an error if the agent card is not found. defaults to false.
     * @returns Array of AgentCardWithUrl
     */
    async getAgentCards(throwIfNotFound = false): Promise<(AgentCardWithDetails | null)[]> {
        const result: (AgentCardWithDetails | null)[] = [];
        for (const [key, { url, client }] of this._clients.entries()) {
            try {
                const card = await client.agentCard();
                result.push({ key, url, card });
            } catch (error) {
                if (error instanceof AgentCardNotFoundError) {
                    if (throwIfNotFound) {
                        this._logger.warn(`Agent card not found for key ${key}`);
                        throw error;
                    }
                    result.push(null);
                } else {
                    throw error;
                }
            }
        }
        return result;
    }

    async getLatestTask(key: string): Promise<TaskAndHistory | null> {
        const store = this._taskStoreFactory.getStore(key);
        const last = await store.lastTasks(1);
        return last.length > 0 ? last[0] : null;
    }

    private getOrCreateClient(key: string, baseUrl?: string, override?: boolean, options?: Partial<A2AAgentClientOptions>): { url: string, client: AgentClient } {
        let entry = this._clients.get(key);
        if (!entry || override) {
            if (entry) {
                this._logger.warn(`Overriding existing client for key ${key}`);
            }
            if (!baseUrl) {
                throw new Error(`Base URL must be provided when registering a new agent with key ${key}`);
            }
            const client = new AgentClient({
                baseUrl,
                ...this._defaultOptions,
                ...options,
            });
            entry = { url: baseUrl, client };
            this._clients.set(key, entry);
        }
        return entry;
    }

    private async saveTask(key: string, data: TaskAndHistory): Promise<void> {
        const store = this._taskStoreFactory.getStore(key);
        await store.save(data);
    }
} 