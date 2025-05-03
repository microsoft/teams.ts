import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { Compound, Copy } from '../operations';
import { IProjectAttribute } from '../project-attribute';

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

    return new Copy(
      path.resolve(
        url.fileURLToPath(import.meta.url),
        '../..',
        'templates',
        'typescript',
        this.name
      ),
      targetDir
    );
  }

  csharp(_: string) {
    return new Compound();
  }
}
