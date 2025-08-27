import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
    'delete'
  >;
  'GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers',
    'get'
  >;
  'GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
    'get'
  >;
  'PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
    'patch'
  >;
  'POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers',
    'post'
  >;
}

/**
 * `DELETE /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}`
 *
 * Remove a Microsoft Entra role assignment with administrative unit scope.
 */
export function del(
  params?: IEndpoints['DELETE /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['response']
> {
  return {
    method: 'delete',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'administrativeUnit-id', in: 'path' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers`
 *
 * List Microsoft Entra role assignments with administrative unit scope.
 */
export function list(
  params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['response']
> {
  return {
    method: 'get',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'administrativeUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}`
 *
 * Get a Microsoft Entra role assignment with administrative unit scope.
 */
export function get(
  params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['response']
> {
  return {
    method: 'get',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'administrativeUnit-id', in: 'path' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['body'],
  params?: IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}']['response']
> {
  return {
    method: 'patch',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}',
    paramDefs: [
      { name: 'administrativeUnit-id', in: 'path' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers`
 *
 * Assign a Microsoft Entra role with administrative unit scope. For a list of roles that can be assigned with administrative unit scope, see Assign Microsoft Entra roles with administrative unit scope.
 */
export function create(
  body: IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['body'],
  params?: IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers']['response']
> {
  return {
    method: 'post',
    path: '/directory/administrativeUnits/{administrativeUnit-id}/scopedRoleMembers',
    paramDefs: [{ name: 'administrativeUnit-id', in: 'path' }],
    params,
    body,
  };
}
