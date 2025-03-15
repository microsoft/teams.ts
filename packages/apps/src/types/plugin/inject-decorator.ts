import 'reflect-metadata';

import { PLUGIN_METADATA_KEY, PluginMetadata } from './plugin-decorator';

export const INJECT_METADATA_KEY = 'teams:plugin:inject';

export type InjectMetadata = {
  /**
   * the property name
   */
  readonly key: string;

  /**
   * the property type
   */
  readonly type: any;
};

/**
 * add plugin dependencies via
 * `@Inject()`
 */
export function Inject() {
  return (target: any, key: string | ClassFieldDecoratorContext) => {
    if (typeof key === 'string') {
      const TargetType = target.constructor;
      const FieldType = Reflect.getMetadata('design:type', target, key);
      const fieldTypeMetadata: PluginMetadata | undefined = Reflect.getOwnMetadata(
        PLUGIN_METADATA_KEY,
        FieldType
      );

      if (!fieldTypeMetadata) {
        throw new Error(
          `field type "${TargetType.name}.${key}.${FieldType.name}" is not a valid plugin`
        );
      }

      const targetFieldsMetadata: Array<InjectMetadata> =
        Reflect.getOwnMetadata(INJECT_METADATA_KEY, TargetType) || [];
      targetFieldsMetadata.push({ key, type: FieldType });
      Reflect.defineMetadata(INJECT_METADATA_KEY, targetFieldsMetadata, TargetType);
    }
  };
}
