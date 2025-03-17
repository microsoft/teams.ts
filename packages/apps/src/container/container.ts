import 'reflect-metadata';

import { isFactoryProvider, Provider } from './provider';

/**
 * @private
 * any singleton registry
 */
export interface IContainer {
  /**
   * does the container have the
   * provided key
   * @param key the singleton key
   */
  has(key: string): boolean;

  /**
   * register a singleton
   * @param key the singleton key
   * @param value the singleton value
   */
  register<T = any>(key: string, provider: Provider<T>): void;

  /**
   * resolve a singleton
   * @param key the singleton key
   */
  resolve<T = any>(key: string): T | undefined;
}

/**
 * @private
 * a singleton container
 */
export class Container implements IContainer {
  protected readonly values = new Map<string, any>();
  protected readonly providers = new Map<string, Provider<any>>();

  has(key: string) {
    return this.providers.has(key);
  }

  register<T = any>(key: string, provider: Provider<T>) {
    if (this.providers.has(key)) {
      throw new Error(`key "${key}" already exists`);
    }

    this.providers.set(key, provider);
  }

  resolve<T = any>(key: string): T | undefined {
    const provider = this.providers.get(key);

    if (!provider) return;

    let value = this.values.get(key);

    if (value) {
      return value;
    }

    if (isFactoryProvider(provider)) {
      value = provider.useFactory();
    } else {
      value = provider.useValue;
    }

    this.values.set(key, value);
    return value;
  }
}
