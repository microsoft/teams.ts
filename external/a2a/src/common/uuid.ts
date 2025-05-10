export function generateRequestId(): string | number {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    } else {
        return Date.now();
    }
} 