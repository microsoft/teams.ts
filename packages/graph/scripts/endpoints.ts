import camelcase from 'camelcase';
import fs from 'fs';
import handlebars from 'handlebars';
import { OpenAPIV3 } from 'openapi-types';
import npath from 'path/posix';
import * as prettier from 'prettier';
import sortKeys from 'sort-keys';
import yaml from 'yaml';

import prettierConfig from './prettier.config.js';

const whitelist = [
  /^\/chats(.*)$/,
  /^\/teams(.*)$/,
  /^\/teamwork(.*)$/,
  /^\/appCatalogs(.*)$/,
  /^\/employeeExperience\/learningProviders(.*)$/,
  /^\/communications(.*)$/,
  /^\/app(.*)$/,
  /^\/users$/,
  /^\/users\/\{user-id\}$/,
  /^\/users\/(.*)\/chats(.*)$/,
  /^\/users\/(.*)\/presence(.*)$/,
  /^\/users\/(.*)\/onlineMeetings(.*)$/,
  /^\/users\/(.*)\/teamwork(.*)$/,
  /^\/me$/,
  /^\/me\/chats(.*)$/,
  /^\/me\/photo(.*)$/,
  /^\/me\/calendars(.*)$/,
  /^\/me\/calendar(.*)$/,
  /^\/me\/presence(.*)$/,
  /^\/solutions(.*)$/,
  /^\/sites(.*)$/,
];

const patterns = {
  specialChars: /[!$#@%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g,
  invalidUrl: /[!$#@%^&*()+=\[\];':"\\|,.<>?]+/g,
  param: /\{[A-Za-z0-9\-]*\}/g,
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

const typesTemplate = handlebars.compile(
  fs.readFileSync(npath.join(__dirname, 'types.ts.template'), 'utf8')
);

const commonTemplate = handlebars.compile(
  fs.readFileSync(npath.join(__dirname, 'common.ts.template'), 'utf8')
);

const clientTemplate = handlebars.compile(
  fs.readFileSync(npath.join(__dirname, 'client.ts.template'), 'utf8')
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
  private components?: OpenAPIV3.ComponentsObject;

  url: string;
  description?: string;
  parameters: Array<string>;
  clients: Record<string, Client>;
  endpoints: Record<string, Endpoint>;

  constructor(name: string, description?: string, components?: OpenAPIV3.ComponentsObject) {
    this.name = name;
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

  async save(path = '') {
    const srcPath = npath.join(__dirname, '..', 'src', path, this.name);

    this.clients = sortKeys(this.clients, { deep: true });
    this.endpoints = sortKeys(this.endpoints, { deep: true });

    fs.writeFileSync(npath.join(__dirname, '..', 'src', 'common.ts'), commonTemplate({}));

    if (Object.keys(this.clients).length && !fs.existsSync(srcPath)) {
      fs.mkdirSync(srcPath, { recursive: true });
    }

    for (const [_, child] of Object.entries(this.clients)) {
      child.save(npath.join(path, this.name));
    }

    let filename = this.name;

    if (Object.keys(this.clients).length) {
      filename = npath.join(this.name, 'index');
    }

    let res = clientTemplate({
      ...this,
      types: Object.keys(this.clients).length > 0 ? 'index' : this.name,
    });

    fs.writeFileSync(
      npath.join(__dirname, '..', 'src', path, `${filename}.ts`),
      await prettier.format(res, { parser: 'typescript', ...prettierConfig })
    );

    res = typesTemplate({
      ...this,
      path: npath.relative(
        npath.join('/', path, Object.keys(this.clients).length ? this.name : ''),
        npath.join('/', 'common.ts')
      ),
    });

    fs.writeFileSync(
      npath.join(__dirname, '..', 'src', path, `${filename}-types.ts`),
      await prettier.format(res, { parser: 'typescript', ...prettierConfig })
    );
  }

  protected addEndpoint(path: string[], schema: OpenAPIV3.PathItemObject & { url: string }) {
    for (const method in methods) {
      const def = schema[method as keyof typeof methods];
      if (!def) continue;

      const params = [...(def.parameters || []), ...(schema.parameters || [])]
        .map((param) => this.resolveParameter(param))
        .filter((p): p is OpenAPIV3.ParameterObject => 'name' in p); // Type guard to ensure we have name

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

function isWhitelisted(path: string) {
  if (patterns.invalidUrl.test(path)) {
    return false;
  }

  for (const regex of whitelist) {
    if (path.match(regex)) {
      return true;
    }
  }

  return false;
}

(async () => {
  console.log('reading schema from disk...');
  const data = fs.readFileSync(npath.join(__dirname, '..', 'openapi.yaml'));

  console.log('parsing schema yaml...');
  const schema: OpenAPIV3.Document = yaml.parse(data.toString());

  console.log('generating endpoints...');
  const client = new Client('', schema.info.description, schema.components);

  for (const [path, definition] of Object.entries(schema.paths)) {
    if (!definition || !isWhitelisted(path)) continue;

    client.set('', path, {
      ...definition,
      url: path,
    });
  }

  await client.save();
})();
