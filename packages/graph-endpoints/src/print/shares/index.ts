export * as allowedGroups from './allowedGroups';
export * as allowedUsers from './allowedUsers';
export * as jobs from './jobs';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/shares/{printerShare-id}': Operation<'/print/shares/{printerShare-id}', 'delete'>;
  'GET /print/shares': Operation<'/print/shares', 'get'>;
  'GET /print/shares/{printerShare-id}': Operation<'/print/shares/{printerShare-id}', 'get'>;
  'PATCH /print/shares/{printerShare-id}': Operation<'/print/shares/{printerShare-id}', 'patch'>;
  'POST /print/shares': Operation<'/print/shares', 'post'>;
  'GET /print/shares/{printerShare-id}/printer': Operation<
    '/print/shares/{printerShare-id}/printer',
    'get'
  >;
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
    method: 'delete',
    path: '/print/shares/{printerShare-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printerShare-id'],
    },
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
    method: 'get',
    path: '/print/shares',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    method: 'get',
    path: '/print/shares/{printerShare-id}',
    paramDefs: {
      path: ['printerShare-id'],
      query: ['$select', '$expand'],
    },
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
    method: 'patch',
    path: '/print/shares/{printerShare-id}',
    paramDefs: {
      path: ['printerShare-id'],
    },
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
  body: IEndpoints['POST /print/shares']['body']
): EndpointRequest<IEndpoints['POST /print/shares']['response']> {
  return {
    method: 'post',
    path: '/print/shares',
    body,
  };
}

export const printer = {
  /**
   * `GET /print/shares/{printerShare-id}/printer`
   *
   * The printer that this printer share is related to.
   */
  get: function get(
    params?: IEndpoints['GET /print/shares/{printerShare-id}/printer']['parameters']
  ): EndpointRequest<IEndpoints['GET /print/shares/{printerShare-id}/printer']['response']> {
    return {
      method: 'get',
      path: '/print/shares/{printerShare-id}/printer',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printerShare-id'],
      },
      params,
    };
  },
};
