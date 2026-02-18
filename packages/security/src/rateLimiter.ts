export interface RateLimiterConfig {
  windowMs: number;
  maxRequests: number;
}

export const RATE_LIMITS = {
  general: { windowMs: 60_000, maxRequests: 100 },
  auth: { windowMs: 60_000, maxRequests: 10 },
  upload: { windowMs: 60_000, maxRequests: 5 },
  intelligence: { windowMs: 60_000, maxRequests: 10 },
  authenticated: { windowMs: 60_000, maxRequests: 300 },
} as const satisfies Record<string, RateLimiterConfig>;

export function createRateLimiter(config: RateLimiterConfig) {
  const hits = new Map<string, { count: number; resetAt: number }>();

  return {
    check(key: string): { allowed: boolean; remaining: number; resetAt: number } {
      const now = Date.now();
      const entry = hits.get(key);

      if (!entry || now > entry.resetAt) {
        hits.set(key, { count: 1, resetAt: now + config.windowMs });
        return { allowed: true, remaining: config.maxRequests - 1, resetAt: now + config.windowMs };
      }

      entry.count++;
      const allowed = entry.count <= config.maxRequests;
      return {
        allowed,
        remaining: Math.max(0, config.maxRequests - entry.count),
        resetAt: entry.resetAt,
      };
    },

    reset(key: string): void {
      hits.delete(key);
    },
  };
}
