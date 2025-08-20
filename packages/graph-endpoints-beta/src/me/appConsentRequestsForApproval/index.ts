export * as userConsentRequests from './userConsentRequests';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}',
    'delete'
  >;
  'GET /me/appConsentRequestsForApproval': Operation<'/me/appConsentRequestsForApproval', 'get'>;
  'GET /me/appConsentRequestsForApproval/{appConsentRequest-id}': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}',
    'get'
  >;
  'PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}',
    'patch'
  >;
  'POST /me/appConsentRequestsForApproval': Operation<'/me/appConsentRequestsForApproval', 'post'>;
}

/**
 * `DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'appConsentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/appConsentRequestsForApproval`
 *
 */
export function get(
  params?: IEndpoints['GET /me/appConsentRequestsForApproval']['parameters']
): EndpointRequest<IEndpoints['GET /me/appConsentRequestsForApproval']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/appConsentRequestsForApproval',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/appConsentRequestsForApproval/{appConsentRequest-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /me/appConsentRequestsForApproval/{appConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/appConsentRequestsForApproval/{appConsentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appConsentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}']['body'],
  params?: IEndpoints['PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}',
    paramDefs: [{ name: 'appConsentRequest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/appConsentRequestsForApproval`
 *
 */
export function create(
  body: IEndpoints['POST /me/appConsentRequestsForApproval']['body'],
  params?: IEndpoints['POST /me/appConsentRequestsForApproval']['parameters']
): EndpointRequest<IEndpoints['POST /me/appConsentRequestsForApproval']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/appConsentRequestsForApproval',
    paramDefs: [],
    params,
    body,
  };
}
