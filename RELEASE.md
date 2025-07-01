# Release Process

1. Pull latest changes
1. Run linter
1. install/build
1. run tests.
1. Install cli: cd into cli folder then `npm i -g`
1. Test the cli, run an app.

## Create Changeset

```bash
npx changeset add
```

1. ONLY select all the packages that start with @microsoft/teams.\*. NOT the test packages.

## Apply Changeset

```bash
npx changeset version
```

1. Run `npm i` again - `package-lock.json` updates
1. Update root `package.json` manually
1. Run `npm run build` to ensure everything is built correctly

## Publish Changeset

```bash
npx changeset publish
```

## Push Tags

```bash
git push --tags
```
