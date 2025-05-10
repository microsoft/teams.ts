import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { A2AAgentClient, A2AAgentClientOptions } from './a2a-agent-client';

import type { AgentCard, Task, TaskSendParams } from '../common/schema';

export type A2AManagerOptions = Pick<A2AAgentClientOptions, 'fetchImpl' | 'logger'> & {
    /** 
     * Pre-configured agent cards for specific URLs 
    */
    agentCards?: Map<string, AgentCard>;
};

export class A2AAgentManager {
    private _clients = new Map<string, A2AAgentClient>();
    private _defaultOptions: Pick<A2AManagerOptions, 'fetchImpl' | 'logger'>;
    private _logger: ILogger;

    constructor(options: A2AManagerOptions = {}) {
        const { agentCards, ...sharedOptions } = options;
        this._logger = sharedOptions.logger ?? new ConsoleLogger('A2AAgentManager');
        this._defaultOptions = sharedOptions;

        // Pre-initialize clients for any provided agent cards
        if (agentCards) {
            for (const [url, card] of agentCards) {
                this.use(url, card);
            }
        }
    }

    /**
     * Register a new agent with the manager.
     * @param baseUrl The base URL of the agent
     * @param agentCard Optional agent card. If not provided, it will be fetched when needed
     * @returns The client instance for this agent
     */
    use(baseUrl: string, agentCard?: AgentCard): A2AAgentManager {
        this.getOrCreateClient(baseUrl, true, { agentCard });
        return this;
    }

    /**
     * Send a task to an agent.
     * @param baseUrl The base URL of the agent
     * @param params The parameters for the task
     * @returns The task after it has been sent and received from the agent
     */
    async sendTask(baseUrl: string, params: TaskSendParams): Promise<Task | null> {
        const client = this.getOrCreateClient(baseUrl, false);
        return client.sendTask(params);
    }

    /**
     * Get the agent card for a given agent URL, fetching it if necessary.
     * @param baseUrl The base URL of the agent
     * @returns The agent card
     */
    async getAgentCard(baseUrl: string): Promise<AgentCard> {
        const client = this.getOrCreateClient(baseUrl, false);
        return client.agentCard();
    }

    /**
     * Get all registered agent cards.
     */
    async getAgentCards(): Promise<AgentCard[]> {
        const urls = this.getAgentUrls();
        const cards: AgentCard[] = [];
        for (const url of urls) {
            cards.push(await this.getAgentCard(url));
        }
        return cards;
    }

    private getOrCreateClient(baseUrl: string, override?: boolean, options?: Partial<A2AAgentClientOptions>): A2AAgentClient {
        let client = this._clients.get(baseUrl);
        if (!client || override) {
            if (client) {
                this._logger.warn(`Overriding existing client for ${baseUrl}`);
            }
            client = new A2AAgentClient({
                baseUrl,
                ...this._defaultOptions,
                ...options,
            });
            this._clients.set(baseUrl, client);
        }
        return client;
    }

    private getAgentUrls(): string[] {
        return Array.from(this._clients.keys());
    }
} 