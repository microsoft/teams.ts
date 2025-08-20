export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as getByIds from './getByIds';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as getUserOwnedObjects from './getUserOwnedObjects';
export * as members from './members';
export * as restore from './restore';
export * as scopedMembers from './scopedMembers';
export * as validateProperties from './validateProperties';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directoryRoles/{directoryRole-id}': Operation<
    '/directoryRoles/{directoryRole-id}',
    'delete'
  >;
  'GET /directoryRoles': Operation<'/directoryRoles', 'get'>;
  'GET /directoryRoles/{directoryRole-id}': Operation<'/directoryRoles/{directoryRole-id}', 'get'>;
  'PATCH /directoryRoles/{directoryRole-id}': Operation<
    '/directoryRoles/{directoryRole-id}',
    'patch'
  >;
  'POST /directoryRoles': Operation<'/directoryRoles', 'post'>;
}

/**
 * `DELETE /directoryRoles/{directoryRole-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directoryRoles/{directoryRole-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /directoryRoles/{directoryRole-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directoryRoles/{directoryRole-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'directoryRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directoryRoles`
 *
 * List the directory roles that are activated in the tenant. This operation only returns roles that have been activated. A role becomes activated when an admin activates the role using the Activate directoryRole API. Not all built-in roles are initially activated.  When assigning a role using the Microsoft Entra admin center, the role activation step is implicitly done on the admin&#x27;s behalf. To get the full list of roles that are available in Microsoft Entra, use List directoryRoleTemplates.
 */
export function list(
  params?: IEndpoints['GET /directoryRoles']['parameters']
): EndpointRequest<IEndpoints['GET /directoryRoles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directoryRoles',
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
 * `GET /directoryRoles/{directoryRole-id}`
 *
 * Retrieve the properties of a directoryRole object. You can use both the object ID and template ID of the directoryRole with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Microsoft Entra admin center. For details, see Role template IDs.
 */
export function get(
  params?: IEndpoints['GET /directoryRoles/{directoryRole-id}']['parameters']
): EndpointRequest<IEndpoints['GET /directoryRoles/{directoryRole-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directoryRoles/{directoryRole-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryRole-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directoryRoles/{directoryRole-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directoryRoles/{directoryRole-id}']['body'],
  params?: IEndpoints['PATCH /directoryRoles/{directoryRole-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /directoryRoles/{directoryRole-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directoryRoles/{directoryRole-id}',
    paramDefs: [{ name: 'directoryRole-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directoryRoles`
 *
 * Activate a directory role. To read a directory role or update its members, it must first be activated in the tenant. The Company Administrators and the implicit user directory roles (User, Guest User, and Restricted Guest User roles) are activated by default. To access and assign members to other directory roles, you must first activate it with its corresponding directory role template ID.
 */
export function create(
  body: IEndpoints['POST /directoryRoles']['body'],
  params?: IEndpoints['POST /directoryRoles']['parameters']
): EndpointRequest<IEndpoints['POST /directoryRoles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryRoles',
    paramDefs: [],
    params,
    body,
  };
}
