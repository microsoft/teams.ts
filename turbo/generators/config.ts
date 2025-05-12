import type { PlopTypes } from "@turbo/gen";
import fs from "fs";
import path from "path";

const currentPackageVersion = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "..", "package.json"), "utf8")
).version;

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // Action for creating an app package
  plop.setActionType("createAppPackage", (answers, config, plop) => {
    if (!plop) {
      throw new Error("Plop instance is not available");
    }

    if (!answers["name"]) {
      throw new Error("App name is required");
    }
    const appPackagePath = path.join(
      plop.getDestBasePath(),
      "samples",
      answers["name"],
      "appPackage"
    );
    const appPackageContent = JSON.stringify(
      {
        name: answers.name,
        description: answers.description,
        version: "1.0.0",
      },
      null,
      2
    );

    fs.writeFileSync(appPackagePath, appPackageContent);
    return `App package created at ${appPackagePath}`;
  });

  plop.setPartial("currentVersion", currentPackageVersion);

  // Package generator for creating new packages
  plop.setGenerator("Package", {
    description: "Create a new package",
    // gather information from the user
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Package name (without @microsoft/teams. prefix):",
      },
      {
        type: "input",
        name: "description",
        message: "Package description:",
      },
    ],
    // perform actions based on the prompts
    actions: [
      {
        type: "add",
        path: "packages/{{name}}/package.json",
        templateFile: "templates/package.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/eslint.config.js",
      },
      {
        type: "add",
        path: "packages/{{name}}/src/index.ts",
        template: "// Export your package functionality here\n",
      },
      {
        type: "add",
        path: "packages/{{name}}/jest.config.js",
        template:
          "module.exports = require('@microsoft/teams.config/jest.config');\n",
      },
      {
        type: "add",
        path: "packages/{{name}}/tsconfig.json",
        templateFile: "templates/tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/tsup.config.js",
        template:
          "module.exports = require('@microsoft/teams.config/tsup.config');\n",
      },
      {
        type: "add",
        path: "packages/{{name}}/turbo.json",
        templateFile: "templates/turbo.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/README.md",
        templateFile: "templates/README.md.hbs",
      },
    ],
  });

  // Generator for creating new applications in tests
  plop.setGenerator("Application", {
    description: "Create a new Teams AI v2 application",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Application name:",
      },
      {
        type: "input",
        name: "description",
        message: "Application description:",
      },
      {
        type: "confirm",
        name: "runnableOnTeams",
        message: "Runnable to Teams?",
        default: true,
      },
    ],
    actions: [
      {
        type: "add",
        path: "tests/{{name}}/package.json",
        templateFile: "templates/test-package.json.hbs",
      },
      {
        type: "add",
        path: "tests/{{name}}/README.md",
        templateFile: "templates/test-README.md.hbs",
      },
      {
        type: "add",
        path: "tests/{{name}}/tsconfig.json",
        templateFile: "templates/test-tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "tests/{{name}}/src/index.ts",
        templateFile: "templates/test-index.ts.hbs",
      },
      {
        type: "add",
        path: "tests/{{name}}/.gitignore",
        templateFile: "templates/test-gitignore.hbs",
      },
      {
        type: "addMany",
        skip: ({ runnableOnTeams }) => {
          if (!runnableOnTeams) {
            return `Skipping app package generation for non-runnable sample`;
          }

          console.log("Generating app package...");
          return false;
        },
        destination: "samples/{{name}}/appPackage/",
        templateFiles: "templates/appPackage/**",
      },
    ],
  });
}
