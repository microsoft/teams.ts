import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /governanceRoleSettings/{governanceRoleSetting-id}/resource': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}/resource',
    'get'
  >;
}

/**
 * `GET /governanceRoleSettings/{governanceRoleSetting-id}/resource`
 *
 * Read-only. The associated resource for this role setting.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/resource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleSettings/{governanceRoleSetting-id}/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}
