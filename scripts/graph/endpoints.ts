import camelcase from 'camelcase';
import fs from 'fs';
import handlebars from 'handlebars';
import { OpenAPIV3 } from 'openapi-types';
import npath from 'path/posix';
import * as prettier from 'prettier';
import sortKeys from 'sort-keys';
import yaml from 'yaml';

import prettierConfig from './prettier.config';
import { ApiVersion, filterPathsByAllowlist, getExportName } from './utils';

// Parse command line arguments
// Usage: tsx endpoints.ts [openapiYamlPath] [outputFolder] [version]
const [, , openapiYamlPathArg, outputFolderArg, versionArg] = process.argv;
const version: ApiVersion = versionArg === 'beta' ? 'beta' : 'v1.0';

// Default paths if not provided
const defaultYamlPath = npath.join(
  __dirname,
  '..',
  version === 'v1.0' ? 'openapi.yaml' : 'openapi-beta.yaml'
);
const defaultOutputFolder =
  version === 'v1.0'
    ? npath.join(__dirname, '..', '..', 'packages', 'graph-endpoints', 'src')
    : npath.join(__dirname, '..', '..', 'packages', 'graph-endpoints-beta', 'src');

const openapiYamlPath = openapiYamlPathArg || defaultYamlPath;
const outputFolder = outputFolderArg || defaultOutputFolder;

const patterns = {
  specialChars: /[!$#@%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
  invalidUrl: /[!$#@%^&*()+=\[\];':"\\|,.<>?]+/,
  param: /\{[A-Za-z0-9\-]*\}/,
};

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

handlebars.registerHelper('notEmpty', (value: Record<string, any> | Array<any> | undefined) => {
  if (!value) return false;

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return Object.keys(value).length > 0;
});

const commonTemplate = handlebars.compile(
  fs.readFileSync(npath.join(__dirname, 'common.ts.hbs'), 'utf8')
);

const clientTemplate = handlebars.compile(
  fs.readFileSync(npath.join(__dirname, 'client.ts.hbs'), 'utf8')
);

interface Endpoint {
  readonly method: string;
  readonly name: string;
  readonly url: string;
  readonly parameters?: Array<OpenAPIV3.ParameterObject>;
  readonly description?: string;
  readonly deprecated?: boolean;
}

class Client {
  readonly name: string;
  readonly exportName: string;
  private components?: OpenAPIV3.ComponentsObject;

  url: string;
  description?: string;
  parameters: Array<string>;
  clients: Record<string, Client>;
  endpoints: Record<string, Endpoint>;

  constructor(name: string, description?: string, components?: OpenAPIV3.ComponentsObject) {
    this.name = name;
    this.exportName = getExportName(name);
    this.description = description;
    this.components = components;
    this.url = '/';
    this.parameters = [];
    this.clients = {};
    this.endpoints = {};
  }

  set(_parent: string, path: string, schema: OpenAPIV3.PathItemObject & { url: string }) {
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

    let [child, ...other] = children;

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

    if (!this.clients[name]) {
      this.clients[name] = new Client(name, undefined, this.components);
      this.clients[name].url = npath.join(this.url, ...params.map((p) => `{${p}}`), child);
      this.clients[name].parameters = params;
    }

    this.clients[name].set(name, other.join('/'), schema);
  }

  async save(apiVersion: ApiVersion, path = '') {
    const srcPath = npath.join(outputFolder, path, this.name);

    this.clients = sortKeys(this.clients, { deep: true });
    this.endpoints = sortKeys(this.endpoints, { deep: true });

    if (Object.keys(this.clients).length && !fs.existsSync(srcPath)) {
      fs.mkdirSync(srcPath, { recursive: true });
    }

    for (const [_, child] of Object.entries(this.clients)) {
      child.save(apiVersion, npath.join(path, this.name));
    }

    let filename = this.name;

    if (Object.keys(this.clients).length) {
      filename = npath.join(this.name, 'index');
    }

    let res = clientTemplate({
      ...this,
      apiVersion,
      commonPath: npath.relative(
        npath.join('/', path, Object.keys(this.clients).length ? this.name : ''),
        npath.join('/', 'types', 'common.ts')
      ),
    });

    fs.writeFileSync(
      npath.join(outputFolder, path, `${filename}.ts`),
      await prettier.format(res, { parser: 'typescript', ...prettierConfig })
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

      this.endpoints[`${method.toUpperCase()} ${schema.url}`] = {
        method,
        name: this.getUniqueName(name),
        url: schema.url,
        parameters: params,
        description: def.description,
        deprecated: def.deprecated,
      };
    }
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
  yamlPath?: string,
  outputPath?: string
): Promise<void> {
  const startTime = Date.now();
  console.log('=== Starting endpoint generation ===');

  // Use provided paths or fall back to command line args or defaults
  const finalYamlPath = yamlPath || openapiYamlPath;
  const finalOutputPath = outputPath || outputFolder;

  // Parse OpenAPI YAML
  console.log(`Parsing OpenAPI YAML from ${finalYamlPath}...`);
  const yamlContent = fs.readFileSync(finalYamlPath, 'utf8');
  const schema: OpenAPIV3.Document = yaml.parse(yamlContent);

  console.log('Generating endpoints...');
  // write the common.ts file
  const typesFolder = npath.join(outputFolder, 'types');
  fs.mkdirSync(typesFolder, { recursive: true });
  fs.writeFileSync(npath.join(typesFolder, 'common.ts'), commonTemplate({ apiVersion: version }));

  // then the endpoints
  const filteredPaths = filterPathsByAllowlist(schema.paths, { filterInvalidUrls: true });
  const client = new Client('', schema.info.description, schema.components);

  for (const [path, definition] of Object.entries(filteredPaths)) {
    client.set('', path, {
      ...definition,
      url: path,
    });
  }

  console.log('🔄 Writing endpoint files...');
  await client.save(version);

  const totalTime = Date.now() - startTime;
  console.log(`🏁 Endpoint generation completed in ${totalTime}ms`);
  console.log(`📁 Files written to: ${finalOutputPath}`);
}

// CLI interface - run if called directly
if (require.main === module) {
  generateEndpoints(version).catch((error) => {
    console.error('❌ Endpoint generation failed:', error);
    process.exit(1);
  });
}
