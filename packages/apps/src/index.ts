export * from './app';
export * from './plugins';
export * from './types';
export * from './contexts';
export * from './oauth';
export * from './events';
// Only the interface is public: the implementing class is constructed from the
// app's `TokenManager`, which is internal.
export type { IAppTokenProvider } from './token-provider';
export * from './diagnostics';

// HTTP infrastructure - public API
export * from './http';

// Socket Mode (inbound WebSocket transport). Only the developer-facing surface
// is public; the wire protocol (envelopes, reply frames, negotiate, connection
// internals) and the transitional CompositeAdapter stay module-private to avoid
// leaking unvalidated types and risking naming collisions.
export type { SocketModeAdapter, SocketModeOptions, SocketModeStatus, SocketModeEvents } from './socket-mode';

// Threading utilities
export { toThreadedConversationId } from './utils/thread';

// HTML Widget utilities
export { buildHtmlWidgetMarkdown, buildHtmlWidgetMessage, injectWidgetProtocol, validateSecurityPolicy, tryGetWidgetModelContext } from './utils/html-widget';
export type { IHtmlWidgetPayloadInput } from './utils/html-widget';
export type { IHtmlWidgetMarkdownOptions, IInjectWidgetProtocolOptions, ISecurityPolicyWarning } from './utils/html-widget';
