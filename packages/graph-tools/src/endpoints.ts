import fs from 'fs';

import npath from 'path/posix';

import camelcase from 'camelcase';
import handlebars from 'handlebars';
import { OpenAPIV3 } from 'openapi-types';
import { format  as prettier } from 'prettier';
import sortKeys from 'sort-keys';
import yaml from 'yaml';

import prettierConfig from './prettier.config.js';
import { ApiVersion, fileSystemNameGenerators, type FileSystemNameGenerator, filterPathsByAllowlist, getExportName, isReservedKeyword, patterns } from './utils.js';

const methods = {
  get: 'get',
  post: 'create',
  patch: 'update',
  put: 'set',
  delete: 'delete',
  trace: 'trace',
};

handlebars.registerHelper('capitalize', (value: string) => {
  if (!value) return value;
  return `${value[0].toUpperCase()}${value.slice(1)}`;
});

handlebars.registerHelper('uppercase', (value: string) => {
  return value.toUpperCase();
});

handlebars.registerHelper('camelcase', (value: string) => {
  if (typeof value !== 'string') {
    return 'invalid';
  }

  return camelcase(value);
});

handlebars.registerHelper('eq', (a: any, b: any) => {
  return a === b;
});

handlebars.registerHelper('isReservedKeyword', (value: string) => isReservedKeyword(value));

handlebars.registerHelper('notEmpty', (value: Record<string, any> | Array<any> | undefined) => {
  if (!value) return false;

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return Object.keys(value).length > 0;
});

interface IEndpoint {
  readonly method: string;
  readonly name: string;
  readonly url: string;
  readonly parameters?: Array<OpenAPIV3.ParameterObject>;
  readonly description?: string;
  readonly deprecated?: boolean;
  readonly hasRequestBody: boolean;
}

class Client {
  readonly name: string;
  readonly fileSystemName: string;
  readonly exportName: string;
  url: string;
  description?: string;
  parameters: Array<string>;
  clients: Record<string, Client>;
  endpoints: Record<string, IEndpoint>;
  private components?: OpenAPIV3.ComponentsObject;
  private templatesPath: string;

  constructor(name: string, fileSystemName: string, templatesPath: string, description?: string, components?: OpenAPIV3.ComponentsObject) {
    this.name = name;
    this.fileSystemName = fileSystemName;
    this.exportName = getExportName(name);
    this.description = description;
    this.components = components;
    this.templatesPath = templatesPath;
    this.url = '/';
    this.parameters = [];
    this.clients = {};
    this.endpoints = {};
  }

  set(parent: string, path: string, schema: OpenAPIV3.PathItemObject & { url: string }, fileSystemNameGenerator?: FileSystemNameGenerator ) {
    const children = path.split('/').filter((v) => !!v);
    const params: Array<string> = [];

    while (children.length) {
      if (!patterns.param.test(children[0])) {
        break;
      }

      const param = children.shift();

      // make sure its a path param, not query
      if (!param || param[0] !== '{' || param[param.length - 1] !== '}') {
        break;
      }

      params.push(param.slice(1, param.length - 1));
    }

    if (!children.length) {
      this.description = schema.description || schema.summary;
      this.addEndpoint(children, schema);
      return;
    }

    const [first, ...other] = children;
    let child = first;

    child = child.replace('()', '');

    if (child.startsWith('$')) {
      child = child.slice(1);
    }

    if (patterns.specialChars.test(child) || patterns.invalidUrl.test(schema.url)) {
      console.warn(`skipping: ${child}...`);
      return;
    }

    let name = child;

    if (this.name === name) {
      name = camelcase(`${name}-${name}`);
    }

    const fileSystemName = fileSystemNameGenerator?.(parent, name) ?? name;

    if (!this.clients[name]) {
      this.clients[name] = new Client(name, fileSystemName, this.templatesPath, undefined, this.components);
      this.clients[name].url = npath.join(this.url, ...params.map((p) => `{${p}}`), child);
      this.clients[name].parameters = params;
    }

    this.clients[name].set(name, other.join('/'), schema, fileSystemNameGenerators[name] ?? fileSystemNameGenerator);
  }

  async save(apiVersion: ApiVersion, outputFolder: string, path = '') {
    const srcPath = npath.join(outputFolder, path, this.fileSystemName);

    this.clients = sortKeys(this.clients, { deep: true });
    this.endpoints = sortKeys(this.endpoints, { deep: true });

    if (Object.keys(this.clients).length && !fs.existsSync(srcPath)) {
      fs.mkdirSync(srcPath, { recursive: true });
    }

    const { importedChildren, inlineChildren } = this.groupChildClients();

    for (const child of Object.values(importedChildren)) {
      child.save(apiVersion, outputFolder, npath.join(path, this.fileSystemName));
    }

    let filename = this.fileSystemName;

    if (Object.keys(this.clients).length) {
      filename = npath.join(this.fileSystemName, 'index');
    }

    const clientTemplate = handlebars.compile(
      fs.readFileSync(npath.join(this.templatesPath, 'client.ts.hbs'), 'utf8')
    );

    const res = clientTemplate({
      ...this,
      importedChildren,
      inlineChildren,
      hasExports: Object.keys(this.endpoints).length > 0 || Object.keys(inlineChildren).length > 0,
      apiVersion,
      commonPath: npath.relative(
        npath.join('/', path, Object.keys(this.clients).length ? this.name : ''),
        npath.join('/', 'types', 'common.ts')
      ),
    });

    fs.writeFileSync(
      npath.join(outputFolder, path, `${filename}.ts`),
      await prettier(res, { parser: 'typescript', ...prettierConfig })
    );
  }

  protected addEndpoint(path: string[], schema: OpenAPIV3.PathItemObject & { url: string }) {
    for (const method in methods) {
      const def = schema[method as keyof typeof methods];
      if (!def) continue;

      const params = [...(def.parameters || []), ...(schema.parameters || [])]
        .map((param) => this.resolveParameter(param))
        .filter((p): p is OpenAPIV3.ParameterObject => 'name' in p);

      let name = camelcase([methods[method as keyof typeof methods], ...path]);

      if (patterns.specialChars.test(name) || patterns.invalidUrl.test(schema.url)) {
        console.warn(`skipping endpoint: ${schema.url}...`);
        continue;
      }

      // if GET and endpoints has same url as client base url
      if (method === 'get' && schema.url === this.url && schema.url.endsWith('s')) {
        name = 'list';
      }

      if (method !== 'get' && name.endsWith('s')) {
        name = name.slice(0, name.length - 1);
      }

      if (method === 'delete') {
        // 'delete' is a reserved word and can't be used as function name
        name = 'del';
      }

      this.endpoints[`${method.toUpperCase()} ${schema.url}`] = {
        method,
        name: this.getUniqueName(name),
        url: schema.url,
        parameters: params,
        description: def.description,
        deprecated: def.deprecated,
        hasRequestBody: !!def.requestBody,
      };
    }
  }

  private groupChildClients() : { importedChildren: Record<string, Client>; inlineChildren: Record<string, Client> } {
    return Object.keys(this.clients).reduce<{ importedChildren: Record<string, Client>; inlineChildren: Record<string, Client> }>((acc, key) => {
      const child = this.clients[key];

      // Child nodes with additional children are put into subfolders, and then simply re-exported by this client's index.ts.
      const isReExport  = Object.keys(child.clients).length > 0;
      // Child nodes that don't have additional children are exported as objects from this client's index.ts.
      const isInline = !isReExport && !!Object.keys(child.endpoints).length;

      if (isReExport) {
        acc.importedChildren[key] = child;
      } else if (isInline) {
        acc.inlineChildren[key] = child;
      }

      return acc;
    }, { importedChildren: {}, inlineChildren: {} });
  }

  private getUniqueName(original: string) {
    let name = original;
    let i = 1;

    while (
      Object.values(this.endpoints).some((e) => e.name === name) ||
      Object.keys(this.clients).some((c) => c === name)
    ) {
      name = `${original}$${i}`;
      i++;
    }

    return name;
  }

  private resolveParameter(param: OpenAPIV3.ParameterObject | OpenAPIV3.ReferenceObject) {
    if ('$ref' in param) {
      // Extract parameter name from "#/components/parameters/top"
      const paramName = param.$ref.split('/').pop();
      if (!paramName || !this.components?.parameters) {
        return param;
      }

      // Try exact match first
      const exactMatch = this.components.parameters[paramName];
      if (exactMatch) {
        return exactMatch;
      }

      // Try with $ prefix if not found
      const prefixMatch = this.components.parameters[`$${paramName}`];
      if (prefixMatch) {
        return prefixMatch;
      }

      // If neither match works, return original param
      return param;
    }
    return param;
  }
}

export async function generateEndpoints(
  version: ApiVersion,
  yamlPath: string,
  outputPath: string,
  templatesPath: string
): Promise<void> {
  const startTime = Date.now();
  console.log('=== Starting endpoint generation ===');

  // Parse OpenAPI YAML
  console.log(`Parsing OpenAPI YAML from ${yamlPath}...`);
  const yamlContent = fs.readFileSync(yamlPath, 'utf8');
  const schema: OpenAPIV3.Document = yaml.parse(yamlContent);

  console.log('Generating endpoints...');
  // write the common.ts file
  const commonTemplate = handlebars.compile(
    fs.readFileSync(npath.join(templatesPath, 'common.ts.hbs'), 'utf8')
  );
  const typesFolder = npath.join(outputPath, 'types');
  fs.mkdirSync(typesFolder, { recursive: true });
  fs.writeFileSync(npath.join(typesFolder, 'common.ts'), commonTemplate({ apiVersion: version }));

  // then the endpoints
  handlebars.registerPartial('functionDefinition', fs.readFileSync(npath.join(templatesPath, 'function-definition.ts.hbs'), 'utf8'));
  const filteredPaths = filterPathsByAllowlist(schema.paths, [], { filterInvalidUrls: true });
  const client = new Client('',  '', templatesPath, schema.info.description, schema.components);

  for (const [path, definition] of Object.entries(filteredPaths)) {
    client.set('', path, {
      ...(definition as Record<string, any>),
      url: path,
    });
  }

  console.log('🔄 Writing endpoint files...');
  await client.save(version, outputPath);

  const totalTime = Date.now() - startTime;
  console.log(`🏁 Endpoint generation completed in ${totalTime}ms`);
  console.log(`📁 Files written to: ${outputPath}`);
}
