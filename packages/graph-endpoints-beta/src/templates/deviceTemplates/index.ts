export * as createDeviceFromTemplate from './createDeviceFromTemplate';
export * as deviceInstances from './deviceInstances';
export * as owners from './owners';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /templates/deviceTemplates/{deviceTemplate-id}': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}',
    'delete'
  >;
  'GET /templates/deviceTemplates': Operation<'/templates/deviceTemplates', 'get'>;
  'GET /templates/deviceTemplates/{deviceTemplate-id}': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}',
    'get'
  >;
  'PATCH /templates/deviceTemplates/{deviceTemplate-id}': Operation<
    '/templates/deviceTemplates/{deviceTemplate-id}',
    'patch'
  >;
  'POST /templates/deviceTemplates': Operation<'/templates/deviceTemplates', 'post'>;
}

/**
 * `DELETE /templates/deviceTemplates/{deviceTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /templates/deviceTemplates/{deviceTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /templates/deviceTemplates/{deviceTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/templates/deviceTemplates/{deviceTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /templates/deviceTemplates`
 *
 * Defines the templates that are common to a set of device objects, such as IoT devices.
 */
export function list(
  params?: IEndpoints['GET /templates/deviceTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /templates/deviceTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/templates/deviceTemplates',
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
 * `GET /templates/deviceTemplates/{deviceTemplate-id}`
 *
 * Defines the templates that are common to a set of device objects, such as IoT devices.
 */
export function get(
  params?: IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['GET /templates/deviceTemplates/{deviceTemplate-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/templates/deviceTemplates/{deviceTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /templates/deviceTemplates/{deviceTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /templates/deviceTemplates/{deviceTemplate-id}']['body'],
  params?: IEndpoints['PATCH /templates/deviceTemplates/{deviceTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /templates/deviceTemplates/{deviceTemplate-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/templates/deviceTemplates/{deviceTemplate-id}',
    paramDefs: [{ name: 'deviceTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /templates/deviceTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /templates/deviceTemplates']['body'],
  params?: IEndpoints['POST /templates/deviceTemplates']['parameters']
): EndpointRequest<IEndpoints['POST /templates/deviceTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/templates/deviceTemplates',
    paramDefs: [],
    params,
    body,
  };
}
