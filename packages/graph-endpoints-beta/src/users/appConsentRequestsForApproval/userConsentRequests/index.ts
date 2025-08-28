export * as approval from './approval';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    'delete'
  >;
  'GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests',
    'get'
  >;
  'GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    'patch'
  >;
  'POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests`
 *
 * A list of pending user consent requests. Supports $filter (eq).
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'appConsentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}`
 *
 * A list of pending user consent requests. Supports $filter (eq).
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests']['body'],
  params?: IEndpoints['POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'appConsentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}
