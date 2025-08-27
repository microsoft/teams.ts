import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    'delete'
  >;
  'GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
    'get'
  >;
  'GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    'patch'
  >;
  'POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps': Operation<
    '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps`
 *
 * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
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
      { name: 'userConsentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}`
 *
 * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps/{approvalStep-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['body'],
  params?: IEndpoints['POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/{userConsentRequest-id}/approval/steps',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'appConsentRequest-id', in: 'path' },
      { name: 'userConsentRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}
