# Agent instructions

## Public API documentation

- Add JSDoc for every new public-facing field, function, interface, class, and type. Public API documentation should explain what callers can set or call, when it is used, and any important constraints or migration guidance.
- When an option has non-obvious sentinel behavior, document it on the option itself. For example, if `undefined` preserves an existing default and `null` clears it, state that explicitly.
