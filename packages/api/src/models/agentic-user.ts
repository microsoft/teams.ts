/**
 * Identifies an Agentic User and the Agent 365 resources used to acquire tokens
 * and send activities on that user's behalf.
 */
export type AgenticUser = {
  /**
   * ID of the concrete AgentAppInstance that represents this Agentic User.
   */
  readonly agentAppInstanceId: string;

  /**
   * Entra object ID of the Agentic User.
   */
  readonly agenticUserId: string;

  /**
   * Tenant ID for token acquisition. When omitted, callers may fall back to
   * their configured tenant if the API surface documents that behavior.
   */
  readonly tenantId?: string;

  /**
   * ID of the AgentIdentityBlueprint that backs the AgentAppInstance. When
   * omitted, callers may fall back to their configured app ID if the API
   * surface documents that behavior.
   */
  readonly agentIdentityBlueprintId?: string;
};
