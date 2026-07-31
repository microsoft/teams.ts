import type { AgenticUser } from './agentic-user';

/**
 * Agentic program identity scope used by SDK operations such as proactive sends
 * and scoped API clients.
 *
 * This is a scoping term, not a replacement for concrete Agent 365 concepts.
 * Today Teams activities convey an {@link AgenticUser}, and future SDK support
 * can add additional concrete shapes such as Agentic App Instance scopes to this
 * union. Concrete shapes are intentionally distinguished by required property
 * presence (for example, `'agenticUserId' in identity`) instead of a caller-set
 * discriminator field.
 */
export type AgenticIdentity = AgenticUser;

/**
 * Returns whether an agentic identity represents a concrete Agentic User.
 *
 * Prefer this guard, or an equivalent `'agenticUserId' in identity` check, when
 * code needs Agentic User-specific fields. Future Agentic App Instance shapes
 * will not carry `agenticUserId`.
 */
export function isAgenticUserIdentity(identity: AgenticIdentity): identity is AgenticUser {
  return 'agenticUserId' in identity;
}
