# Release Process

This project uses [Nerdbank.GitVersioning](https://github.com/dotnet/Nerdbank.GitVersioning) for automatic version management.

## How Versioning Works

- Versions are computed automatically from git history based on `version.json`
- **Main branch**: `2.0.6-preview.1`, `2.0.6-preview.2`, etc. (prerelease)
- **Release branch**: `2.0.6`, `2.0.7`, etc. (stable)

## Creating a Release

1. **Prepare the release** (from main branch):
   ```bash
   npm run release:prepare
   ```
   This will:
   - Create a release branch (e.g., `release/v2.0.6`)
   - Bump main to the next preview version (e.g., `2.0.7-preview.{height}`)

2. **Push the release branch**:
   ```bash
   git push origin release/v2.0.6
   ```

3. **Trigger the release pipeline**: [Azure DevOps Pipeline](https://dev.azure.com/DomoreexpGithub/Github_Pipelines/_build?definitionId=46&_a=summary)

## Hotfixes

To fix a bug in a released version without including new preview changes:

1. **Checkout the release branch**:
   ```bash
   git checkout release/v2.0.6
   ```

2. **Make your fix and commit**

3. **Push and trigger the release pipeline**

4. **Cherry-pick the fix back to main**:
   ```bash
   git checkout main
   git cherry-pick <commit-sha>
   git push origin main
   ```
   This ensures the fix is included in future releases.

## Experimental Features

To publish experimental versions from a feature branch:

1. **Create your feature branch** from main

2. **Edit `version.json`** on the feature branch:
   ```json
   {
     "version": "2.0.6-myfeature.{height}"
   }
   ```

3. **Commits produce**: `2.0.6-myfeature.1`, `2.0.6-myfeature.2`, etc.

4. **Publish** from the feature branch using the release pipeline

5. **When ready**, merge to main (main's `version.json` takes over)

## Bumping Major/Minor Version

To bump from `2.0.x` to `2.1.x` or `3.0.x`:

1. Edit `version.json` on main branch
2. Change `"version": "2.0.6-preview.{height}"` to `"version": "2.1.0-preview.{height}"` (or `3.0.0-preview.{height}`)
3. Commit and push
