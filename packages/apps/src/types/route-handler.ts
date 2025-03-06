import { IMiddlewareContext } from '../contexts';

export type RouteHandler<In extends IMiddlewareContext<any>, Out = void> = (
  ctx: In
) => Out | Promise<Out>;
