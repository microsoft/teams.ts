import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /templates/deviceTemplates/{deviceTemplate-id}/owners': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}/owners',
    'get'
  >;
  'GET /templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /templates/deviceTemplates/{deviceTemplate-id}/owners`
 *
 * Collection of directory objects that can manage the device template and the related deviceInstances. Owners can be represented as service principals, users, or applications. An owner has full privileges over the device template and doesn&#x27;t require other administrator roles to create, update, or delete devices from this template, as well as to add or remove template owners. There can be a maximum of 100 owners on a device template.  Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/owners']['parameters']
): EndpointRequest<
  IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/owners']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/templates/deviceTemplates/{deviceTemplate-id}/owners',
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
 * `GET /templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}`
 *
 * Collection of directory objects that can manage the device template and the related deviceInstances. Owners can be represented as service principals, users, or applications. An owner has full privileges over the device template and doesn&#x27;t require other administrator roles to create, update, or delete devices from this template, as well as to add or remove template owners. There can be a maximum of 100 owners on a device template.  Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/templates/deviceTemplates/{deviceTemplate-id}/owners/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceTemplate-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
