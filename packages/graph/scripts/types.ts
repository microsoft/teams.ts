import fs from 'fs';
import path from 'path';

import * as prettier from 'prettier';
import openapits, { astToString } from 'openapi-typescript';

import prettierConfig from './prettier.config';

(async () => {
  const schema = fs.readFileSync(path.join(__dirname, '..', 'openapi.yaml'), {
    encoding: 'utf8',
  });

  const res = await openapits(schema, {
    dedupeEnums: true,
  });

  const code = await prettier.format(astToString(res), { parser: 'typescript', ...prettierConfig });
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'types.ts'), code);
})();
