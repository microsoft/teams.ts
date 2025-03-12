export interface ITemplate {
  render(data?: Record<string, any>): string | Promise<string>;
}
