import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/auditLog/queries/{auditLogQuery-id}': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}',
    'delete'
  >;
  'GET /security/auditLog/queries': Operation<'/security/auditLog/queries', 'get'>;
  'GET /security/auditLog/queries/{auditLogQuery-id}': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}',
    'get'
  >;
  'PATCH /security/auditLog/queries/{auditLogQuery-id}': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}',
    'patch'
  >;
  'POST /security/auditLog/queries': Operation<'/security/auditLog/queries', 'post'>;
  'GET /security/auditLog/queries/{auditLogQuery-id}/records': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}/records',
    'get'
  >;
  'POST /security/auditLog/queries/{auditLogQuery-id}/records': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}/records',
    'post'
  >;
  'GET /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}',
    'get'
  >;
  'PATCH /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}',
    'patch'
  >;
  'DELETE /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/auditLog/queries/{auditLogQuery-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/auditLog/queries/{auditLogQuery-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/auditLog/queries/{auditLogQuery-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/auditLog/queries/{auditLogQuery-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['auditLogQuery-id'],
    },
    params,
  };
}

/**
 * `GET /security/auditLog/queries`
 *
 * Get a list of auditLogQuery objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/auditLog/queries']['parameters']
): EndpointRequest<IEndpoints['GET /security/auditLog/queries']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/auditLog/queries',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/auditLog/queries/{auditLogQuery-id}`
 *
 * Read the properties and relationships of an auditLogQuery object.
 */
export function get(
  params?: IEndpoints['GET /security/auditLog/queries/{auditLogQuery-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/auditLog/queries/{auditLogQuery-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/auditLog/queries/{auditLogQuery-id}',
    paramDefs: {
      path: ['auditLogQuery-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/auditLog/queries/{auditLogQuery-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/auditLog/queries/{auditLogQuery-id}']['body'],
  params?: IEndpoints['PATCH /security/auditLog/queries/{auditLogQuery-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/auditLog/queries/{auditLogQuery-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/auditLog/queries/{auditLogQuery-id}',
    paramDefs: {
      path: ['auditLogQuery-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/auditLog/queries`
 *
 * Create a new auditLogQuery object.
 */
export function create(
  body: IEndpoints['POST /security/auditLog/queries']['body']
): EndpointRequest<IEndpoints['POST /security/auditLog/queries']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/auditLog/queries',
    body,
  };
}

export const records = {
  /**
   * `GET /security/auditLog/queries/{auditLogQuery-id}/records`
   *
   * Get a list of the auditLogRecord objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/auditLog/queries/{auditLogQuery-id}/records']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/auditLog/queries/{auditLogQuery-id}/records']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/auditLog/queries/{auditLogQuery-id}/records',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['auditLogQuery-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/auditLog/queries/{auditLogQuery-id}/records`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/auditLog/queries/{auditLogQuery-id}/records']['body'],
    params?: IEndpoints['POST /security/auditLog/queries/{auditLogQuery-id}/records']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/auditLog/queries/{auditLogQuery-id}/records']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/auditLog/queries/{auditLogQuery-id}/records',
      paramDefs: {
        path: ['auditLogQuery-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}`
   *
   * An individual audit log record.
   */
  get: function get(
    params?: IEndpoints['GET /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['auditLogQuery-id', 'auditLogRecord-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['body'],
    params?: IEndpoints['PATCH /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}',
      paramDefs: {
        path: ['auditLogQuery-id', 'auditLogRecord-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['auditLogQuery-id', 'auditLogRecord-id'],
      },
      params,
    };
  },
};
