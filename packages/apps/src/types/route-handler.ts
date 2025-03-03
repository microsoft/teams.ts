import { MiddlewareContext } from '../middleware-context';

export type RouteHandler<In extends MiddlewareContext<any>, Out = void> = (
  ctx: In
) => Out | Promise<Out>;
