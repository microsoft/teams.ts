export type FunctionHandler<T = any> = (args: T) => any | Promise<any>;

export interface IFunction {
  readonly name: string;
  readonly description: string;
  readonly parameters: { [key: string]: any };
  readonly handler: FunctionHandler;
}

export interface IFunctionCall {
  readonly id: string;
  readonly name: string;
  readonly arguments: { [key: string]: any };
}
