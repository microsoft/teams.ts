import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /identity/conditionalAccess/templates': Operation<
    '/identity/conditionalAccess/templates',
    'get'
  >;
  'GET /identity/conditionalAccess/templates/{conditionalAccessTemplate-id}': Operation<
    '/identity/conditionalAccess/templates/{conditionalAccessTemplate-id}',
    'get'
  >;
}

/**
 * `GET /identity/conditionalAccess/templates`
 *
 * Get a list of the conditionalAccessTemplate objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/templates']['parameters']
): EndpointRequest<IEndpoints['GET /identity/conditionalAccess/templates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/templates',
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
 * `GET /identity/conditionalAccess/templates/{conditionalAccessTemplate-id}`
 *
 * Read the properties and relationships of a conditionalAccessTemplate object.
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/templates/{conditionalAccessTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/templates/{conditionalAccessTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/templates/{conditionalAccessTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'conditionalAccessTemplate-id', in: 'path' },
    ],
    params,
  };
}
