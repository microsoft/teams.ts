import { ISignInMiddlewareContext } from '../contexts';

export function signin({ activity, log }: ISignInMiddlewareContext) {
  log.debug(`${activity.from.name} has signed in...`);
}
