export * as allowedGroups from './allowedGroups';
export * as allowedUsers from './allowedUsers';
export * as jobs from './jobs';
export * as printer from './printer';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/shares/{printerShare-id}': Operation<'/print/shares/{printerShare-id}', 'delete'>;
  'GET /print/shares': Operation<'/print/shares', 'get'>;
  'GET /print/shares/{printerShare-id}': Operation<'/print/shares/{printerShare-id}', 'get'>;
  'PATCH /print/shares/{printerShare-id}': Operation<'/print/shares/{printerShare-id}', 'patch'>;
  'POST /print/shares': Operation<'/print/shares', 'post'>;
}

/**
 * `DELETE /print/shares/{printerShare-id}`
 *
 * Delete a printer share (unshare the associated printer). This action can&#x27;t be undone. If the printer is shared again in the future, any Windows users who had previously installed the printer needs to discover and reinstall it.
 */
export function del(
  params?: IEndpoints['DELETE /print/shares/{printerShare-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /print/shares/{printerShare-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/shares/{printerShare-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printerShare-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/shares`
 *
 * Retrieve a list of printerShares.
 */
export function list(
  params?: IEndpoints['GET /print/shares']['parameters']
): EndpointRequest<IEndpoints['GET /print/shares']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/shares',
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
 * `GET /print/shares/{printerShare-id}`
 *
 * Retrieve the properties and relationships of a printer share.
 */
export function get(
  params?: IEndpoints['GET /print/shares/{printerShare-id}']['parameters']
): EndpointRequest<IEndpoints['GET /print/shares/{printerShare-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/shares/{printerShare-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printerShare-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/shares/{printerShare-id}`
 *
 * Update the properties of a printer share. This method can be used to swap printers. For example, if a physical printer device breaks, an administrator can register a new printer device and update this printerShare to point to the new printer without requiring users to take any action.
 */
export function update(
  body: IEndpoints['PATCH /print/shares/{printerShare-id}']['body'],
  params?: IEndpoints['PATCH /print/shares/{printerShare-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /print/shares/{printerShare-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/shares/{printerShare-id}',
    paramDefs: [{ name: 'printerShare-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /print/shares`
 *
 * Create a new printerShare for the specified printer.
 */
export function create(
  body: IEndpoints['POST /print/shares']['body'],
  params?: IEndpoints['POST /print/shares']['parameters']
): EndpointRequest<IEndpoints['POST /print/shares']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/shares',
    paramDefs: [],
    params,
    body,
  };
}
