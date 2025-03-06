export type FunctionHandler<T = any> = (args: T) => any | Promise<any>;

export type Function = {
  readonly name: string;
  readonly description: string;
  readonly parameters: { [key: string]: any };
  readonly handler: FunctionHandler;
};

export type FunctionCall = {
  readonly id: string;
  readonly name: string;
  readonly arguments: { [key: string]: any };
};
