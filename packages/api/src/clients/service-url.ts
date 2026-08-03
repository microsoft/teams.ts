export function normalizeServiceUrl(serviceUrl: string): string {
  return serviceUrl.endsWith('/') ? serviceUrl.slice(0, -1) : serviceUrl;
}
