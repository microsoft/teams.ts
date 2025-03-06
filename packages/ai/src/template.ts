export interface ITemplate {
  render(params?: Record<string, any>): string | Promise<string>;
}
