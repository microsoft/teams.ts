import { IActivitySignInContext } from '../contexts';

export function signin({ activity, log }: IActivitySignInContext) {
  log.debug(`${activity.from.name} has signed in...`);
}
