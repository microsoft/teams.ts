export * as recordings from './recordings';
export * as transcripts from './transcripts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/adhocCalls/{adhocCall-id}': Operation<'/me/adhocCalls/{adhocCall-id}', 'delete'>;
  'GET /me/adhocCalls': Operation<'/me/adhocCalls', 'get'>;
  'GET /me/adhocCalls/{adhocCall-id}': Operation<'/me/adhocCalls/{adhocCall-id}', 'get'>;
  'PATCH /me/adhocCalls/{adhocCall-id}': Operation<'/me/adhocCalls/{adhocCall-id}', 'patch'>;
  'POST /me/adhocCalls': Operation<'/me/adhocCalls', 'post'>;
}

/**
 * `DELETE /me/adhocCalls/{adhocCall-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/adhocCalls/{adhocCall-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/adhocCalls/{adhocCall-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/adhocCalls/{adhocCall-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['adhocCall-id'],
    },
    params,
  };
}

/**
 * `GET /me/adhocCalls`
 *
 * Ad hoc calls associated with the user. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/adhocCalls']['parameters']
): EndpointRequest<IEndpoints['GET /me/adhocCalls']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/adhocCalls',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/adhocCalls/{adhocCall-id}`
 *
 * Ad hoc calls associated with the user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/adhocCalls/{adhocCall-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/adhocCalls/{adhocCall-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/adhocCalls/{adhocCall-id}',
    paramDefs: {
      path: ['adhocCall-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/adhocCalls/{adhocCall-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/adhocCalls/{adhocCall-id}']['body'],
  params?: IEndpoints['PATCH /me/adhocCalls/{adhocCall-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/adhocCalls/{adhocCall-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/adhocCalls/{adhocCall-id}',
    paramDefs: {
      path: ['adhocCall-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/adhocCalls`
 *
 */
export function create(
  body: IEndpoints['POST /me/adhocCalls']['body']
): EndpointRequest<IEndpoints['POST /me/adhocCalls']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/adhocCalls',
    body,
  };
}
