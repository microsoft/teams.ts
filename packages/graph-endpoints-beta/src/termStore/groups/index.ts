export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/groups/{group-id}': Operation<'/termStore/groups/{group-id}', 'delete'>;
  'GET /termStore/groups': Operation<'/termStore/groups', 'get'>;
  'GET /termStore/groups/{group-id}': Operation<'/termStore/groups/{group-id}', 'get'>;
  'PATCH /termStore/groups/{group-id}': Operation<'/termStore/groups/{group-id}', 'patch'>;
  'POST /termStore/groups': Operation<'/termStore/groups', 'post'>;
}

/**
 * `DELETE /termStore/groups/{group-id}`
 *
 * Delete a group object in a term [store].
 */
export function del(
  params?: IEndpoints['DELETE /termStore/groups/{group-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /termStore/groups/{group-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/groups/{group-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id'],
    },
    params,
  };
}

/**
 * `GET /termStore/groups`
 *
 * Get the list of group objects of a store
 */
export function list(
  params?: IEndpoints['GET /termStore/groups']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/groups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}`
 *
 * Read the properties and relationships of a term store group object.
 */
export function get(
  params?: IEndpoints['GET /termStore/groups/{group-id}']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/groups/{group-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}',
    paramDefs: {
      path: ['group-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /termStore/groups/{group-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/groups/{group-id}']['body'],
  params?: IEndpoints['PATCH /termStore/groups/{group-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /termStore/groups/{group-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/groups/{group-id}',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /termStore/groups`
 *
 * Create a new group object.
 */
export function create(
  body: IEndpoints['POST /termStore/groups']['body']
): EndpointRequest<IEndpoints['POST /termStore/groups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/groups',
    body,
  };
}
