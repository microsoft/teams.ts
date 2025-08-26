export * as createDeviceFromTemplate from './createDeviceFromTemplate';
export * as deviceInstances from './deviceInstances';
export * as owners from './owners';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/templates/deviceTemplates/{deviceTemplate-id}': Operation<
    '/directory/templates/deviceTemplates/{deviceTemplate-id}',
    'delete'
  >;
  'GET /directory/templates/deviceTemplates': Operation<
    '/directory/templates/deviceTemplates',
    'get'
  >;
  'GET /directory/templates/deviceTemplates/{deviceTemplate-id}': Operation<
    '/directory/templates/deviceTemplates/{deviceTemplate-id}',
    'get'
  >;
  'PATCH /directory/templates/deviceTemplates/{deviceTemplate-id}': Operation<
    '/directory/templates/deviceTemplates/{deviceTemplate-id}',
    'patch'
  >;
  'POST /directory/templates/deviceTemplates': Operation<
    '/directory/templates/deviceTemplates',
    'post'
  >;
}

/**
 * `DELETE /directory/templates/deviceTemplates/{deviceTemplate-id}`
 *
 * Delete a registered deviceTemplate. You must first delete all devices linked to the template before deleting the template itself. Only registered owners of the template can perform this operation.
 */
export function del(
  params?: IEndpoints['DELETE /directory/templates/deviceTemplates/{deviceTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/templates/deviceTemplates/{deviceTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/templates/deviceTemplates/{deviceTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/templates/deviceTemplates`
 *
 * Get a list of deviceTemplate objects registered in the directory.
 */
export function list(
  params?: IEndpoints['GET /directory/templates/deviceTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /directory/templates/deviceTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/templates/deviceTemplates',
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
 * `GET /directory/templates/deviceTemplates/{deviceTemplate-id}`
 *
 * Get the properties and relationships of a deviceTemplate object.
 */
export function get(
  params?: IEndpoints['GET /directory/templates/deviceTemplates/{deviceTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/templates/deviceTemplates/{deviceTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/templates/deviceTemplates/{deviceTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/templates/deviceTemplates/{deviceTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/templates/deviceTemplates/{deviceTemplate-id}']['body'],
  params?: IEndpoints['PATCH /directory/templates/deviceTemplates/{deviceTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/templates/deviceTemplates/{deviceTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/templates/deviceTemplates/{deviceTemplate-id}',
    paramDefs: [{ name: 'deviceTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/templates/deviceTemplates`
 *
 * Create a new deviceTemplate used to identify attributes and manage a group of devices with similar characteristics.
 */
export function create(
  body: IEndpoints['POST /directory/templates/deviceTemplates']['body'],
  params?: IEndpoints['POST /directory/templates/deviceTemplates']['parameters']
): EndpointRequest<IEndpoints['POST /directory/templates/deviceTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/templates/deviceTemplates',
    paramDefs: [],
    params,
    body,
  };
}
