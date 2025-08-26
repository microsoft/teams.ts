export * as resource from './resource';
export * as roleSetting from './roleSetting';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition',
    'delete'
  >;
  'GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition',
    'get'
  >;
  'PATCH /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition',
    'patch'
  >;
}

/**
 * `DELETE /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition`
 *
 * Read-only. The role definition that is enforced with this role setting.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['body'],
  params?: IEndpoints['PATCH /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition',
    paramDefs: [{ name: 'governanceRoleSetting-id', in: 'path' }],
    params,
    body,
  };
}
