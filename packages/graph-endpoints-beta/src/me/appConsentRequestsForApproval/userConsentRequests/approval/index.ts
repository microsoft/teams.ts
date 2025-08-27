export * as steps from './steps';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    'delete'
  >;
  'GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    'get'
  >;
  'PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    'patch'
  >;
}

/**
 * `DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval`
 *
 * Approval decisions associated with a request.
 */
export function get(
  params?: IEndpoints['GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
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
 * `PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['body'],
  params?: IEndpoints['PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval',
    paramDefs: [
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}
