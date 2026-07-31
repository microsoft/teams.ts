/**
 * SDK operation/request scope for the Agent 365 program.
 *
 * An AgenticIdentity encompasses an agentic app blueprint
 * (`agenticAppBlueprintId`), which can instantiate agentic apps
 * (`agenticAppId`), and each app can optionally have associated agentic users
 * (`agenticUserId`).
 */
export type AgenticIdentity = {
  /**
   * ID of the Agentic App Blueprint that backs the agentic app.
   */
  readonly agenticAppBlueprintId: string;

  /**
   * ID of the agentic app represented by this identity, when available/needed.
   */
  readonly agenticAppId?: string;

  /**
   * Entra object ID of the user-backed agentic identity, when the operation
   * acts on behalf of a user.
   */
  readonly agenticUserId?: string;

  /**
   * Tenant ID for token acquisition.
   */
  readonly tenantId?: string;
};

/**
 * Returns whether an agentic identity carries user-backed fields.
 *
 * Prefer this guard, or an equivalent `'agenticUserId' in identity` check, when
 * code needs user-specific fields. App-backed identity shapes do not need to
 * carry `agenticUserId`.
 */
export function isUserBackedAgenticIdentity(
  identity: AgenticIdentity
): identity is AgenticIdentity & { readonly agenticUserId: string } {
  return typeof identity.agenticUserId === 'string' && identity.agenticUserId.length > 0;
}
