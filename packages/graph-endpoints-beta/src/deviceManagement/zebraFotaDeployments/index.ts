import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}': Operation<
    '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}',
    'delete'
  >;
  'GET /deviceManagement/zebraFotaDeployments': Operation<
    '/deviceManagement/zebraFotaDeployments',
    'get'
  >;
  'GET /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}': Operation<
    '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}',
    'get'
  >;
  'PATCH /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}': Operation<
    '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}',
    'patch'
  >;
  'POST /deviceManagement/zebraFotaDeployments': Operation<
    '/deviceManagement/zebraFotaDeployments',
    'post'
  >;
  'POST /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel': Operation<
    '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['zebraFotaDeployment-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/zebraFotaDeployments`
 *
 * Collection of ZebraFotaDeployments associated with account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/zebraFotaDeployments']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/zebraFotaDeployments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/zebraFotaDeployments',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}`
 *
 * Collection of ZebraFotaDeployments associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}',
    paramDefs: {
      path: ['zebraFotaDeployment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}',
    paramDefs: {
      path: ['zebraFotaDeployment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/zebraFotaDeployments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/zebraFotaDeployments']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/zebraFotaDeployments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/zebraFotaDeployments',
    body,
  };
}

export const cancel = {
  /**
   * `POST /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel',
      paramDefs: {
        path: ['zebraFotaDeployment-id'],
      },
      params,
    };
  },
};
