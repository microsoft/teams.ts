import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting',
    'get'
  >;
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting`
 *
 * The associated role setting for the role definition.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}
