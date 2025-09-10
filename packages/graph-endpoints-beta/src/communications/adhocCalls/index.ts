export * as recordings from './recordings';
export * as transcripts from './transcripts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/adhocCalls/{adhocCall-id}': Operation<
    '/communications/adhocCalls/{adhocCall-id}',
    'delete'
  >;
  'GET /communications/adhocCalls': Operation<'/communications/adhocCalls', 'get'>;
  'GET /communications/adhocCalls/{adhocCall-id}': Operation<
    '/communications/adhocCalls/{adhocCall-id}',
    'get'
  >;
  'PATCH /communications/adhocCalls/{adhocCall-id}': Operation<
    '/communications/adhocCalls/{adhocCall-id}',
    'patch'
  >;
  'POST /communications/adhocCalls': Operation<'/communications/adhocCalls', 'post'>;
}

/**
 * `DELETE /communications/adhocCalls/{adhocCall-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/adhocCalls/{adhocCall-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /communications/adhocCalls/{adhocCall-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/adhocCalls/{adhocCall-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['adhocCall-id'],
    },
    params,
  };
}

/**
 * `GET /communications/adhocCalls`
 *
 * A collection of ad hoc calls in Teams.
 */
export function list(
  params?: IEndpoints['GET /communications/adhocCalls']['parameters']
): EndpointRequest<IEndpoints['GET /communications/adhocCalls']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/adhocCalls',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /communications/adhocCalls/{adhocCall-id}`
 *
 * A collection of ad hoc calls in Teams.
 */
export function get(
  params?: IEndpoints['GET /communications/adhocCalls/{adhocCall-id}']['parameters']
): EndpointRequest<IEndpoints['GET /communications/adhocCalls/{adhocCall-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/adhocCalls/{adhocCall-id}',
    paramDefs: {
      path: ['adhocCall-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/adhocCalls/{adhocCall-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/adhocCalls/{adhocCall-id}']['body'],
  params?: IEndpoints['PATCH /communications/adhocCalls/{adhocCall-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /communications/adhocCalls/{adhocCall-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/adhocCalls/{adhocCall-id}',
    paramDefs: {
      path: ['adhocCall-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /communications/adhocCalls`
 *
 */
export function create(
  body: IEndpoints['POST /communications/adhocCalls']['body']
): EndpointRequest<IEndpoints['POST /communications/adhocCalls']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/adhocCalls',
    body,
  };
}
