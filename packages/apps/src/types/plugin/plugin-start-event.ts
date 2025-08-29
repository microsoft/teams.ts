/**
 * the event emitted when a plugin
 * is started
 */
export interface IPluginStartEvent {
  /**
   * the port given to the
   * `app.start()` method
   */
  readonly port: number | string;
}
