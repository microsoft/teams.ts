# Agent instructions

## Public API documentation

- Add JSDoc for every new public-facing field, function, interface, class, and type. Public API documentation should explain what callers can set or call, when it is used, and any important constraints or migration guidance.
- When an option has non-obvious sentinel behavior, document it on the option itself. For example, if `undefined` preserves an existing default and `null` clears it, state that explicitly.

## Tests

- Tests should be thoughtfully created to exercise the intended purpose, not just to turn green. When possible, do red-green tests: confirm the test fails when the behavior is wrong and passes when it is right, so it actually guards the behavior it claims to.
- Consider mocking carefully. The goal is to guard against regressions for the intended behavior, so mocks should mirror the real contract (types, shapes, and edge values like `null`) rather than a simplified stand-in that a broken implementation could still satisfy.
- Release validation may run on Windows as well as Linux. Keep filesystem code and tests cross-platform: use Node and `path` APIs instead of hard-coded separators; explicitly pass `'utf8'` when reading/writing text (e.g., `fs.readFile`/`fs.writeFile`) rather than relying on environment defaults; and avoid locale-dependent, case-sensitivity, or Unix-only filesystem assumptions.
