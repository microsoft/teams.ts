export * from './app';
export * from './plugins';
export * from './types';
export * from './contexts';
export * from './events';
export * from './state';
export * from './files';
export { DEFAULT_OAUTH_SETTINGS, OAuthFlow } from './oauth';
export type {
  OAuthSettings,
  OAuthSignInCompleteHandler,
  OAuthSignInFailureHandler,
  OAuthSignInOptions,
} from './oauth';
// Only the interface is public: the implementing class is constructed from the
// app's `TokenManager`, which is internal.
export type { IAppTokenProvider } from './token-provider';
export * from './diagnostics';

// HTTP infrastructure - public API
export * from './http';

// Threading utilities
export {
  getDefaultThreadId,
  getProactiveThreadReference,
  toThreadedConversationId,
} from './utils/thread';
export type { ProactiveThreadReference } from './utils/thread';

// HTML Widget utilities
export { buildHtmlWidgetMarkdown, buildHtmlWidgetMessage, injectWidgetProtocol, validateSecurityPolicy, tryGetWidgetModelContext } from './utils/html-widget';
export type { IHtmlWidgetPayloadInput } from './utils/html-widget';
export type { IHtmlWidgetMarkdownOptions, IInjectWidgetProtocolOptions, ISecurityPolicyWarning } from './utils/html-widget';
