import 'reflect-metadata';

export const PLUGIN_METADATA_KEY = 'teams:plugin';

/**
 * options for the plugins
 */
export type PluginOptions = {
  /**
   * the unique plugin name
   */
  readonly name: string;

  /**
   * the plugin version
   */
  readonly version: string;

  /**
   * the plugin description
   */
  readonly description?: string;
};

/**
 * metadata for the plugin
 */
export type PluginMetadata = PluginOptions & {
  /**
   * the `Type` of the plugin
   */
  readonly type: any;
};

/**
 * turn any class into a plugin via
 * `@Plugin({ ... })`
 */
export function Plugin(metadata: Partial<PluginOptions> = {}) {
  return <T extends { new (...args: any[]): {} }>(Base: T) => {
    const name = metadata.name || Base.name;
    const version = metadata.version || '0.0.0';

    Reflect.defineMetadata(
      PLUGIN_METADATA_KEY,
      {
        name,
        version,
        description: metadata.description,
      },
      Base
    );

    console.log(Base.name);

    return Base;
  };
}
