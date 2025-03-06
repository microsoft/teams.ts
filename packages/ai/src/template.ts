export interface Template {
  render(params?: Record<string, any>): string | Promise<string>;
}
