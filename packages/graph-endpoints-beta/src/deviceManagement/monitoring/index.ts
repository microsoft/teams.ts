import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/monitoring': Operation<'/deviceManagement/monitoring', 'delete'>;
  'GET /deviceManagement/monitoring': Operation<'/deviceManagement/monitoring', 'get'>;
  'PATCH /deviceManagement/monitoring': Operation<'/deviceManagement/monitoring', 'patch'>;
  'GET /deviceManagement/monitoring/alertRecords': Operation<
    '/deviceManagement/monitoring/alertRecords',
    'get'
  >;
  'POST /deviceManagement/monitoring/alertRecords': Operation<
    '/deviceManagement/monitoring/alertRecords',
    'post'
  >;
  'GET /deviceManagement/monitoring/alertRecords/{alertRecord-id}': Operation<
    '/deviceManagement/monitoring/alertRecords/{alertRecord-id}',
    'get'
  >;
  'PATCH /deviceManagement/monitoring/alertRecords/{alertRecord-id}': Operation<
    '/deviceManagement/monitoring/alertRecords/{alertRecord-id}',
    'patch'
  >;
  'DELETE /deviceManagement/monitoring/alertRecords/{alertRecord-id}': Operation<
    '/deviceManagement/monitoring/alertRecords/{alertRecord-id}',
    'delete'
  >;
  'GET /deviceManagement/monitoring/alertRules': Operation<
    '/deviceManagement/monitoring/alertRules',
    'get'
  >;
  'POST /deviceManagement/monitoring/alertRules': Operation<
    '/deviceManagement/monitoring/alertRules',
    'post'
  >;
  'GET /deviceManagement/monitoring/alertRules/{alertRule-id}': Operation<
    '/deviceManagement/monitoring/alertRules/{alertRule-id}',
    'get'
  >;
  'PATCH /deviceManagement/monitoring/alertRules/{alertRule-id}': Operation<
    '/deviceManagement/monitoring/alertRules/{alertRule-id}',
    'patch'
  >;
  'DELETE /deviceManagement/monitoring/alertRules/{alertRule-id}': Operation<
    '/deviceManagement/monitoring/alertRules/{alertRule-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/monitoring`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/monitoring']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/monitoring']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/monitoring',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/monitoring`
 *
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/monitoring']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/monitoring']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/monitoring',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/monitoring`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/monitoring']['body']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/monitoring']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/monitoring',
    body,
  };
}

export const alertRecords = {
  /**
   * `GET /deviceManagement/monitoring/alertRecords`
   *
   * Get a list of the alertRecord objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/monitoring/alertRecords']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/monitoring/alertRecords']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/monitoring/alertRecords',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/monitoring/alertRecords`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/monitoring/alertRecords']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/monitoring/alertRecords']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/monitoring/alertRecords',
      body,
    };
  },
  /**
   * `GET /deviceManagement/monitoring/alertRecords/{alertRecord-id}`
   *
   * Read the properties and relationships of an alertRecord object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/monitoring/alertRecords/{alertRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['alertRecord-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/monitoring/alertRecords/{alertRecord-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/monitoring/alertRecords/{alertRecord-id}',
      paramDefs: {
        path: ['alertRecord-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/monitoring/alertRecords/{alertRecord-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/monitoring/alertRecords/{alertRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/monitoring/alertRecords/{alertRecord-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['alertRecord-id'],
      },
      params,
    };
  },
};

export const alertRules = {
  /**
   * `GET /deviceManagement/monitoring/alertRules`
   *
   * Get a list of the alertRule objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/monitoring/alertRules']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/monitoring/alertRules']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/monitoring/alertRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/monitoring/alertRules`
   *
   * Create an alertRule object.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/monitoring/alertRules']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/monitoring/alertRules']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/monitoring/alertRules',
      body,
    };
  },
  /**
   * `GET /deviceManagement/monitoring/alertRules/{alertRule-id}`
   *
   * Read the properties and relationships of an alertRule object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/monitoring/alertRules/{alertRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/monitoring/alertRules/{alertRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/monitoring/alertRules/{alertRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['alertRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/monitoring/alertRules/{alertRule-id}`
   *
   * Update the properties of an alertRule object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/monitoring/alertRules/{alertRule-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/monitoring/alertRules/{alertRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/monitoring/alertRules/{alertRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/monitoring/alertRules/{alertRule-id}',
      paramDefs: {
        path: ['alertRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/monitoring/alertRules/{alertRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/monitoring/alertRules/{alertRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/monitoring/alertRules/{alertRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/monitoring/alertRules/{alertRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['alertRule-id'],
      },
      params,
    };
  },
};
