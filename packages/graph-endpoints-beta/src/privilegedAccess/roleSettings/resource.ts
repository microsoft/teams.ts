import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/resource': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/resource',
    'get'
  >;
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/resource`
 *
 * Read-only. The associated resource for this role setting.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/resource']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/resource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/resource',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}
