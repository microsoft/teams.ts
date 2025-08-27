import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/categories',
    'get'
  >;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}',
    'get'
  >;
}

/**
 * `GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories`
 *
 * The list of categories for this app.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/categories',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}`
 *
 * The list of categories for this app.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}/categories/{mobileAppCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileApp-id', in: 'path' },
      { name: 'mobileAppCategory-id', in: 'path' },
    ],
    params,
  };
}
