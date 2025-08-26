export * as acquireAccessToken from './acquireAccessToken';
export * as jobs from './jobs';
export * as secrets from './secrets';
export * as templates from './templates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/synchronization': Operation<
    '/applications/{application-id}/synchronization',
    'delete'
  >;
  'GET /applications/{application-id}/synchronization': Operation<
    '/applications/{application-id}/synchronization',
    'get'
  >;
  'PUT /applications/{application-id}/synchronization': Operation<
    '/applications/{application-id}/synchronization',
    'put'
  >;
}

/**
 * `DELETE /applications/{application-id}/synchronization`
 *
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/synchronization']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /applications/{application-id}/synchronization']['response']
> {
  return {
    method: 'delete',
    path: '/applications/{application-id}/synchronization',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization`
 *
 * Represents the capability for Microsoft Entra identity synchronization through the Microsoft Graph API.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/synchronization']['parameters']
): EndpointRequest<IEndpoints['GET /applications/{application-id}/synchronization']['response']> {
  return {
    method: 'get',
    path: '/applications/{application-id}/synchronization',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /applications/{application-id}/synchronization`
 *
 */
export function set(
  body: IEndpoints['PUT /applications/{application-id}/synchronization']['body'],
  params?: IEndpoints['PUT /applications/{application-id}/synchronization']['parameters']
): EndpointRequest<IEndpoints['PUT /applications/{application-id}/synchronization']['response']> {
  return {
    method: 'put',
    path: '/applications/{application-id}/synchronization',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}
