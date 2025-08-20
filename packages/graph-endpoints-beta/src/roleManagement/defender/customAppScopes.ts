import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/defender/customAppScopes': Operation<
    '/roleManagement/defender/customAppScopes',
    'get'
  >;
  'GET /roleManagement/defender/customAppScopes/{customAppScope-id}': Operation<
    '/roleManagement/defender/customAppScopes/{customAppScope-id}',
    'get'
  >;
}

/**
 * `GET /roleManagement/defender/customAppScopes`
 *
 * Get a list of customAppScope objects for an RBAC provider. Only the Microsoft Defender XDR Unified RBAC provider is supported.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/defender/customAppScopes']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/defender/customAppScopes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/customAppScopes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/defender/customAppScopes/{customAppScope-id}`
 *
 * Represents the resources that the principal has been granted access.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/defender/customAppScopes/{customAppScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/defender/customAppScopes/{customAppScope-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/customAppScopes/{customAppScope-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'customAppScope-id', in: 'path' },
    ],
    params,
  };
}
