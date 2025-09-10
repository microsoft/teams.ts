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
    paramDefs: {
      header: ['If-Match'],
      path: ['appConsentRequest-id', 'userConsentRequest-id'],
    },
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
    paramDefs: {
      path: ['appConsentRequest-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['appConsentRequest-id', 'userConsentRequest-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['appConsentRequest-id', 'userConsentRequest-id'],
    },
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
    paramDefs: {
      path: ['appConsentRequest-id'],
    },
    params,
    body,
  };
}
