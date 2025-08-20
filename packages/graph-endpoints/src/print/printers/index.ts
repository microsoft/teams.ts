export * as connectors from './connectors';
export * as docreate from './create';
export * as jobs from './jobs';
export * as restoreFactoryDefaults from './restoreFactoryDefaults';
export * as shares from './shares';
export * as taskTriggers from './taskTriggers';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printers/{printer-id}': Operation<'/print/printers/{printer-id}', 'delete'>;
  'GET /print/printers': Operation<'/print/printers', 'get'>;
  'GET /print/printers/{printer-id}': Operation<'/print/printers/{printer-id}', 'get'>;
  'PATCH /print/printers/{printer-id}': Operation<'/print/printers/{printer-id}', 'patch'>;
  'POST /print/printers': Operation<'/print/printers', 'post'>;
}

/**
 * `DELETE /print/printers/{printer-id}`
 *
 * Delete (unregister) a printer.
 */
export function del(
  params?: IEndpoints['DELETE /print/printers/{printer-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /print/printers/{printer-id}']['response']> {
  return {
    method: 'delete',
    path: '/print/printers/{printer-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/printers`
 *
 * Retrieve the list of printers that are registered in the tenant.
 */
export function list(
  params?: IEndpoints['GET /print/printers']['parameters']
): EndpointRequest<IEndpoints['GET /print/printers']['response']> {
  return {
    method: 'get',
    path: '/print/printers',
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
 * `GET /print/printers/{printer-id}`
 *
 * Retrieve the properties and relationships of a printer object.
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}']['parameters']
): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}']['response']> {
  return {
    method: 'get',
    path: '/print/printers/{printer-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/printers/{printer-id}`
 *
 * Update the properties of a printer object.
 */
export function update(
  body: IEndpoints['PATCH /print/printers/{printer-id}']['body'],
  params?: IEndpoints['PATCH /print/printers/{printer-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /print/printers/{printer-id}']['response']> {
  return {
    method: 'patch',
    path: '/print/printers/{printer-id}',
    paramDefs: [{ name: 'printer-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /print/printers`
 *
 */
export function create(
  body: IEndpoints['POST /print/printers']['body'],
  params?: IEndpoints['POST /print/printers']['parameters']
): EndpointRequest<IEndpoints['POST /print/printers']['response']> {
  return {
    method: 'post',
    path: '/print/printers',
    paramDefs: [],
    params,
    body,
  };
}
