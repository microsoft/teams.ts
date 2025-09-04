import camelcase from 'camelcase';

export type ApiVersion = 'v1.0' | 'beta';
export type FileSystemNameGenerator = (parent: string, clientName: string) => string;

export const patterns = {
  specialChars: /[!$#@%^&*()_+\-=[\]{};':"\\|,.<>/?]+/,
  invalidUrl: /[!$#@%^&*()+=[\];':"\\|,.<>?]+/,
  param: /\{[A-Za-z0-9-]*\}/,
};

const RESERVED_KEYWORDS = new Set([
  // Keywords
  'await', 'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger',
  'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'false',
  'finally', 'for', 'function', 'if', 'import', 'in', 'instanceof', 'new',
  'null', 'return', 'super', 'switch', 'this', 'throw', 'true', 'try',
  'typeof', 'var', 'void', 'while', 'with', 'yield',
  
  // Strict mode reserved words
  'let', 'static', 'implements', 'interface', 'package', 'private',
  'protected', 'public',
  
  // Future reserved words
  'arguments', 'eval'
]);

export function isAllowListed(path: string, allowList: RegExp[], options = { filterInvalidUrls: false }): boolean {
  if (options.filterInvalidUrls && patterns.invalidUrl.test(path)) {
    return false;
  }

  for (const regex of allowList) {
    if (path.match(regex)) {
      return true;
    }
  }

  // If the allowList is empty, everything is allowed
  return allowList.length === 0;
}

export function filterPathsByAllowlist(
  paths: Record<string, any>,
  allowList: RegExp[],
  options = { filterInvalidUrls: false }
): Record<string, any> {
  const filteredPaths: Record<string, any> = {};

  for (const [pathKey, pathDefinition] of Object.entries(paths)) {
    if (pathDefinition && isAllowListed(pathKey, allowList, options)) {
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
      return camelcase(`do-${name}`);
    case 'default':
      // special-case for the /policies/crossTenantAccessPolicy/default APIs
      return 'defaults';
    default:
      return name;
  }
};

export const isReservedKeyword = (name: string) => RESERVED_KEYWORDS.has(name);

function getEntitlementManagementFileSystemName(parent: string, clientName: string) {
  // Some paths under identityGovernance/entitlementManagement are so long that consumers can easily run
  // into MAX_PATH limitations. To help avoid that, this abbreviates the file system name with some targeted replacements.
  // With this, we can go from
  // (236) identityGovernance\entitlementManagement\accessPackageAssignments\accessPackage\accessPackageResourceRoleScopes\accessPackageResourceRole\accessPackageResource\accessPackageResourceScopes\accessPackageResource\accessPackageResourceEnvironment.ts
  // to the more palatable
  // (126) identityGovernance\entitlementManagement\apAssignments\ap\resourceRoleScopes\apResourceRole\apResource\scopes\apResource\environment.ts

  // First, trim out redundant prefix
  let fileSystemName = clientName.startsWith(parent) ? clientName.substring(parent.length) : clientName;
  // Then, abbrev. 'accessPackage' since it's repeated so much
  fileSystemName = fileSystemName.startsWith('accessPackage')
    ? 'ap' + fileSystemName.substring('accessPackage'.length)
    : fileSystemName;
  
  return camelcase(fileSystemName);
}

// Map of URL path segments to file name generators for those paths that need special handling.
// The key is a URL path segment, and the value is the file name generator to use for all clients
// that are children of that path segment.
export const fileSystemNameGenerators : Record<string, FileSystemNameGenerator> = {
  // Paths under identityGovernance/entitlementManagement need to be abbrev'd to avoid MAX_PATH issues on Windows systems.
  entitlementManagement: getEntitlementManagementFileSystemName
};