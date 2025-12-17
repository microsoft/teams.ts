export * as authenticationMethods from './authenticationMethods';
export * as partners from './partners';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /reports': Operation<'/reports', 'get'>;
  'PATCH /reports': Operation<'/reports', 'patch'>;
  'GET /reports/dailyPrintUsageByPrinter': Operation<'/reports/dailyPrintUsageByPrinter', 'get'>;
  'POST /reports/dailyPrintUsageByPrinter': Operation<'/reports/dailyPrintUsageByPrinter', 'post'>;
  'GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'get'
  >;
  'PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'patch'
  >;
  'DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'delete'
  >;
  'GET /reports/dailyPrintUsageByUser': Operation<'/reports/dailyPrintUsageByUser', 'get'>;
  'POST /reports/dailyPrintUsageByUser': Operation<'/reports/dailyPrintUsageByUser', 'post'>;
  'GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
    'get'
  >;
  'PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
    'patch'
  >;
  'DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
    'delete'
  >;
  'GET /reports/monthlyPrintUsageByPrinter': Operation<
    '/reports/monthlyPrintUsageByPrinter',
    'get'
  >;
  'POST /reports/monthlyPrintUsageByPrinter': Operation<
    '/reports/monthlyPrintUsageByPrinter',
    'post'
  >;
  'GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'get'
  >;
  'PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'patch'
  >;
  'DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'delete'
  >;
  'GET /reports/monthlyPrintUsageByUser': Operation<'/reports/monthlyPrintUsageByUser', 'get'>;
  'POST /reports/monthlyPrintUsageByUser': Operation<'/reports/monthlyPrintUsageByUser', 'post'>;
  'GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
    'get'
  >;
  'PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
    'patch'
  >;
  'DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
    'delete'
  >;
  'GET /reports/security': Operation<'/reports/security', 'get'>;
  'PATCH /reports/security': Operation<'/reports/security', 'patch'>;
  'DELETE /reports/security': Operation<'/reports/security', 'delete'>;
}

/**
 * `GET /reports`
 *
 */
export function list(
  params?: IEndpoints['GET /reports']['parameters']
): EndpointRequest<IEndpoints['GET /reports']['response']> {
  return {
    method: 'get',
    path: '/reports',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /reports`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports']['body']
): EndpointRequest<IEndpoints['PATCH /reports']['response']> {
  return {
    method: 'patch',
    path: '/reports',
    body,
  };
}

export const dailyPrintUsageByPrinter = {
  /**
   * `GET /reports/dailyPrintUsageByPrinter`
   *
   * Retrieve a list of daily print usage summaries, grouped by printer.
   */
  get: function get(
    params?: IEndpoints['GET /reports/dailyPrintUsageByPrinter']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsageByPrinter']['response']> {
    return {
      method: 'get',
      path: '/reports/dailyPrintUsageByPrinter',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/dailyPrintUsageByPrinter`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/dailyPrintUsageByPrinter']['body']
  ): EndpointRequest<IEndpoints['POST /reports/dailyPrintUsageByPrinter']['response']> {
    return {
      method: 'post',
      path: '/reports/dailyPrintUsageByPrinter',
      body,
    };
  },
  /**
   * `GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}`
   *
   * Retrieve a usage summary for a printer for a particular time period. For descriptions of each of the endpoints, see printUsageByPrinter.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      method: 'get',
      path: '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsageByPrinter-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['body'],
    params?: IEndpoints['PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        path: ['printUsageByPrinter-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsageByPrinter-id'],
      },
      params,
    };
  },
};

export const dailyPrintUsageByUser = {
  /**
   * `GET /reports/dailyPrintUsageByUser`
   *
   * Retrieve a list of daily print usage summaries, grouped by user.
   */
  get: function get(
    params?: IEndpoints['GET /reports/dailyPrintUsageByUser']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsageByUser']['response']> {
    return {
      method: 'get',
      path: '/reports/dailyPrintUsageByUser',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/dailyPrintUsageByUser`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/dailyPrintUsageByUser']['body']
  ): EndpointRequest<IEndpoints['POST /reports/dailyPrintUsageByUser']['response']> {
    return {
      method: 'post',
      path: '/reports/dailyPrintUsageByUser',
      body,
    };
  },
  /**
   * `GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}`
   *
   * Retrieve a user&#x27;s usage summary for a particular time period. For descriptions of each endpoint, see printUsageByUser.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['response']
  > {
    return {
      method: 'get',
      path: '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsageByUser-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['body'],
    params?: IEndpoints['PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
      paramDefs: {
        path: ['printUsageByUser-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsageByUser-id'],
      },
      params,
    };
  },
};

export const monthlyPrintUsageByPrinter = {
  /**
   * `GET /reports/monthlyPrintUsageByPrinter`
   *
   * Retrieve a list of monthly print usage summaries, grouped by printer.
   */
  get: function get(
    params?: IEndpoints['GET /reports/monthlyPrintUsageByPrinter']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/monthlyPrintUsageByPrinter']['response']> {
    return {
      method: 'get',
      path: '/reports/monthlyPrintUsageByPrinter',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/monthlyPrintUsageByPrinter`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/monthlyPrintUsageByPrinter']['body']
  ): EndpointRequest<IEndpoints['POST /reports/monthlyPrintUsageByPrinter']['response']> {
    return {
      method: 'post',
      path: '/reports/monthlyPrintUsageByPrinter',
      body,
    };
  },
  /**
   * `GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}`
   *
   * Retrieve a list of monthly print usage summaries, grouped by printer.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      method: 'get',
      path: '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsageByPrinter-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['body'],
    params?: IEndpoints['PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        path: ['printUsageByPrinter-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsageByPrinter-id'],
      },
      params,
    };
  },
};

export const monthlyPrintUsageByUser = {
  /**
   * `GET /reports/monthlyPrintUsageByUser`
   *
   * Retrieve a list of monthly print usage summaries, grouped by user.
   */
  get: function get(
    params?: IEndpoints['GET /reports/monthlyPrintUsageByUser']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/monthlyPrintUsageByUser']['response']> {
    return {
      method: 'get',
      path: '/reports/monthlyPrintUsageByUser',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/monthlyPrintUsageByUser`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/monthlyPrintUsageByUser']['body']
  ): EndpointRequest<IEndpoints['POST /reports/monthlyPrintUsageByUser']['response']> {
    return {
      method: 'post',
      path: '/reports/monthlyPrintUsageByUser',
      body,
    };
  },
  /**
   * `GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}`
   *
   * Retrieve a list of monthly print usage summaries, grouped by user.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['response']
  > {
    return {
      method: 'get',
      path: '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsageByUser-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['body'],
    params?: IEndpoints['PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
      paramDefs: {
        path: ['printUsageByUser-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsageByUser-id'],
      },
      params,
    };
  },
};

export const security = {
  /**
   * `GET /reports/security`
   *
   * Represents an abstract type that contains resources for attack simulation and training reports.
   */
  get: function get(
    params?: IEndpoints['GET /reports/security']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/security']['response']> {
    return {
      method: 'get',
      path: '/reports/security',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/security`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/security']['body']
  ): EndpointRequest<IEndpoints['PATCH /reports/security']['response']> {
    return {
      method: 'patch',
      path: '/reports/security',
      body,
    };
  },
  /**
   * `DELETE /reports/security`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/security']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /reports/security']['response']> {
    return {
      method: 'delete',
      path: '/reports/security',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
