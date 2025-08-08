import { IPlugin } from './plugin';
import { UnionToIntersection } from './union-to-intersection';

import type { App } from '../app';
import type { IRoutes } from '../routes';

/**
 * Extracts the events from a plugin if it extends PluginWithEvents
 */
export type PluginAdditionalContext<T> = UnionToIntersection<
  T extends IPlugin<infer Ctx, any> ? Ctx : {}
> extends infer R ? R extends Record<string, any> ? R : {} : {};


type AppPlugin<TApp extends App> = TApp extends App<infer TPlugin> ? TPlugin : never;

export type AppRoutingHandler<Name extends keyof IRoutes, TApp extends App<any>> = Exclude<IRoutes<PluginAdditionalContext<AppPlugin<TApp>>>[Name], undefined>;