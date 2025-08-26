import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/resource': Operation<
    '/governanceRoleDefinitions/{governanceRoleDefinition-id}/resource',
    'get'
  >;
}

/**
 * `GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/resource`
 *
 * Read-only. The associated resource for the role definition.
 */
export function get(
  params?: IEndpoints['GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/resource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleDefinitions/{governanceRoleDefinition-id}/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}
