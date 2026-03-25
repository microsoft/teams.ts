# Release Process

This project uses [Nerdbank.GitVersioning](https://github.com/dotnet/Nerdbank.GitVersioning) for automatic version management.

## Creating a Release

1. **Create a branch from `release`** and merge `main` into it:
   ```bash
   git checkout -b prep-release/<next-version> release
   git merge origin/main
   ```
   - Set `version.json` to the stable version being released (e.g. remove the `-preview.{height}` suffix)
   - Commit and push

2. **Create a PR to `release`** (base: `release`, compare: `prep-release/<next-version>`):
   - The PR will include all changes from main plus the version bump
   - Get teammate approval and merge

3. **Trigger the [release pipeline](https://dev.azure.com/DomoreexpGithub/Github_Pipelines/_build?definitionId=52&_a=summary)** for the `release` branch with **Public** publish type

4. **Bump the version on main** for the next release cycle:
   - Edit `version.json` on main
   - Increment the patch version (e.g. `"2.0.7-preview.{height}"` → `"2.0.8-preview.{height}"`)
   - Commit and push (or PR)

## Hotfixes

To fix a bug in a released version without including new preview changes:

1. **Consider if a normal release would work instead** - merging main to release includes all updates and is simpler. Only use a hotfix if you need to exclude preview changes from main.

2. **Create a branch from `release`**:
   ```bash
   git checkout release
   git checkout -b hotfix/fix-description
   ```

3. **Make your fix and commit**

4. **Create a PR to `release`**, get approval, and merge

5. **Trigger the release pipeline**

6. **Cherry-pick the fix back to main**:
   ```bash
   git checkout main
   git cherry-pick <commit-sha>
   git push origin main
   ```

## Experimental Features

To publish experimental versions from a feature branch:

1. **Create your feature branch** from main

2. **Edit `version.json`** on the feature branch:
   ```json
   {
     "version": "<current-version>-myfeature.{height}"
   }
   ```

3. **Commits produce**: `<current-version>-myfeature.1`, `<current-version>-myfeature.2`, etc.

4. **Publish** from the feature branch using the release pipeline

5. **When ready**, merge to main (main's `version.json` takes over)

## Bumping Major/Minor Version

To bump from `2.0.x` to `2.1.x` or `3.0.x`:

1. Edit `version.json` on main branch
2. Update the version (e.g. `"2.0.x-preview.{height}"` → `"2.1.0-preview.{height}"` or `"3.0.0-preview.{height}"`)
3. Commit and push

## How Versioning Works

- Versions are computed automatically from git history based on `version.json`
- **Main branch**: `X.Y.Z-preview.1`, `X.Y.Z-preview.2`, etc. (prerelease, published with `next` npm tag)
- **Release branch**: `X.Y.Z`, etc. (stable, published with `latest` npm tag)

## Publishing

The [publish pipeline](https://dev.azure.com/DomoreexpGithub/Github_Pipelines/_build?definitionId=52&_a=summary) (`.azdo/publish.yml`) is manually triggered and requires selecting a **Publish Type**: `Internal` or `Public`.

1. Go to **Pipelines** > **teams.ts** in ADO
2. Click **Run pipeline**
3. Select the branch to build from
4. Choose a **Publish Type**:
   - **Internal** — publishes unsigned packages to the Azure Artifacts `TeamsSDKPreviews` npm feed. No approval required. Packages are available immediately.
   - **Public** — signs and publishes packages to npm via ESRP. Requires approval via the ADO pipeline environment.
5. Pipeline runs: Build > Test > Stamp versions > Pack > Publish

The pipeline packs all non-private packages from `packages/` and `external/` directories. Packages with `"private": true` in their `package.json` are skipped.

## Approvers

The ADO pipeline environment controls who can approve public releases. To modify approvers:

1. Go to **Pipelines** > **Environments** in ADO
2. Select the publish environment `teams-sdk-publish`
3. Click the **three dots** menu > **Approvals and checks**
4. Add/remove approvers as needed
