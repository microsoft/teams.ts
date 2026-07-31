/**
 * Agentic program identity scope used by SDK operations such as proactive
 * sends, scoped API clients, and token minting.
 *
 * This is a scoping term, not a replacement for concrete Agent 365 concepts.
 * Today Teams activities convey user-backed agentic identity fields, and future
 * SDK support can add additional concrete shapes without requiring callers to
 * provide a `kind` discriminator. Code that needs user-backed behavior should
 * check for field presence, for example `'agenticUserId' in identity`.
 */
export type AgenticIdentity = {
  /**
   * ID of the agentic app represented by this identity.
   */
  readonly agenticAppId: string;

  /**
   * Entra object ID of the user-backed agentic identity, when the operation
   * acts on behalf of a user.
   */
  readonly agenticUserId?: string;

  /**
   * Tenant ID for token acquisition. When omitted, callers may fall back to
   * their configured tenant if the API surface documents that behavior.
   */
  readonly tenantId?: string;

  /**
   * ID of the Agentic App Blueprint that backs the agentic app. When omitted,
   * callers may fall back to their configured app ID if the API surface
   * documents that behavior.
   */
  readonly agenticAppBlueprintId?: string;
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
