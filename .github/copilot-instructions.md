# Copilot instructions

Follow the shared repository guidance in [AGENTS.md](../AGENTS.md).

## Public API changes

- Check every diff for public API additions, removals, renames, and modifications, including exports, public members, signatures, types, configuration options, defaults, and observable behavior. Additive and non-breaking changes must also be called out.
- Whenever a public API changes, include a prominent **Public API change** warning in the PR description. List each affected package and API, what changed, and a clear reason why the change is necessary and intentional. Code comments, commit messages, or review discussions alone are not sufficient justification.
- State the compatibility impact of each change. For breaking changes, include migration guidance for existing callers.
- During review, explicitly flag public API changes. Report missing or unclear rationale in the PR description as **[HIGH]**; do not assume an API change was intentional.
