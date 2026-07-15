# Agent guidance

- Add JSDoc for new public-facing exports, including exported types, interfaces, methods, and options objects that are reachable from package entrypoints.
- When an option has non-obvious sentinel behavior, document it on the option itself. For example, if `undefined` preserves an existing default and `null` clears it, state that explicitly.
