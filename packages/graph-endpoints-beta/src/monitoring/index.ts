import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /monitoring': Operation<'/monitoring', 'get'>;
  'PATCH /monitoring': Operation<'/monitoring', 'patch'>;
  'GET /monitoring/alertRecords': Operation<'/monitoring/alertRecords', 'get'>;
  'POST /monitoring/alertRecords': Operation<'/monitoring/alertRecords', 'post'>;
  'GET /monitoring/alertRecords/{alertRecord-id}': Operation<
    '/monitoring/alertRecords/{alertRecord-id}',
    'get'
  >;
  'PATCH /monitoring/alertRecords/{alertRecord-id}': Operation<
    '/monitoring/alertRecords/{alertRecord-id}',
    'patch'
  >;
  'DELETE /monitoring/alertRecords/{alertRecord-id}': Operation<
    '/monitoring/alertRecords/{alertRecord-id}',
    'delete'
  >;
  'GET /monitoring/alertRules': Operation<'/monitoring/alertRules', 'get'>;
  'POST /monitoring/alertRules': Operation<'/monitoring/alertRules', 'post'>;
  'GET /monitoring/alertRules/{alertRule-id}': Operation<
    '/monitoring/alertRules/{alertRule-id}',
    'get'
  >;
  'PATCH /monitoring/alertRules/{alertRule-id}': Operation<
    '/monitoring/alertRules/{alertRule-id}',
    'patch'
  >;
  'DELETE /monitoring/alertRules/{alertRule-id}': Operation<
    '/monitoring/alertRules/{alertRule-id}',
    'delete'
  >;
}

/**
 * `GET /monitoring`
 *
 */
export function get(
  params?: IEndpoints['GET /monitoring']['parameters']
): EndpointRequest<IEndpoints['GET /monitoring']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/monitoring',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /monitoring`
 *
 */
export function update(
  body: IEndpoints['PATCH /monitoring']['body']
): EndpointRequest<IEndpoints['PATCH /monitoring']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/monitoring',
    body,
  };
}

export const alertRecords = {
  /**
   * `GET /monitoring/alertRecords`
   *
   * The collection of records of alert events.
   */
  list: function list(
    params?: IEndpoints['GET /monitoring/alertRecords']['parameters']
  ): EndpointRequest<IEndpoints['GET /monitoring/alertRecords']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/monitoring/alertRecords',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /monitoring/alertRecords`
   *
   */
  create: function create(
    body: IEndpoints['POST /monitoring/alertRecords']['body']
  ): EndpointRequest<IEndpoints['POST /monitoring/alertRecords']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/monitoring/alertRecords',
      body,
    };
  },
  /**
   * `GET /monitoring/alertRecords/{alertRecord-id}`
   *
   * The collection of records of alert events.
   */
  get: function get(
    params?: IEndpoints['GET /monitoring/alertRecords/{alertRecord-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /monitoring/alertRecords/{alertRecord-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/monitoring/alertRecords/{alertRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['alertRecord-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /monitoring/alertRecords/{alertRecord-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /monitoring/alertRecords/{alertRecord-id}']['body'],
    params?: IEndpoints['PATCH /monitoring/alertRecords/{alertRecord-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /monitoring/alertRecords/{alertRecord-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/monitoring/alertRecords/{alertRecord-id}',
      paramDefs: {
        path: ['alertRecord-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /monitoring/alertRecords/{alertRecord-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /monitoring/alertRecords/{alertRecord-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /monitoring/alertRecords/{alertRecord-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/monitoring/alertRecords/{alertRecord-id}',
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
   * `GET /monitoring/alertRules`
   *
   * The collection of alert rules.
   */
  list: function list(
    params?: IEndpoints['GET /monitoring/alertRules']['parameters']
  ): EndpointRequest<IEndpoints['GET /monitoring/alertRules']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/monitoring/alertRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /monitoring/alertRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /monitoring/alertRules']['body']
  ): EndpointRequest<IEndpoints['POST /monitoring/alertRules']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/monitoring/alertRules',
      body,
    };
  },
  /**
   * `GET /monitoring/alertRules/{alertRule-id}`
   *
   * The collection of alert rules.
   */
  get: function get(
    params?: IEndpoints['GET /monitoring/alertRules/{alertRule-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /monitoring/alertRules/{alertRule-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/monitoring/alertRules/{alertRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['alertRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /monitoring/alertRules/{alertRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /monitoring/alertRules/{alertRule-id}']['body'],
    params?: IEndpoints['PATCH /monitoring/alertRules/{alertRule-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /monitoring/alertRules/{alertRule-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/monitoring/alertRules/{alertRule-id}',
      paramDefs: {
        path: ['alertRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /monitoring/alertRules/{alertRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /monitoring/alertRules/{alertRule-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /monitoring/alertRules/{alertRule-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/monitoring/alertRules/{alertRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['alertRule-id'],
      },
      params,
    };
  },
};
