import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    'delete'
  >;
  'GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
    'get'
  >;
  'GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    'patch'
  >;
  'POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps': Operation<
    '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
    'post'
  >;
}

/**
 * `DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps`
 *
 * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
 */
export function list(
  params?: IEndpoints['GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
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
      { name: 'userConsentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}`
 *
 * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
 */
export function get(
  params?: IEndpoints['GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['body'],
  params?: IEndpoints['PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    paramDefs: [
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps`
 *
 */
export function create(
  body: IEndpoints['POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['body'],
  params?: IEndpoints['POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
    paramDefs: [
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}
