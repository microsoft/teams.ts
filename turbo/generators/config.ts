import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // create a generator
  plop.setGenerator('Package', {
    description: 'Create a new package',
    // gather information from the user
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Package name (without @microsoft/spark. prefix):',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Package description:',
      },
    ],
    // perform actions based on the prompts
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'templates/package.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/src/index.ts',
        template: '// Export your package functionality here\n',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/jest.config.js',
        template: "module.exports = require('@microsoft/spark.config/jest.config');\n",
      },
      {
        type: 'add',
        path: 'packages/{{name}}/tsconfig.json',
        templateFile: 'templates/tsconfig.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/tsup.config.js',
        template: "module.exports = require('@microsoft/spark.config/tsup.config');\n",
      },
      {
        type: 'add',
        path: 'packages/{{name}}/turbo.json',
        templateFile: 'templates/turbo.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/README.md',
        templateFile: 'templates/README.md.hbs',
      },
    ],
  });
}
