export * as cancelOffboard from './cancelOffboard';
export * as offboard from './offboard';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /solutions/backupRestore/protectionUnits': Operation<
    '/solutions/backupRestore/protectionUnits',
    'get'
  >;
  'GET /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}': Operation<
    '/solutions/backupRestore/protectionUnits/{protectionUnitBase-id}',
    'get'
  >;
}

/**
 * `GET /solutions/backupRestore/protectionUnits`
 *
 * Read the properties and relationships of a protectionUnitBase object.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/protectionUnits']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/protectionUnits']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/protectionUnits',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}`
 *
 * Read the properties and relationships of a protectionUnitBase object.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/protectionUnits/{protectionUnitBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/protectionUnits/{protectionUnitBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'protectionUnitBase-id', in: 'path' },
    ],
    params,
  };
}
