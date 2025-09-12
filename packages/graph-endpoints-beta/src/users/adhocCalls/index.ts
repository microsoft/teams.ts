export * as recordings from './recordings';
export * as transcripts from './transcripts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/adhocCalls/{adhocCall-id}': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}',
    'delete'
  >;
  'GET /users/{user-id}/adhocCalls': Operation<'/users/{user-id}/adhocCalls', 'get'>;
  'GET /users/{user-id}/adhocCalls/{adhocCall-id}': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}',
    'get'
  >;
  'PATCH /users/{user-id}/adhocCalls/{adhocCall-id}': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}',
    'patch'
  >;
  'POST /users/{user-id}/adhocCalls': Operation<'/users/{user-id}/adhocCalls', 'post'>;
}

/**
 * `DELETE /users/{user-id}/adhocCalls/{adhocCall-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/adhocCalls/{adhocCall-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/adhocCalls/{adhocCall-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'adhocCall-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/adhocCalls`
 *
 * Ad hoc calls associated with the user. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/adhocCalls']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/adhocCalls']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/adhocCalls',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/adhocCalls/{adhocCall-id}`
 *
 * Ad hoc calls associated with the user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}',
    paramDefs: {
      path: ['user-id', 'adhocCall-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/adhocCalls/{adhocCall-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/adhocCalls/{adhocCall-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/adhocCalls/{adhocCall-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/adhocCalls/{adhocCall-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}',
    paramDefs: {
      path: ['user-id', 'adhocCall-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/adhocCalls`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/adhocCalls']['body'],
  params?: IEndpoints['POST /users/{user-id}/adhocCalls']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/adhocCalls']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/adhocCalls',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}
