import { SignInMiddlewareContext } from '../middleware-context';

export function signin({ activity, log }: SignInMiddlewareContext) {
  log.debug(`${activity.from.name} has signed in...`);
}
