import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/zebraFotaConnector': Operation<
    '/deviceManagement/zebraFotaConnector',
    'delete'
  >;
  'GET /deviceManagement/zebraFotaConnector': Operation<
    '/deviceManagement/zebraFotaConnector',
    'get'
  >;
  'PATCH /deviceManagement/zebraFotaConnector': Operation<
    '/deviceManagement/zebraFotaConnector',
    'patch'
  >;
  'POST /deviceManagement/zebraFotaConnector/approveFotaApps': Operation<
    '/deviceManagement/zebraFotaConnector/approveFotaApps',
    'post'
  >;
  'POST /deviceManagement/zebraFotaConnector/connect': Operation<
    '/deviceManagement/zebraFotaConnector/connect',
    'post'
  >;
  'POST /deviceManagement/zebraFotaConnector/disconnect': Operation<
    '/deviceManagement/zebraFotaConnector/disconnect',
    'post'
  >;
  'POST /deviceManagement/zebraFotaConnector/hasActiveDeployments': Operation<
    '/deviceManagement/zebraFotaConnector/hasActiveDeployments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/zebraFotaConnector`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/zebraFotaConnector']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/zebraFotaConnector']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/zebraFotaConnector',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/zebraFotaConnector`
 *
 * The singleton ZebraFotaConnector associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/zebraFotaConnector']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/zebraFotaConnector']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/zebraFotaConnector',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/zebraFotaConnector`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/zebraFotaConnector']['body']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/zebraFotaConnector']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/zebraFotaConnector',
    body,
  };
}

export const approveFotaApps = {
  /**
   * `POST /deviceManagement/zebraFotaConnector/approveFotaApps`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/zebraFotaConnector/approveFotaApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/zebraFotaConnector/approveFotaApps',
    };
  },
};

export const connect = {
  /**
   * `POST /deviceManagement/zebraFotaConnector/connect`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/zebraFotaConnector/connect']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/zebraFotaConnector/connect',
    };
  },
};

export const disconnect = {
  /**
   * `POST /deviceManagement/zebraFotaConnector/disconnect`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/zebraFotaConnector/disconnect']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/zebraFotaConnector/disconnect',
    };
  },
};

export const hasActiveDeployments = {
  /**
   * `POST /deviceManagement/zebraFotaConnector/hasActiveDeployments`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/zebraFotaConnector/hasActiveDeployments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/zebraFotaConnector/hasActiveDeployments',
    };
  },
};
