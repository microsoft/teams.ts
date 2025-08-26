import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}': Operation<
    '/directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}',
    'delete'
  >;
  'GET /directoryRoles/{directoryRole-id}/scopedMembers': Operation<
    '/directoryRoles/{directoryRole-id}/scopedMembers',
    'get'
  >;
  'GET /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}': Operation<
    '/directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}',
    'get'
  >;
  'PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}': Operation<
    '/directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}',
    'patch'
  >;
  'POST /directoryRoles/{directoryRole-id}/scopedMembers': Operation<
    '/directoryRoles/{directoryRole-id}/scopedMembers',
    'post'
  >;
}

/**
 * `DELETE /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['response']
> {
  return {
    method: 'delete',
    path: '/directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'directoryRole-id', in: 'path' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directoryRoles/{directoryRole-id}/scopedMembers`
 *
 * Retrieve a list of scopedRoleMembership objects for a directory role.
 */
export function list(
  params?: IEndpoints['GET /directoryRoles/{directoryRole-id}/scopedMembers']['parameters']
): EndpointRequest<IEndpoints['GET /directoryRoles/{directoryRole-id}/scopedMembers']['response']> {
  return {
    method: 'get',
    path: '/directoryRoles/{directoryRole-id}/scopedMembers',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}`
 *
 * Members of this directory role that are scoped to administrative units. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['response']
> {
  return {
    method: 'get',
    path: '/directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryRole-id', in: 'path' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['body'],
  params?: IEndpoints['PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}']['response']
> {
  return {
    method: 'patch',
    path: '/directoryRoles/{directoryRole-id}/scopedMembers/{scopedRoleMembership-id}',
    paramDefs: [
      { name: 'directoryRole-id', in: 'path' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /directoryRoles/{directoryRole-id}/scopedMembers`
 *
 */
export function create(
  body: IEndpoints['POST /directoryRoles/{directoryRole-id}/scopedMembers']['body'],
  params?: IEndpoints['POST /directoryRoles/{directoryRole-id}/scopedMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /directoryRoles/{directoryRole-id}/scopedMembers']['response']
> {
  return {
    method: 'post',
    path: '/directoryRoles/{directoryRole-id}/scopedMembers',
    paramDefs: [{ name: 'directoryRole-id', in: 'path' }],
    params,
    body,
  };
}
