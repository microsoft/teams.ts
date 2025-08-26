import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting',
    'get'
  >;
}

/**
 * `GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting`
 *
 * The associated role setting for the role definition.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}
