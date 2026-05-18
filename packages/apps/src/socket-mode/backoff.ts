export type BackoffOptions = {
  readonly minMs?: number;
  readonly maxMs?: number;
  readonly factor?: number;
  readonly jitter?: boolean;
};

const DEFAULT_MIN_MS = 2000;
const DEFAULT_MAX_MS = 30000;
const DEFAULT_FACTOR = 2;

/**
 * Jittered exponential backoff. Defaults match the dev-guide recommendation
 * (≥ 2s, max 30s, factor 2, with jitter to avoid thundering herd on a fleet of pods).
 */
export class Backoff {
  private attempt = 0;
  private readonly minMs: number;
  private readonly maxMs: number;
  private readonly factor: number;
  private readonly jitter: boolean;

  constructor(opts: BackoffOptions = {}) {
    this.minMs = opts.minMs ?? DEFAULT_MIN_MS;
    this.maxMs = opts.maxMs ?? DEFAULT_MAX_MS;
    this.factor = opts.factor ?? DEFAULT_FACTOR;
    this.jitter = opts.jitter ?? true;
  }

  reset(): void {
    this.attempt = 0;
  }

  /** Returns the next delay in ms and advances the attempt counter. */
  next(): number {
    const base = Math.min(this.maxMs, this.minMs * Math.pow(this.factor, this.attempt));
    this.attempt++;
    if (!this.jitter) return base;
    return Math.floor(base * (0.5 + Math.random() * 0.5));
  }
}

export function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
