import { IPlugin } from './plugin';

/**
 * Extracts the events from a plugin if it extends PluginWithEvents
 */
export type PluginAdditionalCtx<T> = T extends IPlugin<infer Ctx, any>
  ? Ctx
  : {};

