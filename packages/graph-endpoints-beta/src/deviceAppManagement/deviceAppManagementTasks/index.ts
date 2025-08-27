export * as updateStatus from './updateStatus';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}': Operation<
    '/deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}',
    'delete'
  >;
  'GET /deviceAppManagement/deviceAppManagementTasks': Operation<
    '/deviceAppManagement/deviceAppManagementTasks',
    'get'
  >;
  'GET /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}': Operation<
    '/deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}': Operation<
    '/deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}',
    'patch'
  >;
  'POST /deviceAppManagement/deviceAppManagementTasks': Operation<
    '/deviceAppManagement/deviceAppManagementTasks',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceAppManagementTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/deviceAppManagementTasks`
 *
 * Device app management tasks.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/deviceAppManagementTasks']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/deviceAppManagementTasks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/deviceAppManagementTasks',
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
 * `GET /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}`
 *
 * Device app management tasks.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceAppManagementTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}',
    paramDefs: [{ name: 'deviceAppManagementTask-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/deviceAppManagementTasks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/deviceAppManagementTasks']['body'],
  params?: IEndpoints['POST /deviceAppManagement/deviceAppManagementTasks']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/deviceAppManagementTasks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/deviceAppManagementTasks',
    paramDefs: [],
    params,
    body,
  };
}
