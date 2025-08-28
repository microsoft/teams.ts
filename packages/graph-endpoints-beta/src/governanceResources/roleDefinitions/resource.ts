import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource',
    'get'
  >;
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource`
 *
 * Read-only. The associated resource for the role definition.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}
