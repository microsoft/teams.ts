import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs';

import { ProjectAttribute } from '../project-attribute';
import { CompoundOperation, CopyOperation, FileJsonSetOperation } from '../operations';

export class TemplateAttribute implements ProjectAttribute {
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

    return new CompoundOperation(
      new CopyOperation(
        path.resolve(
          url.fileURLToPath(import.meta.url),
          '../..',
          'templates',
          'typescript',
          this.name
        ),
        targetDir
      ),
      new FileJsonSetOperation(targetDir, 'package.json', 'name', name),
      new FileJsonSetOperation(
        path.join(targetDir, 'appPackage'),
        'manifest.json',
        'name.short',
        `${name}-\${{APP_NAME_SUFFIX}}`
      ),
      new FileJsonSetOperation(
        path.join(targetDir, 'appPackage'),
        'manifest.json',
        'name.full',
        name
      )
    );
  }

  csharp(_: string) {
    return new CompoundOperation();
  }
}
