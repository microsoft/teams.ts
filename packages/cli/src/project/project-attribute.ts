export interface IProjectAttribute {
  readonly id: string;
  readonly name: string;
  readonly alias?: string;
  readonly description: string;

  typescript(targetDir: string): IProjectAttributeOperation | Promise<IProjectAttributeOperation>;
  csharp(targetDir: string): IProjectAttributeOperation | Promise<IProjectAttributeOperation>;
}

export interface IProjectAttributeOperation {
  readonly name: string;

  up(): void | Promise<void>;
  down(): void | Promise<void>;
}
