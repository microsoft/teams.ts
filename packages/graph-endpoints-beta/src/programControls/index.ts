export * as program from './program';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /programControls/{programControl-id}': Operation<
    '/programControls/{programControl-id}',
    'delete'
  >;
  'GET /programControls': Operation<'/programControls', 'get'>;
  'GET /programControls/{programControl-id}': Operation<
    '/programControls/{programControl-id}',
    'get'
  >;
  'PATCH /programControls/{programControl-id}': Operation<
    '/programControls/{programControl-id}',
    'patch'
  >;
  'POST /programControls': Operation<'/programControls', 'post'>;
}

/**
 * `DELETE /programControls/{programControl-id}`
 *
 * In the Microsoft Entra access reviews feature, delete a programControl object.  This unlinks an access review from a program.
 */
export function del(
  params?: IEndpoints['DELETE /programControls/{programControl-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /programControls/{programControl-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/programControls/{programControl-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['programControl-id'],
    },
    params,
  };
}

/**
 * `GET /programControls`
 *
 * In the Microsoft Entra access reviews feature, list all the programControl objects, across all programs in the tenant.
 */
export function list(
  params?: IEndpoints['GET /programControls']['parameters']
): EndpointRequest<IEndpoints['GET /programControls']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programControls',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /programControls/{programControl-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /programControls/{programControl-id}']['parameters']
): EndpointRequest<IEndpoints['GET /programControls/{programControl-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/programControls/{programControl-id}',
    paramDefs: {
      path: ['programControl-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /programControls/{programControl-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /programControls/{programControl-id}']['body'],
  params?: IEndpoints['PATCH /programControls/{programControl-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /programControls/{programControl-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/programControls/{programControl-id}',
    paramDefs: {
      path: ['programControl-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /programControls`
 *
 * In the Microsoft Entra access reviews feature, create a new programControl object.  This links an access review to a program. Prior to making this request, the caller must have previously
 */
export function create(
  body: IEndpoints['POST /programControls']['body']
): EndpointRequest<IEndpoints['POST /programControls']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/programControls',
    body,
  };
}
