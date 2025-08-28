import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo': Operation<
    '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo',
    'get'
  >;
  'GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo/{directoryObject-id}': Operation<
    '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo`
 *
 * Get a list of directoryObject objects that a tokenLifetimePolicy object has been applied to. The tokenLifetimePolicy can only be applied to application and servicePrincipal resources.
 */
export function get(
  params?: IEndpoints['GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tokenLifetimePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo/{directoryObject-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}/appliesTo/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tokenLifetimePolicy-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
