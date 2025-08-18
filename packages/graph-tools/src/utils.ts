import camelcase from 'camelcase';

import { allowList } from './allow-list.js';

export type ApiVersion = 'v1.0' | 'beta';

export const patterns = {
  specialChars: /[!$#@%^&*()_+\-=[\]{};':"\\|,.<>/?]+/,
  invalidUrl: /[!$#@%^&*()+=[\];':"\\|,.<>?]+/,
  param: /\{[A-Za-z0-9-]*\}/,
};

export function isAllowListed(path: string, options = { filterInvalidUrls: false }): boolean {
  if (options.filterInvalidUrls && patterns.invalidUrl.test(path)) {
    return false;
  }

  for (const regex of allowList) {
    if (path.match(regex)) {
      return true;
    }
  }

  return false;
}

export function filterPathsByAllowlist(
  paths: Record<string, any>,
  options = { filterInvalidUrls: false }
): Record<string, any> {
  const filteredPaths: Record<string, any> = {};

  for (const [pathKey, pathDefinition] of Object.entries(paths)) {
    if (pathDefinition && isAllowListed(pathKey, options)) {
      filteredPaths[pathKey] = pathDefinition;
    }
  }

  return filteredPaths;
}

// gets the re-export names used in "export * as whatever from './whatever'";
export const getExportName = (name: string): string => {
  switch (name) {
    // reserved words, or clashes with our name standards for the HTTP methods
    case 'create':
    case 'del':
    case 'delete':
    case 'get':
    case 'list':
    case 'update':
    case 'yield':
      return camelcase(`do${name}`);
    case 'default':
      // special-case for the /policies/crossTenantAccessPolicy/default APIs
      return 'defaults';
    default:
      return name;
  }
};
