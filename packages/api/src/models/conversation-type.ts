/**
 * The type of conversation an activity was received in.
 *
 * Open union: the known values are enumerated for autocomplete and intent.
 * `(string & {})` tail keeps forward-compatibility with values the service may introduce before the SDK enumerates them.
 */
export type ConversationType = 'personal' | 'groupChat' | 'channel' | (string & {});
