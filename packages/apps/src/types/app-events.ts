import { IEvents } from '../events';

import { IPlugin } from './plugin';
import { UnionToIntersection } from './union-to-intersection';

/**
 * Extracts the events from a plugin if it extends PluginWithEvents
 */
export type PluginEvents<T> = T extends IPlugin<infer Events>
  ? Events
  : {};

type MergePluginEventMaps<TPlugins> = UnionToIntersection<
  TPlugins extends readonly unknown[]
  ? PluginEvents<TPlugins[number]>
  : PluginEvents<TPlugins>
>;

/**
 * Combines two sets of event types:
 * 1. Base events from IEvents interface (these are core-events)
 * 2. Custom events from all registered plugins that extend PluginWithEvents
 *
 * For any given event key K:
 * - If K exists in IEvents, use the event type from IEvents (i.e. prioritizes core-events)
 * - If K exists in plugin events, use the event type from plugins
 * - Otherwise, the type is never
 *
 * This creates a unified event type map that prioritizes base events
 * while still including all plugin-specific events.
 */
export type AppEvents<TPlugins> = {
  [K in
  | keyof IEvents
  | keyof MergePluginEventMaps<TPlugins>]: K extends keyof IEvents
  ? IEvents[K]
  : K extends keyof MergePluginEventMaps<TPlugins>
  ? MergePluginEventMaps<TPlugins>[K]
  : never;
};
