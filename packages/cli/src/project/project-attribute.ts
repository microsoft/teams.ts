import { IProject } from './project';

export interface IProjectAttribute {
  readonly id: string;
  readonly name: string;
  readonly alias?: string;
  readonly description: string;

  typescript(targetDir: string): IProjectAttributeOperation | Promise<IProjectAttributeOperation>;
  csharp(targetDir: string): IProjectAttributeOperation | Promise<IProjectAttributeOperation>;
  python(targetDir: string): IProjectAttributeOperation | Promise<IProjectAttributeOperation>;
}

export interface IProjectAttributeOperation {
  readonly name: string;

  up(project: IProject): void | Promise<void>;
  down(project: IProject): void | Promise<void>;
}
