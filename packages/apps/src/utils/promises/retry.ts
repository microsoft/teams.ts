export type RetryOptions = {
  /**
   * the max number of retry attempts
   * @default 3
   */
  readonly max?: number;

  /**
   * the delay in ms per retry
   * @default 200
   */
  readonly delay?: number;
};

export async function retry<T = any>(promise: Promise<T>, options?: RetryOptions) {
  const max = options?.max || 3;
  const delay = options?.delay || 200;

  try {
    return await promise;
  } catch (err) {
    if (max > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      return retry(promise, { max: max - 1, delay: delay * 2 });
    }

    throw err;
  }
}
