/**
 * Identifies an Agent ID user-shaped identity and its backing agent app.
 */
export type AgenticIdentity = {
  readonly agenticAppId: string;
  readonly agenticUserId: string;
  readonly tenantId?: string;
  readonly agenticAppBlueprintId?: string;
};
