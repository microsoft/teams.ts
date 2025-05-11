import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { A2AAgentClient, A2AAgentClientOptions } from './a2a-agent-client';

import type { AgentCard, Task, TaskSendParams } from '../common/schema';

export type AgentCardWithDetails = { key: string, url: string, card: AgentCard };

export type A2AManagerOptions = Pick<A2AAgentClientOptions, 'fetchImpl' | 'logger'> & {
    /** 
     * Pre-configured agent cards for specific agent keys
    */
    agentCards?: Map<string, AgentCardWithDetails>;
};

export class A2AAgentManager {
    private _clients = new Map<string, { url: string, client: A2AAgentClient }>();
    private _defaultOptions: Pick<A2AManagerOptions, 'fetchImpl' | 'logger'>;
    private _logger: ILogger;

    constructor(options: A2AManagerOptions = {}) {
        const { agentCards, ...sharedOptions } = options;
        this._logger = sharedOptions.logger ?? new ConsoleLogger('A2AAgentManager');
        this._defaultOptions = sharedOptions;

        // Pre-initialize clients for any provided agent cards
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
    use(key: string, baseUrl: string, agentCard?: AgentCard): A2AAgentManager {
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
        return client.sendTask(params);
    }

    /**
     * Get the agent card for a given agent key, fetching it if necessary.
     * @param key The key of the agent
     * @returns The agent card
     */
    async getAgentCard(key: string): Promise<AgentCard> {
        const { client } = this.getOrCreateClient(key);
        return client.agentCard();
    }

    /**
     * Get all registered agent cards.
     * @returns Array of AgentCardWithUrl
     */
    async getAgentCards(): Promise<AgentCardWithDetails[]> {
        const result: AgentCardWithDetails[] = [];
        for (const [key, { url, client }] of this._clients.entries()) {
            const card = await client.agentCard();
            result.push({ key, url, card });
        }
        return result;
    }

    private getOrCreateClient(key: string, baseUrl?: string, override?: boolean, options?: Partial<A2AAgentClientOptions>): { url: string, client: A2AAgentClient } {
        let entry = this._clients.get(key);
        if (!entry || override) {
            if (entry) {
                this._logger.warn(`Overriding existing client for key ${key}`);
            }
            if (!baseUrl) {
                throw new Error(`Base URL must be provided when registering a new agent with key ${key}`);
            }
            const client = new A2AAgentClient({
                baseUrl,
                ...this._defaultOptions,
                ...options,
            });
            entry = { url: baseUrl, client };
            this._clients.set(key, entry);
        }
        return entry;
    }
} 