import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { ErrorCodeInternalError, JSONRPCError, JSONRPCResponse, type A2ARequest, type A2AResponse, type AgentCard, type SendTaskRequest, type SendTaskResponse, type Task, type TaskSendParams } from '../common/schema';
import { generateRequestId } from '../common/uuid';

/**
 * Options for constructing an A2AAgentClient.
 */
export type A2AAgentClientOptions = {
    /**
     * The base URL of the A2A agent endpoint. The client will fetch the agent card from this URL if agentCard is not provided.
     */
    baseUrl: string;
    /**
     * The agent card object. If provided, the client will use this directly and will not fetch it from the network.
     */
    agentCard?: AgentCard;
    /**
     * Optional custom fetch implementation (e.g., for Node.js environments without global fetch). Defaults to global fetch.
     */
    fetchImpl?: typeof fetch;
    /**
     * 
     */
    logger?: ILogger;
};

/**
 * Error class for JSON-RPC errors, matching the old-client-impl behavior.
 */
class RpcError extends Error {
    code: number;
    data?: unknown;
    constructor(code: number, message: string, data?: unknown) {
        super(message);
        this.name = 'RpcError';
        this.code = code;
        this.data = data;
    }
}

export class AgentCardNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AgentCardNotFoundError';
    }
}

/**
 * A2AAgentClient can be constructed with either a baseUrl (to fetch the agent card) or a direct AgentCard object.
 * Optionally, a custom fetch implementation can be provided.
 */
export class AgentClient {
    private _agentCard: AgentCard | null;

    private _baseUrl: string;
    public get baseUrl(): string {
        return this._baseUrl;
    }

    private _a2aUrl: string | null;
    public get a2aUrl(): string | null {
        return this._a2aUrl;
    }

    private _fetchImpl: typeof fetch;
    private _logger: ILogger;

    constructor(options: A2AAgentClientOptions) {
        this._baseUrl = options.baseUrl;
        this._agentCard = options.agentCard ?? null;
        this._fetchImpl = options.fetchImpl ?? fetch;
        this._a2aUrl = this._agentCard?.url ?? null;
        this._logger = options.logger ?? new ConsoleLogger('A2AAgentClient');
    }

    /**
     * Returns the agent card, fetching it if necessary.
     */
    async agentCard(): Promise<AgentCard> {
        if (this._agentCard) {
            return this._agentCard;
        }
        // Fetch from /.well-known/agent.json at the same origin as baseUrl
        const base = new URL(this._baseUrl).origin;
        const cardUrl = `${base}/.well-known/agent.json`;
        this._logger.debug(`Fetching agent card from ${cardUrl}`);
        try {
            const response = await this._fetchImpl(cardUrl, { method: 'GET', headers: { Accept: 'application/json' } });
            if (!response.ok) {
                this._logger.error(`Failed to fetch agent card: ${response.status} ${response.statusText}`);
                throw new AgentCardNotFoundError(`Failed to fetch agent card: ${response.status} ${response.statusText}`);
            }
            // TODO: validate using something like zod?
            const card = (await response.json()) as AgentCard;
            this._logger.debug(`Agent card fetched successfully from ${cardUrl}`, card);
            this._agentCard = card;
            this._a2aUrl = card.url;
            return card;
        } catch (error) {
            this._logger.error(`Failed to fetch agent card: ${error}`);
            throw new AgentCardNotFoundError(`Failed to fetch agent card: ${error}`);
        }
    }

    /**
     * Sends a task request to the agent (non-streaming).
     * @param params The parameters for the tasks/send method.
     * @returns A promise resolving to the Task object or null.
     */
    async sendTask(params: TaskSendParams): Promise<Task | null> {
        const httpResponse = await this._makeHttpRequest<SendTaskRequest>('tasks/send', params);
        return this._handleJsonResponse<SendTaskResponse>(httpResponse, 'tasks/send');
    }

    /**
     * Internal helper to make JSON-RPC HTTP requests.
     */
    private async _makeHttpRequest<Req extends A2ARequest>(
        method: Req['method'],
        params: Req['params'],
        acceptHeader: 'application/json' | 'text/event-stream' = 'application/json'
    ): Promise<Response> {
        if (!this._a2aUrl) {
            throw new Error('Agent URL is not set. Please call agentCard() to fetch the agent card.');
        }
        const requestId = generateRequestId();
        const requestBody = {
            jsonrpc: '2.0',
            id: requestId,
            method,
            params,
        };
        try {
            this._logger.debug(`Making JSON-RPC request to ${this._a2aUrl}:`, requestBody);
            const response = await this._fetchImpl(this._a2aUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: acceptHeader,
                },
                body: JSON.stringify(requestBody),
            });
            return response;
        } catch (networkError) {
            this._logger.error('Network error while making JSON-RPC request:', networkError);
            throw new RpcError(
                ErrorCodeInternalError,
                `Network error: ${networkError instanceof Error ? networkError.message : String(networkError)}`,
                networkError
            );
        }
    }

    /**
     * Handles standard JSON-RPC responses (non-streaming).
     */
    private async _handleJsonResponse<Res extends A2AResponse>(
        response: Response,
        expectedMethod?: string
    ): Promise<NonNullable<Res['result']> | null> {
        // Return type is now the 'result' property of Res
        let responseBody: string | null = null;
        try {
            if (!response.ok) {
                this._logger.error(`HTTP error ${response.status}: ${response.statusText}`);
                // Attempt to read body even for non-ok responses for potential JSON errors
                responseBody = await response.text();
                let errorData: JSONRPCError | null = null;
                try {
                    // Try parsing as JSON RPC Error response
                    const parsedError = JSON.parse(responseBody) as JSONRPCResponse<unknown, JSONRPCError>;
                    if (parsedError.error) {
                        errorData = parsedError.error;
                        throw new RpcError(
                            errorData.code,
                            errorData.message,
                            errorData.data
                        );
                    }
                } catch (parseError) {
                    // Ignore parsing error, fall through to generic HTTP error
                }
                // If not a JSON RPC error, throw generic HTTP error
                throw new Error(
                    `HTTP error ${response.status}: ${response.statusText}${responseBody ? ` - ${responseBody}` : ''
                    }`
                );
            }

            // Read and parse the successful JSON response
            responseBody = await response.text();
            // Parse as the specific JSONRPCResponse type Res
            const jsonResponse = JSON.parse(responseBody) as Res;

            // Basic validation of the JSON-RPC response structure
            if (
                typeof jsonResponse !== 'object' ||
                jsonResponse === null ||
                jsonResponse.jsonrpc !== '2.0'
            ) {
                throw new RpcError(
                    ErrorCodeInternalError,
                    'Invalid JSON-RPC response structure received from server.'
                );
            }

            // Check for application-level errors within the JSON-RPC response
            if (jsonResponse.error) {
                throw new RpcError(
                    jsonResponse.error.code,
                    jsonResponse.error.message,
                    jsonResponse.error.data
                );
            }

            // Optional: Validate response ID matches request ID if needed (requires passing request ID down)

            // Extract and return only the result payload
            return jsonResponse.result as NonNullable<Res['result']>;
        } catch (error) {
            this._logger.error(
                `Error processing RPC response for method ${expectedMethod || 'unknown'
                }:`,
                error,
                responseBody ? `\nResponse Body: ${responseBody}` : ''
            );
            // Re-throw RpcError instances directly, wrap others
            if (error instanceof RpcError) {
                throw error;
            } else {
                throw new RpcError(
                    ErrorCodeInternalError, // Use literal value for ErrorCodeInternalError
                    `Failed to process response: ${error instanceof Error ? error.message : String(error)
                    }`,
                    error
                );
            }
        }
    }
}