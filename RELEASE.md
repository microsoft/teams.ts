# Release Process

This project uses [Nerdbank.GitVersioning](https://github.com/dotnet/Nerdbank.GitVersioning) for automatic version management.

Each maintained release line uses a versioned branch named `release/v<major>.<minor>` (for example, `release/v2.0`). Set `RELEASE_BRANCH` to the line you are releasing before running the commands below:

```bash
RELEASE_BRANCH=release/v2.0
```

## Creating a Release

1. **Create a preparation branch from the matching release branch**:
   ```bash
   git fetch origin
   git checkout -b prep-release/<next-version> "origin/$RELEASE_BRANCH"
   ```
   - If `main` is still on the same major/minor development line, merge `origin/main`
   - For an older maintained line, include only the intended backports; do not merge a newer development line
   - Set `version.json` to the stable version being released (e.g. remove the `-preview.{height}` suffix)
   - Commit and push

2. **Create a PR to `$RELEASE_BRANCH`** (compare: `prep-release/<next-version>`):
   - The PR will include the intended changes for that release line plus the version bump
   - Get teammate approval and merge

3. **Trigger the [release pipeline](https://dev.azure.com/DomoreexpGithub/Github_Pipelines/_build?definitionId=52&_a=summary)** for `$RELEASE_BRANCH` with **Public** publish type

4. **Bump the version on main** for the next release cycle:
   - Edit `version.json` on main
   - Increment the patch version (e.g. `"2.0.7-preview.{height}"` → `"2.0.8-preview.{height}"`)
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

To fix a bug in a released version without including new preview changes:

1. **Consider if a normal release would work instead** - when `main` is on the same development line, merging it into the matching release branch includes all updates and is simpler. Only use a hotfix if you need to exclude newer changes from main.

2. **Create a branch from the matching versioned release branch**:
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

1. Ensure the current line is preserved in its versioned release branch (for example, `release/v2.0`)
2. Edit `version.json` on main branch
3. Update the version (e.g. `"2.0.x-preview.{height}"` → `"2.1.0-preview.{height}"` or `"3.0.0-preview.{height}"`)
4. Commit and push

## How Versioning Works

- Versions are computed automatically from git history based on `version.json`
- **Main branch**: `X.Y.Z-preview.1`, `X.Y.Z-preview.2`, etc. (prerelease, published with `next` npm tag)
- **Versioned release branches** (`release/v<major>.<minor>`): `X.Y.Z`, etc. (stable, published with `latest` npm tag)

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
