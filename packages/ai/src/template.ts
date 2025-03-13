/**
 * a component that can
 * render text content
 */
export interface ITemplate {
  /**
   * render the template
   * @param data the context data
   */
  render(data?: Record<string, any>): string | Promise<string>;
}
