export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/groups/{group-id}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/groups': Operation<'/sites/{site-id}/termStore/groups', 'get'>;
  'GET /sites/{site-id}/termStore/groups/{group-id}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/groups/{group-id}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStore/groups': Operation<'/sites/{site-id}/termStore/groups', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/termStore/groups/{group-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/termStore/groups/{group-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'group-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/groups`
 *
 * Read the properties and relationships of a term store group object.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStore/groups']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStore/groups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/groups',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/groups/{group-id}`
 *
 * Read the properties and relationships of a term store group object.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/groups/{group-id}',
    paramDefs: {
      path: ['site-id', 'group-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore/groups/{group-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/termStore/groups/{group-id}',
    paramDefs: {
      path: ['site-id', 'group-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStore/groups`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStore/groups']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStore/groups']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/termStore/groups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/termStore/groups',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}
