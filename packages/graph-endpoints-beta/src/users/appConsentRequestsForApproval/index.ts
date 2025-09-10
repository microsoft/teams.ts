export * as userConsentRequests from './userConsentRequests';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}',
    'delete'
  >;
  'GET /users/{user-id}/appConsentRequestsForApproval': Operation<
    '/users/{user-id}/appConsentRequestsForApproval',
    'get'
  >;
  'GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}',
    'get'
  >;
  'PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}',
    'patch'
  >;
  'POST /users/{user-id}/appConsentRequestsForApproval': Operation<
    '/users/{user-id}/appConsentRequestsForApproval',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'appConsentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/appConsentRequestsForApproval`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/appConsentRequestsForApproval',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}',
    paramDefs: {
      path: ['user-id', 'appConsentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}',
    paramDefs: {
      path: ['user-id', 'appConsentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/appConsentRequestsForApproval`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/appConsentRequestsForApproval']['body'],
  params?: IEndpoints['POST /users/{user-id}/appConsentRequestsForApproval']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/appConsentRequestsForApproval']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/appConsentRequestsForApproval',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}
