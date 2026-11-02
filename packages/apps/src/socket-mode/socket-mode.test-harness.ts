import { SocketModeAdapter } from './socket-mode-adapter';

/** Private transport controls for deterministic Socket Mode tests only. */
export type SocketModeTestSettings = Partial<SocketModeAdapter['transportSettings']>;

/** Configure private transport settings without adding developer-facing options. */
export function configureSocketModeForTest(
  adapter: SocketModeAdapter,
  settings: SocketModeTestSettings
): void {
  Object.assign(adapter['transportSettings'], settings);
}
