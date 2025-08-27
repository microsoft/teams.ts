import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource': Operation<
    '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource',
    'get'
  >;
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource`
 *
 * Read-only. The associated resource for the role definition.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}
