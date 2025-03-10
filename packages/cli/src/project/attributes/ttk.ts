import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs';

import { IProjectAttribute } from '../project-attribute';
import { Compound, Copy, FileJsonSet, FileYamlSet, If } from '../operations';

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
        path.resolve(url.fileURLToPath(import.meta.url), '../..', 'configs', 'ttk', this.name),
        targetDir
      ),
      new FileJsonSet(targetDir, 'package.json', 'devDependencies.env-cmd', 'latest'),
      new FileJsonSet(
        targetDir,
        'package.json',
        'scripts.dev:teamsfx',
        'npx env-cmd --silent -f .env npm run dev'
      ),
      new FileJsonSet(
        targetDir,
        'package.json',
        'scripts.dev:teamsfx:testtool',
        'npx env-cmd --silent -f .env npm run dev'
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
          )
        )
      )
    );
  }

  csharp(_: string) {
    return new Compound();
  }
}
