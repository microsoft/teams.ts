# Design / Architecture

This project is your batteries included solution for building apps in Teams.

## Rules

This project was built using some basic best practices that can help ensure the codebase
remains easy to maintain and high quality over time.

### 1. Multi-Package

You'll notice the project is broken into several packages, with some depending on others.
This was done for a few reasons:

#### Organization

By breaking the codebase into `responsibility` separated packages, we clearly define the
boundaries between what certain packages should or should not do.

#### Isolation

The boundaries previously mentioned also make debugging/fixing issues much easier, because
if you are experience odd behavior you can easily rule out most packages where the bug could
exist based on what they do, since `no two packages should overlap in responsibility`.

#### Reusability

Naturally, by breaking functionality out this way your packages can be reused easier. For example, both the `apps` and `client` packages use the `common` and `graph` packages.

### 2. Minimal Dependencies

While this project does have dependencies, the intention is to limit them as much as possible.
Over time dependencies change or get deprecated, requiring you to find replacements or fix breaking
changes that can result in bugs.

When necessary we will still use an external dependency, namely when an internal implementation is non-trivial.

### 3. Minimal Abstractions

Abstractions are a double edged sword, too little and your project will be too rigid, too many and
it will be overly complex.

This project was built using `thin` abstractions that provide the flexibility we need without adding bloat/complexity to the codebase.

### 4. Utilities vs Framework

A framework is opinionated, and typically requires you to use all its packages together for it to
work properly.

This project was designed to be closer to a set of utilities that _can_ be used together, but can also
be used standalone or with other app building products like **BotBuilder**. For example, the `api`, `ai`, `cards`, `openai`, `graph`, and `common` packages can all be used outside of the `apps` or `client` packages.
