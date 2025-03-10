import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs';

import { IProjectAttribute } from '../project-attribute';
import { Compound, Copy, FileJsonSet } from '../operations';

export class TemplateAttribute implements IProjectAttribute {
  readonly id: string;
  readonly name: string;
  readonly alias = 't';
  readonly description = 'the app template to use';

  constructor(name: string) {
    this.id = `template[${name}]`;
    this.name = name;
  }

  typescript(targetDir: string) {
    fs.mkdirSync(targetDir, { recursive: true });
    const name = path.basename(targetDir);

    return new Compound(
      new Copy(
        path.resolve(
          url.fileURLToPath(import.meta.url),
          '../..',
          'templates',
          'typescript',
          this.name
        ),
        targetDir
      ),
      new FileJsonSet(targetDir, 'package.json', 'name', name),
      new FileJsonSet(
        path.join(targetDir, 'appPackage'),
        'manifest.json',
        'name.short',
        `${name}-\${{APP_NAME_SUFFIX}}`
      ),
      new FileJsonSet(path.join(targetDir, 'appPackage'), 'manifest.json', 'name.full', name)
    );
  }

  csharp(_: string) {
    return new Compound();
  }
}
