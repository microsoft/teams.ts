import { ConsoleLogger, ILogger } from '@microsoft/teams.common';
import type { AgentCard, Task, TaskSendParams } from '../common/schema';
import { A2AAgentClient, A2AAgentClientOptions } from './a2a-agent-client';

export type AgentCardWithDetails = { alias: string, url: string, card: AgentCard };

export type A2AManagerOptions = Pick<A2AAgentClientOptions, 'fetchImpl' | 'logger'> & {
    /** 
     * Pre-configured agent cards for specific aliases
    */
    agentCards?: Map<string, AgentCardWithDetails>;
};

export class A2AAgentManager {
    private _clients = new Map<string, { url: string, client: A2AAgentClient }>(); // keyed by agentAlias
    private _defaultOptions: Pick<A2AManagerOptions, 'fetchImpl' | 'logger'>;
    private _logger: ILogger;

    constructor(options: A2AManagerOptions = {}) {
        const { agentCards, ...sharedOptions } = options;
        this._logger = sharedOptions.logger ?? new ConsoleLogger('A2AAgentManager');
        this._defaultOptions = sharedOptions;

        // Pre-initialize clients for any provided agent cards
        if (agentCards) {
            for (const [alias, { url, card }] of agentCards) {
                this.use(alias, url, card);
            }
        }
    }

    /**
     * Register a new agent with the manager.
     * @param agentAlias The unique alias for the agent
     * @param baseUrl The base URL of the agent
     * @param agentCard Optional agent card. If not provided, it will be fetched when needed
     * @returns The client instance for this agent
     */
    use(agentAlias: string, baseUrl: string, agentCard?: AgentCard): A2AAgentManager {
        this.getOrCreateClient(agentAlias, baseUrl, true, { agentCard });
        return this;
    }

    /**
     * Send a task to an agent.
     * @param agentAlias The alias of the agent
     * @param params The parameters for the task
     * @returns The task after it has been sent and received from the agent
     */
    async sendTask(agentAlias: string, params: TaskSendParams): Promise<Task | null> {
        const { client } = this.getOrCreateClient(agentAlias);
        return client.sendTask(params);
    }

    /**
     * Get the agent card for a given agent alias, fetching it if necessary.
     * @param agentAlias The alias of the agent
     * @returns The agent card
     */
    async getAgentCard(agentAlias: string): Promise<AgentCard> {
        const { client } = this.getOrCreateClient(agentAlias);
        return client.agentCard();
    }

    /**
     * Get all registered agent cards.
     * @returns Array of AgentCardWithUrl
     */
    async getAgentCards(): Promise<AgentCardWithDetails[]> {
        const result: AgentCardWithDetails[] = [];
        for (const [alias, { url, client }] of this._clients.entries()) {
            const card = await client.agentCard();
            result.push({ alias, url, card });
        }
        return result;
    }

    private getOrCreateClient(agentAlias: string, baseUrl?: string, override?: boolean, options?: Partial<A2AAgentClientOptions>): { url: string, client: A2AAgentClient } {
        let entry = this._clients.get(agentAlias);
        if (!entry || override) {
            if (entry) {
                this._logger.warn(`Overriding existing client for alias ${agentAlias}`);
            }
            if (!baseUrl) {
                throw new Error(`Base URL must be provided when registering a new agent with alias ${agentAlias}`);
            }
            const client = new A2AAgentClient({
                baseUrl,
                ...this._defaultOptions,
                ...options,
            });
            entry = { url: baseUrl, client };
            this._clients.set(agentAlias, entry);
        }
        return entry;
    }
} 