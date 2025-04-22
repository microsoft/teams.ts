import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // Package generator for creating new packages
  plop.setGenerator('Package', {
    description: 'Create a new package',
    // gather information from the user
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Package name (without @microsoft/teams. prefix):',
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
        template: "module.exports = require('@microsoft/teams.config/jest.config');\n",
      },
      {
        type: 'add',
        path: 'packages/{{name}}/tsconfig.json',
        templateFile: 'templates/tsconfig.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/tsup.config.js',
        template: "module.exports = require('@microsoft/teams.config/tsup.config');\n",
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

  // Sample generator for creating new samples
  plop.setGenerator('Sample', {
    description: 'Create a new sample',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Sample name:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Sample description:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'samples/{{name}}/package.json',
        templateFile: 'templates/sample-package.json.hbs',
      },
      {
        type: 'add',
        path: 'samples/{{name}}/README.md',
        templateFile: 'templates/sample-README.md.hbs',
      },
      {
        type: 'add',
        path: 'samples/{{name}}/tsconfig.json',
        templateFile: 'templates/sample-tsconfig.json.hbs',
      },
      {
        type: 'add',
        path: 'samples/{{name}}/src/index.ts',
        templateFile: 'templates/sample-index.ts.hbs',
      },
      {
        type: 'add',
        path: 'samples/{{name}}/.gitignore',
        templateFile: 'templates/sample-gitignore.hbs',
      },
    ],
  });
}
