import * as attributes from './attributes';
import { Project, ProjectLanguage } from './project';
import { IProjectAttribute } from './project-attribute';

export class ProjectBuilder {
  get path() { return this._path; }
  private _path?: string;

  get name() { return this._name; }
  private _name?: string;

  get language() { return this._language; }
  private _language: ProjectLanguage = 'typescript';

  private readonly _attributes: Array<IProjectAttribute> = [];

  withPath(path: string) {
    this._path = path;
    return this;
  }

  withName(name: string) {
    this._name = name;
    return this;
  }

  withLanguage(language: ProjectLanguage) {
    this._language = language;
    return this;
  }

  addEnv(key: string, value: string, filename?: string) {
    filename = filename || (this._language === 'typescript' ? '.env' : 'appsettings.Development.json');
    this._attributes.push(new attributes.EnvAttribute(filename, key, value));
    return this;
  }

  addTemplate(name: string) {
    if (this._attributes.some((attr) => attr.id === `template[${name}]`)) {
      return this;
    }

    this._attributes.push(new attributes.TemplateAttribute(name));
    return this;
  }

  addTeamsToolkit(name: string) {
    this._attributes.push(new attributes.TeamsToolkitAttribute(name));
    return this;
  }

  build() {
    if (!this._path) {
      throw new Error('path is required');
    }

    if (!this._name) {
      throw new Error('name is required');
    }

    if (!this._language) {
      throw new Error('language is required');
    }

    return new Project(this._path, this._name, this._language, this._attributes);
  }
}
