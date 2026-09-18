# Release Process

This project uses [Nerdbank.GitVersioning](https://github.com/dotnet/Nerdbank.GitVersioning) for automatic version management.

Exactly one stable line is maintained at a time. It lives on a versioned branch named `release/v<major>.<minor>`, currently `release/v2.1`. `release/v2.0` is closed at `2.0.16` — it receives no further releases, and fixes for it ship forward as new patches on the current stable line.

This constraint exists because npm dist-tags are functional: `npm install @microsoft/teams.apps` resolves through `latest`, so publishing a stable `2.0.17` would repoint `latest` at it and silently downgrade every consumer off 2.1.x. The publish pipeline enforces this — `.azdo/publish.yml` declares a `currentStableBranch` variable, and a stable build from any other branch fails rather than moving `latest`.

Set `RELEASE_BRANCH` to the current stable line before running the commands below:

```bash
RELEASE_BRANCH=release/v2.1
```

## Creating a Release

1. **Create a preparation branch from the matching release branch**:
   ```bash
   git fetch origin
   git checkout -b prep-release/<next-version> "origin/$RELEASE_BRANCH"
   ```
   - If `main` is still on the same major/minor development line, merge `origin/main`
   - If `main` has already moved on to a newer development line, do not merge it — take only the intended changes (see [Hotfixes](#hotfixes))
   - Set `version.json` to the stable version being released (e.g. remove the `-preview.{height}` suffix)
   - Commit and push

2. **Create a PR to `$RELEASE_BRANCH`** (compare: `prep-release/<next-version>`):
   - The PR will include the intended changes for that release line plus the version bump
   - Get teammate approval and merge

3. **Trigger the [release pipeline](https://dev.azure.com/DomoreexpGithub/Github_Pipelines/_build?definitionId=52&_a=summary)** for `$RELEASE_BRANCH` with **Public** publish type

4. **Bump the version on main** for the next release cycle:
   - Edit `version.json` on main
   - Set the next planned development version:
     - For a patch cycle, increment the patch version (e.g. `"2.0.7-preview.{height}"` → `"2.0.8-preview.{height}"`)
     - For a minor cycle, increment the minor version and reset the patch to zero (e.g. `"2.1.0-preview.{height}"` → `"2.2.0-preview.{height}"`)
   - Commit and push (or PR)

5. **Create the git tag and GitHub Release page** after packages land on npm:
   ```bash
   gh release create v<version> -R microsoft/teams.ts \
     --target "$RELEASE_BRANCH" --title "v<version>" --draft \
     --generate-notes --notes-start-tag v<previous-version>
   ```
   The auto-generated notes walk back from the versioned release branch, which is squash-merged — so the list will only show the release PR. To get the real PR delta from `main`, query by date:
   ```bash
   gh api -X GET search/issues \
     -f q='repo:microsoft/teams.ts is:pr is:merged base:main merged:>=<previous-release-publish-date>' \
     --jq '.items[] | "* \(.title) by @\(.user.login) in \(.html_url)"' | tac > /tmp/notes.md
   ```
   Edit the draft (`gh release edit <id> --notes-file /tmp/notes.md`), then publish from the GitHub UI to create the tag.

## Hotfixes

Hotfixes apply to the current stable line only. A bug reported against a closed line is fixed forward as a new patch on the current stable line — it is not backported, and the closed line is not re-released.

To fix a bug in the current stable line without including new preview changes:

1. **Consider if a normal release would work instead** - when `main` is on the same development line, merging it into the matching release branch includes all updates and is simpler. Only use a hotfix if you need to exclude newer changes from main.

2. **Create a branch from the current stable release branch**:
   ```bash
   git fetch origin
   git checkout -b hotfix/fix-description "origin/$RELEASE_BRANCH"
   ```

3. **Make your fix and commit**

4. **Create a PR to `$RELEASE_BRANCH`**, get approval, and merge

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

1. Ensure the outgoing line is preserved in its versioned release branch (for example, `release/v2.0`). That branch is then closed — it receives no further releases.
2. Create the versioned release branch for the incoming line (for example, `release/v2.1`)
3. Update `currentStableBranch` in `.azdo/publish.yml` to the new branch. Until this lands, a stable build from it fails instead of publishing `latest`.
4. Edit `version.json` on main branch
5. Update the version (e.g. `"2.0.x-preview.{height}"` → `"2.1.0-preview.{height}"` or `"3.0.0-preview.{height}"`)
6. Commit and push

## How Versioning Works

- Versions are computed automatically from git history based on `version.json`
- **Main branch**: `X.Y.Z-preview.1`, `X.Y.Z-preview.2`, etc. (prerelease, published with `next` npm tag)
- **Current stable release branch** (`currentStableBranch` in `.azdo/publish.yml`, currently `release/v2.1`): `X.Y.Z`, etc. (stable, published with `latest` npm tag)
- **Closed release branches** (for example, `release/v2.0`): no further releases. A stable build from one fails the publish pipeline, so `latest` can never be downgraded to an older line.

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
