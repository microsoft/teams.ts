import 'reflect-metadata';

export const PLUGIN_FIELDS_METADATA_KEY = 'teams:plugin:fields';

export type InjectMetadata = Array<FieldMetadata>;
export type FieldMetadata = {
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

export type InjectOptions = {
  /**
   * the name used to resolve the dependency
   */
  readonly name?: string;

  /**
   * if optional, the app will not throw
   * if the dependency is not found
   */
  readonly optional?: boolean;
};

/**
 * add plugin dependencies via
 * `@Inject()`
 */
export function Inject(nameOrOptions?: string | InjectOptions) {
  const name = typeof nameOrOptions === 'string' ? nameOrOptions : nameOrOptions?.name;
  const optional = typeof nameOrOptions === 'string' ? false : nameOrOptions?.optional || false;

  return (target: any, propertyKey: string | ClassFieldDecoratorContext) => {
    if (typeof propertyKey === 'string') {
      const TargetType = target.constructor;
      const FieldType = Reflect.getMetadata('design:type', target, propertyKey);
      const fieldTypeKey = name || FieldType.name;

      const targetFieldsMetadata: InjectMetadata =
        Reflect.getOwnMetadata(PLUGIN_FIELDS_METADATA_KEY, TargetType) || [];

      targetFieldsMetadata.push({
        key: propertyKey,
        type: fieldTypeKey,
        optional,
      });

      Reflect.defineMetadata(PLUGIN_FIELDS_METADATA_KEY, targetFieldsMetadata, TargetType);
    }
  };
}

/**
 * inject the `App` `ILogger` instance
 */
export function Logger() {
  return Inject('ILogger');
}

/**
 * inject the `App` `IStorage` instance
 */
export function Storage() {
  return Inject('IStorage');
}
