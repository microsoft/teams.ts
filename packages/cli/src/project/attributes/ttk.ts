import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { Compound, Copy, FileJsonSet, FileUpdate, FileYamlSet, If } from '../operations';
import { IProjectAttribute } from '../project-attribute';

export class TeamsToolkitAttribute implements IProjectAttribute {
  readonly id: string;
  readonly name: string;
  readonly alias = 'ttk';
  readonly description = 'include Teams Toolkit configuration';

  constructor(name: string) {
    this.id = `ttk[${name}]`;
    this.name = name;
  }

  typescript(targetDir: string) {
    return new Compound(
      new Copy(
        path.resolve(url.fileURLToPath(import.meta.url), '../..', 'configs', 'ttk', this.name, 'typescript'),
        targetDir
      ),
      new FileJsonSet(targetDir, 'package.json', 'devDependencies.env-cmd', 'latest'),
      new FileJsonSet(
        targetDir,
        'package.json',
        'scripts.dev:teamsfx',
        'npx cross-env NODE_OPTIONS=\'--inspect=9239\' npx env-cmd -f .env npm run dev'
      ),
      new FileJsonSet(
        targetDir,
        'package.json',
        'scripts.dev:teamsfx:testtool',
        'npx cross-env NODE_OPTIONS=\'--inspect=9239\' npx env-cmd -f .env npm run dev'
      ),
      new FileJsonSet(
        targetDir,
        'package.json',
        'scripts.dev:teamsfx:launch-testtool',
        'npx env-cmd --silent -f env/.env.testtool teamsapptester start'
      ),
      // optional vite project support
      new If(() => {
        return (
          fs.existsSync(path.join(targetDir, 'vite.config.js')) ||
          fs.existsSync(path.join(targetDir, 'vite.config.ts'))
        );
      }).then(
        new Compound(
          new FileYamlSet(
            targetDir,
            'teamsapp.local.yml',
            'deploy.1.with.envs.VITE_CLIENT_ID',
            '${{BOT_ID}}'
          ),
          new FileYamlSet(
            targetDir,
            'teamsapp.local.yml',
            'deploy.1.with.envs.VITE_CLIENT_SECRET',
            '${{SECRET_BOT_PASSWORD}}'
          ),
          new FileYamlSet(
            targetDir,
            'teamsapp.local.yml',
            'deploy.1.with.envs.VITE_TENANT_ID',
            '${{AAD_APP_TENANT_ID}}'
          )
        )
      )
    );
  }

  csharp(targetDir: string) {
    // Get the .sln file in the target directory
    const slnFile = fs.readdirSync(targetDir).find((file) => file.endsWith('.sln'));
    if (!slnFile) {
      throw new Error('No .sln file found in the target directory');
    }

    // Get .sln file name
    const slnFileName = path.basename(slnFile, '.sln');

    // Get the .slnlaunch.user file in the target directory
    let launchUserFile = fs.readdirSync(targetDir).find((file) => file.endsWith('.slnlaunch.user'));
    if (!launchUserFile) {
      // create the file
      launchUserFile = `${slnFileName}.slnlaunch.user`;
      fs.writeFileSync(path.join(targetDir, launchUserFile), JSON.stringify([], null, 2));
    }

    return new Compound(
      new Copy(
        path.resolve(url.fileURLToPath(import.meta.url), '../..', 'configs', 'ttk', this.name, 'csharp'),
        targetDir
      ),
      new FileUpdate(targetDir, launchUserFile, (content) => {
        const jsonArray = JSON.parse(content);
        const ttkDebugProfiles = [
          {
            'Name': 'Microsoft Teams (browser)',
            'Projects': [
              {
                'Path': 'TeamsApp\\TeamsApp.ttkproj',
                'Action': 'StartWithoutDebugging',
                'DebugTarget': 'Microsoft Teams (browser)'
              },
              {
                'Path': `${slnFileName}\\${slnFileName}.csproj`,
                'Action': 'Start',
                'DebugTarget': 'Start Project'
              }
            ]
          },
          {
            'Name': 'Microsoft Teams (browser) (skip update Teams App)',
            'Projects': [
              {
                'Path': 'TeamsApp\\TeamsApp.ttkproj',
                'Action': 'StartWithoutDebugging',
                'DebugTarget': 'Microsoft Teams (browser) (skip update Teams App)'
              },
              {
                'Path': `${slnFileName}\\${slnFileName}.csproj`,
                'Action': 'Start',
                'DebugTarget': 'Start Project'
              }
            ]
          }
        ];

        jsonArray.push(...ttkDebugProfiles);
        return JSON.stringify(jsonArray, null, 2);
      }),
      new FileUpdate(targetDir, slnFile, (content) => {
        const lines = content.split(/\r?\n/);
        const insertIndex = lines.findIndex(line => line.trim().startsWith('Global'));

        if (insertIndex === -1) {
          console.error('Error: Global section not found in .sln');
          throw new Error('Global section not found in .sln');
        }

        const projectTypeGuid = '{GAE04EC0-301F-11D3-BF4B-00C04F79EFBD}';
        const projectName = 'TeamsApp';
        const projectPath = 'TeamsApp\\TeamsApp.ttkproj';
        const projectInstanceGuid = '{HAJ04EC0-301F-11D3-BF4B-00C04F79EFCE}';

        const projectBlock = [
          `Project("${projectTypeGuid}") = "${projectName}", "${projectPath}", "${projectInstanceGuid}"`,
          'EndProject'
        ];

        lines.splice(insertIndex, 0, ...projectBlock);

        return lines.join('\r\n');
      })
    );
  }
}
