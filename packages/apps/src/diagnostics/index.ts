export * from './telemetry';

// Public Agent365 baggage surface. Identity resolvers stay internal to the package.
export { Agent365BaggageKeys, createAgent365Scope, withAgent365Baggage } from './agent365-baggage';
export type {
  Agent365BaggageEntries,
  Agent365BaggageInclude,
  Agent365BaggageValue,
  Agent365ScopeOpener,
  IAgent365BaggageOptions,
  IAgent365Scope,
  IAgent365ScopeOptions,
} from './agent365-baggage';
