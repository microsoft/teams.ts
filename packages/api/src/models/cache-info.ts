/**
 * @interface
 * A cache info object which notifies Teams how long an object should be cached for.
 */
export interface CacheInfo {
  /**
   * @member {string} [cacheType] The type of cache for this object.
   */
  cacheType?: string;

  /**
   * @member {number} [cacheDuration] The time in seconds for which the cached object should remain in the cache
   */
  cacheDuration?: number;
}
