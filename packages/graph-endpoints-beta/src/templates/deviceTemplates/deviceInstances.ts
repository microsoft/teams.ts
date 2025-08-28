import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances',
    'get'
  >;
  'GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}',
    'get'
  >;
}

/**
 * `GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances`
 *
 * Collection of device objects created based on this template.
 */
export function list(
  params?: IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances']['parameters']
): EndpointRequest<
  IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}`
 *
 * Collection of device objects created based on this template.
 */
export function get(
  params?: IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/templates/deviceTemplates/{deviceTemplate-id}/deviceInstances/{device-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceTemplate-id', in: 'path' },
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}
