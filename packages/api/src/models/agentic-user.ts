/**
 * Identifies an Agentic User and the Agent 365 resources used to acquire tokens
 * and send activities on that user's behalf.
 */
export type AgenticUser = {
  /**
   * ID of the concrete AgenticAppInstance that represents this Agentic User.
   */
  readonly agenticAppInstanceId: string;

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
   * ID of the AgenticBlueprint that backs the AgenticAppInstance. When
   * omitted, callers may fall back to their configured app ID if the API
   * surface documents that behavior.
   */
  readonly agenticBlueprintId?: string;
};
