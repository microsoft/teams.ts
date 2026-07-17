/**
 * Identifies an Agentic User and its backing Agent Blueprint app.
 */
export type AgenticIdentity = {
  readonly agenticAppId: string;
  readonly agenticUserId: string;
  readonly tenantId?: string;
  readonly agenticAppBlueprintId?: string;
};
