export * as instantiate from './instantiate';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /applicationTemplates': Operation<'/applicationTemplates', 'get'>;
  'GET /applicationTemplates/{applicationTemplate-id}': Operation<
    '/applicationTemplates/{applicationTemplate-id}',
    'get'
  >;
}

/**
 * `GET /applicationTemplates`
 *
 * Retrieve a list of applicationTemplate objects from the Microsoft Entra application gallery.
 */
export function list(
  params?: IEndpoints['GET /applicationTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /applicationTemplates']['response']> {
  return {
    method: 'get',
    path: '/applicationTemplates',
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
 * `GET /applicationTemplates/{applicationTemplate-id}`
 *
 * Retrieve the properties of an applicationTemplate object.
 */
export function get(
  params?: IEndpoints['GET /applicationTemplates/{applicationTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['GET /applicationTemplates/{applicationTemplate-id}']['response']> {
  return {
    method: 'get',
    path: '/applicationTemplates/{applicationTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'applicationTemplate-id', in: 'path' },
    ],
    params,
  };
}
