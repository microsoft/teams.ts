/**
 *
 * An interface representing ReplyChainInfo.
 * Identifies the reply chain (thread) that an inbound activity belongs to, by the message at the root of the chain.
 *
 */
export type ReplyChainInfo = {
  /**
   * @member {string} [id] The id of the message at the root of the reply chain/thread.
   * Use it as the reply chain id when replying in a reply chain (e.g. threading).
   */
  readonly id?: string;
};
