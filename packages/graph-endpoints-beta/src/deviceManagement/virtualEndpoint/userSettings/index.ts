export * as assign from './assign';
export * as assignments from './assignments';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/userSettings': Operation<
    '/deviceManagement/virtualEndpoint/userSettings',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}': Operation<
    '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/userSettings': Operation<
    '/deviceManagement/virtualEndpoint/userSettings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}`
 *
 * Delete a cloudPcUserSetting object.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcUserSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/userSettings`
 *
 * Retrieve a list of cloudPcUserSetting objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/userSettings',
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
 * `GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}`
 *
 * Read the properties and relationships of a cloudPcUserSetting object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcUserSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}`
 *
 * Update the properties of a cloudPcUserSetting object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/userSettings/{cloudPcUserSetting-id}',
    paramDefs: [{ name: 'cloudPcUserSetting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/userSettings`
 *
 * Create a new cloudPcUserSetting object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/userSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/userSettings',
    paramDefs: [],
    params,
    body,
  };
}
