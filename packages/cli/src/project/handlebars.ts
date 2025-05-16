import Handlebars from 'handlebars';

import { IProject } from './project';

export class HandlebarsTemplate {
    static async render(input: any, options?: CompileOptions, project?: IProject) {
        const template = Handlebars.compile(input, options);
        const runtimeOptions = await this._getRuntimeOptions();
        return template(project, runtimeOptions);
    }
    
    private static async _getRuntimeOptions(): Promise<Handlebars.RuntimeOptions> {
        const changeCase = await import('change-case');

        return {
            helpers: {
                capitalize: (text: string) => !text ? '' : changeCase.capitalCase(text),
                toPascalCase: (text: string) => !text ? '' : changeCase.pascalCase(text),
                toDotCase: (text: string) => !text ? '' : changeCase.dotCase(text),
                toKebabCase: (text: string) => !text ? '' : changeCase.kebabCase(text),
            },
        };
    }
}