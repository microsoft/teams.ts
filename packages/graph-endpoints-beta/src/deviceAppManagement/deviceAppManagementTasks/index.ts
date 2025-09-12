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
  'POST /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus': Operation<
    '/deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus',
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
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceAppManagementTask-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['deviceAppManagementTask-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['deviceAppManagementTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/deviceAppManagementTasks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/deviceAppManagementTasks']['body']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/deviceAppManagementTasks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/deviceAppManagementTasks',
    body,
  };
}

export const updateStatus = {
  /**
   * `POST /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus`
   *
   * Set the task&#x27;s status and attach a note.
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus']['body'],
    params?: IEndpoints['POST /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/deviceAppManagementTasks/{deviceAppManagementTask-id}/updateStatus',
      paramDefs: {
        path: ['deviceAppManagementTask-id'],
      },
      params,
      body,
    };
  },
};
