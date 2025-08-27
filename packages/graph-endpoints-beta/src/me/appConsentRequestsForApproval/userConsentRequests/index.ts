export * as approval from './approval';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    'delete'
  >;
  'GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests',
    'get'
  >;
  'GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    'get'
  >;
  'PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    'patch'
  >;
  'POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests',
    'post'
  >;
}

/**
 * `DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests`
 *
 * A list of pending user consent requests. Supports $filter (eq).
 */
export function list(
  params?: IEndpoints['GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appConsentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}`
 *
 * A list of pending user consent requests. Supports $filter (eq).
 */
export function get(
  params?: IEndpoints['GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['body'],
  params?: IEndpoints['PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    paramDefs: [
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests']['body'],
  params?: IEndpoints['POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests',
    paramDefs: [{ name: 'appConsentRequest-id', in: 'path' }],
    params,
    body,
  };
}
