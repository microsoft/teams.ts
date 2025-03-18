export type Provider<T = any> = ValueProvider<T> | FactoryProvider<T>;

export type ValueProvider<T = any> = {
  useValue: T;
};

export function isValueProvider<T = any>(provider: Provider<T>): provider is ValueProvider<T> {
  return !!(provider as ValueProvider).useValue;
}

export type FactoryProvider<T = any> = {
  useFactory: () => T;
};

export function isFactoryProvider<T = any>(provider: Provider<T>): provider is FactoryProvider<T> {
  return !!(provider as FactoryProvider).useFactory;
}
