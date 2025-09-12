export * as children from './children';
export * as parentGroup from './parentGroup';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/sets/{set-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/sets': Operation<'/sites/{site-id}/termStore/sets', 'get'>;
  'GET /sites/{site-id}/termStore/sets/{set-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/sets/{set-id}': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStore/sets': Operation<'/sites/{site-id}/termStore/sets', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/termStore/sets/{set-id}`
 *
 * Delete a set object.
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}']['response']> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/termStore/sets/{set-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'set-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/sets`
 *
 * Read the properties and relationships of a set object.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStore/sets']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStore/sets',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/sets/{set-id}`
 *
 * Read the properties and relationships of a set object.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}',
    paramDefs: {
      path: ['site-id', 'set-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore/sets/{set-id}`
 *
 * Update the properties of a set object.
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}']['response']> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/termStore/sets/{set-id}',
    paramDefs: {
      path: ['site-id', 'set-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStore/sets`
 *
 * Create a new set object.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStore/sets']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStore/sets']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/termStore/sets']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/termStore/sets',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}
