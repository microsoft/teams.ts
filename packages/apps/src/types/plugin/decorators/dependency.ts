import 'reflect-metadata';

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
export function Dependency(options: DependencyOptions = { }) {
  const name = options.name;
  const optional = options.optional || false;

  return (target: any, propertyKey: string | ClassFieldDecoratorContext) => {
    if (typeof propertyKey === 'string') {
      const TargetType = target.constructor;
      const FieldType = Reflect.getMetadata('design:type', target, propertyKey);
      const fieldTypeKey = name || FieldType.name;
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
 * options for a plugins dependency
 * that should get injected into it
 * by the `App`
 */
export type DependencyOptions =
  | IdDependencyOptions
  | NameDependencyOptions
  | ManifestDependencyOptions
  | CredentialsDependencyOptions
  | BotTokenDependencyOptions
  | GraphTokenDependencyOptions
  | LoggerDependencyOptions
  | StorageDependencyOptions
  | PluginDependencyOptions;

export type IdDependencyOptions = {
  /**
   * the name used to resolve the dependency
   */
  readonly name: 'id';

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional: true;
};

export type NameDependencyOptions = {
  /**
   * the name used to resolve the dependency
   */
  readonly name: 'name';

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional: true;
};

export type ManifestDependencyOptions = {
  /**
   * the name used to resolve the dependency
   */
  readonly name: 'manifest';

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional?: false;
};

export type CredentialsDependencyOptions = {
  /**
   * the name used to resolve the dependency
   */
  readonly name: 'credentials';

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional: true;
};

export type BotTokenDependencyOptions = {
  /**
   * the name used to resolve the dependency
   */
  readonly name: 'botToken';

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional: true;
};

export type GraphTokenDependencyOptions = {
  /**
   * the name used to resolve the dependency
   */
  readonly name: 'graphToken';

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional: true;
};

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

export type PluginDependencyOptions = {
  /**
   * the name used to resolve the dependency
   */
  readonly name?: Omit<string, 'id' | 'name' | 'manifest' | 'credentials' | 'botToken' | 'graphToken' | 'ILogger' | 'IStorage'>;

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional?: boolean;
};
