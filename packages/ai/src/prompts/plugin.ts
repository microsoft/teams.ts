export interface IAiPlugin<
  TPluginName extends string = string,
  TPluginUseArgs extends {} = {},
  TBeforeSendParams = unknown,
  TAfterSendResponse = unknown,
> {
  /**
   * Unique name of the plugin
   */
  name: TPluginName;

  /**
   * The function is set to initialize the plugin
   * @param args - Arguments to initialize the plugin
   */
  onUsePlugin?: (args: TPluginUseArgs) => void;

  /**
   * Any modifications to the parameter before it is sent to the model
   * @param params the input parameter for the send function
   * @returns the modified parameter for the send function.
   */
  onBeforeSend?: (params: TBeforeSendParams) => TBeforeSendParams | Promise<TBeforeSendParams>;

  /**
   * Any modifications to the output of the send function after the model
   * has finished with it.
   * @param response the output result of the send function
   * @returns the modified output result of the send function
   */
  onAfterSend?: (
    response: Awaited<TAfterSendResponse>
  ) => Awaited<TAfterSendResponse> | Promise<Awaited<TAfterSendResponse>>;

  /**
   * Called before a function is executed, allowing modification of the arguments
   * @param functionName the name of the function being called
   * @param args the arguments being passed to the function
   */
  onBeforeFunctionCall?: (functionName: string, args: Record<string, any>) => void | Promise<void>;

  /**
   * Called after a function is executed, allowing modification of the result
   * @param functionName the name of the function that was called
   * @param args the arguments that were passed to the function
   * @param result the result returned by the function
   * @returns the modified result
   */
  onAfterFunctionCall?: (
    functionName: string,
    args: Record<string, any>,
    result: any
  ) => any | Promise<any>;
}
