import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    'delete'
  >;
  'GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    'get'
  >;
  'PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    'patch'
  >;
}

/**
 * `DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject`
 *
 * Read-only. The user/group principal.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleAssignmentRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['body'],
  params?: IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    paramDefs: [{ name: 'governanceRoleAssignmentRequest-id', in: 'path' }],
    params,
    body,
  };
}
