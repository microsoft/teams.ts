import { ILogger } from '@microsoft/teams.common';

export type RetryOptions = {
  /**
   * the max number of attempts
   * @default 5
   */
  readonly max?: number;

  /**
   * the delay in ms per retry
   * @default 500ms
   */
  readonly delay?: number;

  /**
   * the logger to use
   */
  readonly logger?: ILogger;
};

export async function retry<T = any>(factory: () => Promise<T>, options?: RetryOptions) {
  const max = options?.max ?? 5;
  const delay = options?.delay ?? 500;
  const log = options?.logger?.child('retry');

  try {
    return await factory();
  } catch (err) {
    if (max > 1) {
      log?.debug(`delaying ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      log?.debug('retrying...');
      return retry(factory, {
        max: max - 1,
        delay: delay * 2,
        logger: options?.logger,
      });
    }

    log?.error(err);
    throw err;
  }
}
