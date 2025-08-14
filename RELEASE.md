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

## Generate a Release Note

1. Go to https://github.com/microsoft/teams.ts/releases/new
2. Use the latest tag as the version (the one you just released)
3. Hit "Generate Release Notes"
4. Copy the generated release notes in the [.changeset folder](./.changeset), and paste them at the top of the generated release notes in the GitHub release page.
5. Hit "Publish Release"

## Commit and Push Changes

1. Create a new branch for the changes (`git checkout -b release/preview<version>`)
1. Commit all changes (`git add . && git commit -m "Release <version>"`)
1. Push the branch (`git push origin release/preview<version>`)
1. Create a pull request to the `main` branch
