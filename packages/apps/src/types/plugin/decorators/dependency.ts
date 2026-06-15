import 'reflect-metadata';
import { PLUGIN_METADATA_KEY, PluginOptions } from './plugin';

export const PLUGIN_DEPENDENCIES_METADATA_KEY = 'teams:plugin:dependencies';

export type DependencyMetadata = {
  /**
   * the property name
   */
  readonly key: string;

  /**
   * the property type
   */
  readonly type: string;

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional: boolean;
};

/**
 * add plugin dependencies via
 * `@Dependency()`
 */
export function Dependency(options: DependencyOptions = {}) {
  const name = options.name;
  const optional = options.optional || false;

  return (target: any, propertyKey: string | ClassFieldDecoratorContext) => {
    if (typeof propertyKey === 'string') {
      const TargetType = target.constructor;
      const FieldType = Reflect.getMetadata('design:type', target, propertyKey);
      let fieldTypeKey = name || FieldType.name;

      // if plugin, resolve using the plugins name
      if (Reflect.hasMetadata(PLUGIN_METADATA_KEY, FieldType)) {
        const meta: PluginOptions = Reflect.getMetadata(PLUGIN_METADATA_KEY, FieldType);
        fieldTypeKey = meta.name;
      }

      const targetFieldsMetadata: Array<DependencyMetadata> =
        Reflect.getOwnMetadata(PLUGIN_DEPENDENCIES_METADATA_KEY, TargetType) || [];

      targetFieldsMetadata.push({
        key: propertyKey,
        type: fieldTypeKey,
        optional,
      });

      Reflect.defineMetadata(PLUGIN_DEPENDENCIES_METADATA_KEY, targetFieldsMetadata, TargetType);
    }
  };
}

/**
 * inject the `App` `ILogger` instance
 */
export function Logger() {
  return Dependency({ name: 'ILogger' });
}

/**
 * inject the `App` `IStorage` instance
 */
export function Storage() {
  return Dependency({ name: 'IStorage' });
}

/**
 * inject the `App` `IHttpServer` instance
 * @deprecated Server injection is best-effort and may be unavailable for custom runtimes.
 */
export function HttpServer() {
  return Dependency({ name: 'IHttpServer' });
}

/**
 * options for a plugins dependency
 * that should get injected into it
 * by the `App`
 */
export type DependencyOptions =
  | LoggerDependencyOptions
  | StorageDependencyOptions
  | HttpServerDependencyOptions
  | PluginDependencyOptions;

export type LoggerDependencyOptions = {
  /**
   * the name used to resolve the dependency
   */
  readonly name: 'ILogger';

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional?: false;
};

export type StorageDependencyOptions = {
  /**
   * the name used to resolve the dependency
   */
  readonly name: 'IStorage';

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional?: false;
};

export type HttpServerDependencyOptions = {
  /**
   * the name used to resolve the dependency
   */
  readonly name: 'IHttpServer';

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional?: false;
};

export type PluginDependencyOptions = {
  /**
   * the name used to resolve the dependency
   */
  readonly name?: Omit<
    string,
    'ILogger' | 'IStorage' | 'IHttpServer'
  >;

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional?: boolean;
};
