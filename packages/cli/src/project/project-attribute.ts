export interface ProjectAttribute {
  readonly id: string;
  readonly name: string;
  readonly alias?: string;
  readonly description: string;

  typescript(targetDir: string): ProjectAttributeOperation | Promise<ProjectAttributeOperation>;
  csharp(targetDir: string): ProjectAttributeOperation | Promise<ProjectAttributeOperation>;
}

export interface ProjectAttributeOperation {
  readonly name: string;

  up(): void | Promise<void>;
  down(): void | Promise<void>;
}
