import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting': Operation<
    '/governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting',
    'get'
  >;
}

/**
 * `GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting`
 *
 * The associated role setting for the role definition.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}
