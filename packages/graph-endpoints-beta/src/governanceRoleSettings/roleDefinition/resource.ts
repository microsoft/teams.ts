import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource',
    'get'
  >;
}

/**
 * `GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource`
 *
 * Read-only. The associated resource for the role definition.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}
