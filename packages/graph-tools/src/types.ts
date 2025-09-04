import fs from 'fs';
import path from 'path';

import openapits, { astToString } from 'openapi-typescript';
import { format  as prettier } from 'prettier';
import * as ts from 'typescript';

import prettierConfig from './prettier.config.js';

type ApiVersion = 'v1.0' | 'beta';

// Helper to get property name from AST node
function getPropertyName(name: ts.PropertyName | undefined): string | null {
  if (!name) return null;
  if (ts.isStringLiteral(name)) return name.text;
  if (ts.isIdentifier(name)) return name.text;
  if (ts.isNumericLiteral(name)) return name.text;
  return null;
}

// Apply allowlist filtering by removing non-matching path members
function applyAllowList(pathsInterface: ts.InterfaceDeclaration, allowlist: RegExp[]): void {
  const membersToKeep: ts.TypeElement[] = [];

  for (const member of pathsInterface.members) {
    if (ts.isPropertySignature(member)) {
      const pathKey = getPropertyName(member.name);
      if (pathKey) {
        const isAllowed = allowlist.length === 0 || allowlist.some((pattern) => pattern.test(pathKey));
        if (isAllowed) {
          membersToKeep.push(member);
        }
      }
    }
  }

  // Replace the members array by mutating the existing interface
  (pathsInterface as any).members = ts.factory.createNodeArray(membersToKeep);
}

// Remove 'never' typed operations from paths to reduce bloat
function removeUnsupportedVerbsFromPaths(pathsInterface: ts.InterfaceDeclaration): void {
  for (const pathMember of pathsInterface.members) {
    if (
      ts.isPropertySignature(pathMember) &&
      pathMember.type &&
      ts.isTypeLiteralNode(pathMember.type)
    ) {
      const pathOperations = pathMember.type.members;
      const operationsToKeep: ts.TypeElement[] = [];
      let neverOpsInThisPath = 0;

      for (const operation of pathOperations) {
        if (ts.isPropertySignature(operation)) {
          // Check various forms that 'never' might take
          let isNeverOperation = false;

          if (operation.type) {
            // Check for direct 'never' type reference
            if (
              ts.isTypeReferenceNode(operation.type) &&
              ts.isIdentifier(operation.type.typeName) &&
              operation.type.typeName.text === 'never'
            ) {
              isNeverOperation = true;
            }
            // Check for literal 'never' keyword
            else if (operation.type.kind === ts.SyntaxKind.NeverKeyword) {
              isNeverOperation = true;
            }
          }

          // Also check if it's an optional property with no meaningful type (might be represented differently)
          const operationName = getPropertyName(operation.name);
          if (
            operationName &&
            ['put', 'post', 'delete', 'options', 'head', 'trace'].includes(operationName) &&
            operation.questionToken
          ) {
            // Additional check for operations that are optional and might be 'never'
            if (
              operation.type &&
              ts.isTypeReferenceNode(operation.type) &&
              ts.isIdentifier(operation.type.typeName) &&
              operation.type.typeName.text === 'never'
            ) {
              isNeverOperation = true;
            }
          }

          if (isNeverOperation) {
            neverOpsInThisPath++;
            // Skip this operation (don't add to operationsToKeep)
          } else {
            operationsToKeep.push(operation);
          }
        } else {
          // Keep non-property signatures (like parameters object)
          operationsToKeep.push(operation);
        }
      }

      // Replace the operations in this path with the filtered list
      if (neverOpsInThisPath > 0) {
        const newPathType = ts.factory.createTypeLiteralNode(operationsToKeep);
        const newPathMember = ts.factory.createPropertySignature(
          undefined,
          pathMember.name,
          pathMember.questionToken,
          newPathType
        );

        // Replace this path member in the interface
        const pathIndex = pathsInterface.members.indexOf(pathMember);
        const newMembers = [...pathsInterface.members];
        newMembers[pathIndex] = newPathMember;
        (pathsInterface as any).members = ts.factory.createNodeArray(newMembers);
      }
    }
  }
}

// Filter out error responses (4XX, 5XX, default) from responses objects
function simplifyResponses(operationsInterface: ts.InterfaceDeclaration): void {
  for (const member of operationsInterface.members) {
    if (ts.isPropertySignature(member) && member.name && ts.isStringLiteral(member.name)) {
      if (member.type && ts.isTypeLiteralNode(member.type)) {
        const responsesProperty = member.type.members.find(
          (m): m is ts.PropertySignature =>
            ts.isPropertySignature(m) &&
            m.name &&
            ts.isIdentifier(m.name) &&
            m.name.text === 'responses'
        );

        if (responsesProperty?.type && ts.isTypeLiteralNode(responsesProperty.type)) {
          const responseMembers = responsesProperty.type.members;

          // Filter out error responses (4XX, 5XX, default)
          const filteredMembers = responseMembers.filter((respMember) => {
            if (ts.isPropertySignature(respMember) && respMember.name) {
              const statusCode = getStatusCodeFromNode(respMember.name);

              // Keep success (2XX) and redirect (3XX) responses, filter out errors
              const isError =
                statusCode.startsWith('4') ||
                statusCode.startsWith('5') ||
                statusCode === '4XX' ||
                statusCode === '5XX' ||
                statusCode === 'default';

              return !isError; // Keep non-error responses
            }
            return true; // Keep non-property signatures as-is
          });

          // Only modify if we actually filtered out some responses
          if (filteredMembers.length < responseMembers.length) {
            // Replace the members array with the filtered one
            (responsesProperty.type as any).members = filteredMembers;
          }
        }
      }
    }
  }
}

// Helper function to extract status code from various node types
function getStatusCodeFromNode(nameNode: ts.PropertyName): string {
  if (ts.isStringLiteral(nameNode)) {
    return nameNode.text;
  } else if (ts.isNumericLiteral(nameNode)) {
    return nameNode.text;
  } else if (ts.isIdentifier(nameNode)) {
    return nameNode.text;
  } else if (ts.isComputedPropertyName(nameNode)) {
    return nameNode.expression.getText();
  }

  // For debugging: check if node has text property
  const nodeWithText = nameNode as any;
  if (nodeWithText.text) {
    return nodeWithText.text;
  }

  // Try getText as last resort
  try {
    return nameNode.getText();
  } catch (e) {
    return 'unknown';
  }
}

// Remove parameters property from all paths since they're redundant
function removeParametersFromPaths(pathsInterface: ts.InterfaceDeclaration): void {
  for (const pathMember of pathsInterface.members) {
    if (
      ts.isPropertySignature(pathMember) &&
      pathMember.type &&
      ts.isTypeLiteralNode(pathMember.type)
    ) {
      // Filter out the parameters property from this path
      const pathMembers = pathMember.type.members;
      const membersWithoutParameters: ts.TypeElement[] = [];
      let foundParameters = false;

      for (const member of pathMembers) {
        if (ts.isPropertySignature(member)) {
          const propName = getPropertyName(member.name);
          if (propName === 'parameters') {
            foundParameters = true;
            // Skip this member - don't add it to the new array
          } else {
            membersWithoutParameters.push(member);
          }
        } else {
          membersWithoutParameters.push(member);
        }
      }

      if (foundParameters) {
        // Create a new type literal without the parameters property
        const newTypeLiteral = ts.factory.createTypeLiteralNode(membersWithoutParameters);
        (pathMember as any).type = newTypeLiteral;
      }
    }
  }
}

// Extract operation references from AST nodes
function extractOperationReferences(node: ts.Node, refs: Set<string>): void {
  // Look for operations["key"] pattern in TypeReference nodes
  if (ts.isTypeReferenceNode(node)) {
    const typeName = getTypeReferenceName(node.typeName);
    if (typeName === 'operations' && node.typeArguments?.length === 1) {
      const arg = node.typeArguments[0];
      if (ts.isLiteralTypeNode(arg) && ts.isStringLiteral(arg.literal)) {
        refs.add(arg.literal.text);
      }
    }
  }

  // Look for operations["key"] pattern in IndexedAccess nodes
  if (ts.isIndexedAccessTypeNode(node)) {
    if (ts.isTypeReferenceNode(node.objectType)) {
      const typeName = getTypeReferenceName(node.objectType.typeName);
      if (
        typeName === 'operations' &&
        ts.isLiteralTypeNode(node.indexType) &&
        ts.isStringLiteral(node.indexType.literal)
      ) {
        refs.add(node.indexType.literal.text);
      }
    }
  }

  // Recursively visit all child nodes
  ts.forEachChild(node, (child) => extractOperationReferences(child, refs));
}

function getTypeReferenceName(typeName: ts.EntityName): string {
  if (ts.isIdentifier(typeName)) return typeName.text;
  if (ts.isQualifiedName(typeName)) {
    return `${getTypeReferenceName(typeName.left)}.${typeName.right.text}`;
  }
  return 'unknown';
}

// Collect operation references from filtered paths
function collectReferencedOperations(pathsInterface: ts.InterfaceDeclaration): Set<string> {
  const referencedOps = new Set<string>();
  extractOperationReferences(pathsInterface, referencedOps);
  return referencedOps;
}

// Filter operations to keep only referenced ones
function filterOperations(
  operationsInterface: ts.InterfaceDeclaration,
  referencedOps: Set<string>
): void {
  const membersToKeep: ts.TypeElement[] = [];

  for (const member of operationsInterface.members) {
    if (ts.isPropertySignature(member)) {
      const opKey = getPropertyName(member.name);
      if (opKey && referencedOps.has(opKey)) {
        membersToKeep.push(member);
      }
    }
  }

  // Replace the members array by mutating the existing interface
  (operationsInterface as any).members = ts.factory.createNodeArray(membersToKeep);
}

// Extract schema references from AST nodes
function extractSchemaReferences(
  node: ts.Node,
  refs: Set<string>,
  visited: Set<ts.Node> = new Set()
): void {
  // Avoid infinite recursion
  if (visited.has(node)) return;
  visited.add(node);

  // Look for components["schemas"]["key"] pattern in TypeReference nodes
  if (ts.isTypeReferenceNode(node)) {
    const typeName = getTypeReferenceName(node.typeName);
    if (typeName === 'components' && node.typeArguments?.length === 1) {
      const arg = node.typeArguments[0];
      if (ts.isLiteralTypeNode(arg) && ts.isStringLiteral(arg.literal)) {
        const schemaPath = arg.literal.text;
        // Extract schema key from "schemas.SchemaName" format
        if (schemaPath.startsWith('schemas.')) {
          refs.add(schemaPath.substring(8)); // Remove "schemas." prefix
        }
      }
    }
  }

  // Look for components["schemas"]["key"] pattern in IndexedAccess nodes
  if (ts.isIndexedAccessTypeNode(node)) {
    if (ts.isIndexedAccessTypeNode(node.objectType)) {
      // components["schemas"]["key"] pattern
      if (ts.isTypeReferenceNode(node.objectType.objectType)) {
        const typeName = getTypeReferenceName(node.objectType.objectType.typeName);
        if (
          typeName === 'components' &&
          ts.isLiteralTypeNode(node.objectType.indexType) &&
          ts.isStringLiteral(node.objectType.indexType.literal) &&
          node.objectType.indexType.literal.text === 'schemas' &&
          ts.isLiteralTypeNode(node.indexType) &&
          ts.isStringLiteral(node.indexType.literal)
        ) {
          refs.add(node.indexType.literal.text);
        }
      }
    }
  }

  // Look for direct schema references (e.g., microsoft.graph.user)
  if (ts.isTypeReferenceNode(node)) {
    const typeName = getTypeReferenceName(node.typeName);
    // Check if this looks like a schema reference (starts with microsoft.graph)
    if (typeName.startsWith('microsoft.graph.')) {
      refs.add(typeName);
    }
  }

  // Recursively visit all child nodes
  ts.forEachChild(node, (child) => extractSchemaReferences(child, refs, visited));
}

// Check if we should also scan paths, webhooks, and other parts for schema references
function analyzeAllReferenceSources(
  paths: ts.InterfaceDeclaration,
  others: ts.Declaration[],
  components: ts.InterfaceDeclaration,
  operations: ts.InterfaceDeclaration
): Set<string> {
  const allReferencedSchemas = new Set<string>();

  // Scan operations (we already do this)
  extractSchemaReferences(operations, allReferencedSchemas);

  // Scan paths
  const pathRefs = new Set<string>();
  extractSchemaReferences(paths, pathRefs);
  pathRefs.forEach((ref) => allReferencedSchemas.add(ref));

  // Scan components (might reference other schemas)
  const componentRefs = new Set<string>();
  extractSchemaReferences(components, componentRefs);
  componentRefs.forEach((ref) => allReferencedSchemas.add(ref));

  // Scan all other declarations (webhooks, defs, etc.)
  for (const other of others) {
    if (other) {
      const otherRefs = new Set<string>();
      extractSchemaReferences(other, otherRefs);
      otherRefs.forEach((ref) => allReferencedSchemas.add(ref));
    }
  }

  return allReferencedSchemas;
}

// Filter schemas to keep only referenced ones
function filterSchemas(
  componentsInterface: ts.InterfaceDeclaration,
  referencedSchemas: Set<string>
): void {
  // Find the schemas property
  let schemasProperty: ts.PropertySignature | undefined;
  let schemasPropertyIndex = -1;

  for (let i = 0; i < componentsInterface.members.length; i++) {
    const member = componentsInterface.members[i];
    if (ts.isPropertySignature(member)) {
      const propName = getPropertyName(member.name);
      if (propName === 'schemas') {
        schemasProperty = member;
        schemasPropertyIndex = i;
        break;
      }
    }
  }

  if (!schemasProperty || !schemasProperty.type || !ts.isTypeLiteralNode(schemasProperty.type)) {
    console.log('  Warning: Could not find schemas property for filtering');
    return;
  }

  const schemasToKeep: ts.TypeElement[] = [];

  for (const schemaMember of schemasProperty.type.members) {
    if (ts.isPropertySignature(schemaMember)) {
      const schemaName = getPropertyName(schemaMember.name);
      if (schemaName && referencedSchemas.has(schemaName)) {
        schemasToKeep.push(schemaMember);
      }
    }
  }

  // Create a new type literal with filtered schemas
  const newSchemasType = ts.factory.createTypeLiteralNode(schemasToKeep);

  // Create a new property signature with the filtered type
  const newSchemasProperty = ts.factory.createPropertySignature(
    undefined,
    schemasProperty.name,
    schemasProperty.questionToken,
    newSchemasType
  );

  // Replace the schemas property in the components interface
  const newMembers = [...componentsInterface.members];
  newMembers[schemasPropertyIndex] = newSchemasProperty;
  (componentsInterface as any).members = ts.factory.createNodeArray(newMembers);
}

// Extract required interfaces from openapi-typescript result by name (order-independent)
function extractInterfaces(res: any[]): {
  paths: ts.InterfaceDeclaration;
  components: ts.InterfaceDeclaration;
  operations: ts.InterfaceDeclaration;
  others: ts.Declaration[];
} {
  const interfaces = res.filter(ts.isInterfaceDeclaration);
  const others = res.filter((r) => !ts.isInterfaceDeclaration(r));

  const paths = interfaces.find((i) => i.name?.text === 'paths');
  const components = interfaces.find((i) => i.name?.text === 'components');
  const operations = interfaces.find((i) => i.name?.text === 'operations');

  // Debug output for missing required interfaces
  if (!paths) {
    console.error('ERROR: Could not find "paths" interface in openapi-typescript output');
    console.log(
      'Available interfaces:',
      interfaces.map((i) => i.name?.text || 'unnamed').join(', ')
    );
    throw new Error('Required "paths" interface not found');
  }

  if (!components) {
    console.error('ERROR: Could not find "components" interface in openapi-typescript output');
    console.log(
      'Available interfaces:',
      interfaces.map((i) => i.name?.text || 'unnamed').join(', ')
    );
    throw new Error('Required "components" interface not found');
  }

  if (!operations) {
    console.error('ERROR: Could not find "operations" interface in openapi-typescript output');
    console.log(
      'Available interfaces:',
      interfaces.map((i) => i.name?.text || 'unnamed').join(', ')
    );
    throw new Error('Required "operations" interface not found');
  }

  return { paths, components, operations, others };
}

export async function generateTypes(
  version: ApiVersion,
  yamlPath: string,
  outputPath: string
): Promise<void> {
  console.log(`=== Starting type generation for ${version} ===`);

  console.log(`Reading schema from ${yamlPath}...`);
  const schema = fs.readFileSync(yamlPath, {
    encoding: 'utf8',
  });

  console.log('Parsing yaml...');
  const res = await openapits(schema, {
    dedupeEnums: false,
  });

  const { paths, components, operations, others } = extractInterfaces(res as any);

  console.log('Processing paths...');
  // filter paths and remove bloat
  applyAllowList(paths, []);
  removeUnsupportedVerbsFromPaths(paths);
  removeParametersFromPaths(paths);

  console.log('Processing operations...');
  // find the operations that are referenced by the paths after applying the allow list; filter out the ones that aren't referenced
  const referencedOperations = collectReferencedOperations(paths);
  filterOperations(operations, referencedOperations);
  // remove unnecessary response types
  simplifyResponses(operations);

  console.log('Processing components schema references...');
  // find the schema entries that are referenced by the remaining paths & operations; filter out the ones that aren't referenced
  const allReferencedSchemas = analyzeAllReferenceSources(paths, others, components, operations);
  filterSchemas(components, allReferencedSchemas);

  console.log('Producing final output...');
  const finalContent = [paths, components, operations, ...others];
  const toStringed = astToString(finalContent, {
    formatOptions: {
      removeComments: false,
    },
  });

  const code = await prettier(toStringed, {
    parser: 'typescript',
    ...prettierConfig,
  });

  fs.mkdirSync(path.join(outputPath, 'types'), { recursive: true });
  const outputFilePath = path.join(outputPath, 'types', 'types.ts');
  fs.writeFileSync(outputFilePath, code);

  console.log(`Complete! Type definitions saved to ${outputFilePath}`);
}
