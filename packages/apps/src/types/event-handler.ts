export type EventHandler<In, Out = void> = (value: In) => Out | Promise<Out>;
