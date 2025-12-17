export * as groups from './groups';
export * as items from './items';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/connections/{externalConnection-id}': Operation<
    '/external/connections/{externalConnection-id}',
    'delete'
  >;
  'GET /external/connections': Operation<'/external/connections', 'get'>;
  'GET /external/connections/{externalConnection-id}': Operation<
    '/external/connections/{externalConnection-id}',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}': Operation<
    '/external/connections/{externalConnection-id}',
    'patch'
  >;
  'POST /external/connections': Operation<'/external/connections', 'post'>;
  'GET /external/connections/{externalConnection-id}/operations': Operation<
    '/external/connections/{externalConnection-id}/operations',
    'get'
  >;
  'POST /external/connections/{externalConnection-id}/operations': Operation<
    '/external/connections/{externalConnection-id}/operations',
    'post'
  >;
  'GET /external/connections/{externalConnection-id}/operations/{connectionOperation-id}': Operation<
    '/external/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}/operations/{connectionOperation-id}': Operation<
    '/external/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    'patch'
  >;
  'DELETE /external/connections/{externalConnection-id}/operations/{connectionOperation-id}': Operation<
    '/external/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    'delete'
  >;
  'GET /external/connections/{externalConnection-id}/quota': Operation<
    '/external/connections/{externalConnection-id}/quota',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}/quota': Operation<
    '/external/connections/{externalConnection-id}/quota',
    'patch'
  >;
  'DELETE /external/connections/{externalConnection-id}/quota': Operation<
    '/external/connections/{externalConnection-id}/quota',
    'delete'
  >;
  'GET /external/connections/{externalConnection-id}/schema': Operation<
    '/external/connections/{externalConnection-id}/schema',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}/schema': Operation<
    '/external/connections/{externalConnection-id}/schema',
    'patch'
  >;
}

/**
 * `DELETE /external/connections/{externalConnection-id}`
 *
 * Delete an externalConnection.
 */
export function del(
  params?: IEndpoints['DELETE /external/connections/{externalConnection-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /external/connections/{externalConnection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/connections/{externalConnection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['externalConnection-id'],
    },
    params,
  };
}

/**
 * `GET /external/connections`
 *
 * Retrieve a list of externalConnections.
 */
export function list(
  params?: IEndpoints['GET /external/connections']['parameters']
): EndpointRequest<IEndpoints['GET /external/connections']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}`
 *
 * Retrieve the properties and relationships of an externalConnection.
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}']['parameters']
): EndpointRequest<IEndpoints['GET /external/connections/{externalConnection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}',
    paramDefs: {
      path: ['externalConnection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /external/connections/{externalConnection-id}`
 *
 * Update the properties of an externalConnection.
 */
export function update(
  body: IEndpoints['PATCH /external/connections/{externalConnection-id}']['body'],
  params?: IEndpoints['PATCH /external/connections/{externalConnection-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /external/connections/{externalConnection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/connections/{externalConnection-id}',
    paramDefs: {
      path: ['externalConnection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /external/connections`
 *
 * Create a new externalConnection.
 */
export function create(
  body: IEndpoints['POST /external/connections']['body']
): EndpointRequest<IEndpoints['POST /external/connections']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/connections',
    body,
  };
}

export const operations = {
  /**
   * `GET /external/connections/{externalConnection-id}/operations`
   *
   */
  list: function list(
    params?: IEndpoints['GET /external/connections/{externalConnection-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/connections/{externalConnection-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/connections/{externalConnection-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['externalConnection-id'],
      },
      params,
    };
  },
  /**
   * `POST /external/connections/{externalConnection-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /external/connections/{externalConnection-id}/operations']['body'],
    params?: IEndpoints['POST /external/connections/{externalConnection-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /external/connections/{externalConnection-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/external/connections/{externalConnection-id}/operations',
      paramDefs: {
        path: ['externalConnection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /external/connections/{externalConnection-id}/operations/{connectionOperation-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/connections/{externalConnection-id}/operations/{connectionOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['externalConnection-id', 'connectionOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /external/connections/{externalConnection-id}/operations/{connectionOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['body'],
    params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/external/connections/{externalConnection-id}/operations/{connectionOperation-id}',
      paramDefs: {
        path: ['externalConnection-id', 'connectionOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /external/connections/{externalConnection-id}/operations/{connectionOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/external/connections/{externalConnection-id}/operations/{connectionOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['externalConnection-id', 'connectionOperation-id'],
      },
      params,
    };
  },
};

export const quota = {
  /**
   * `GET /external/connections/{externalConnection-id}/quota`
   *
   * Retrieve the properties and relationships of a connectionQuota object.
   */
  get: function get(
    params?: IEndpoints['GET /external/connections/{externalConnection-id}/quota']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/connections/{externalConnection-id}/quota']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/connections/{externalConnection-id}/quota',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['externalConnection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /external/connections/{externalConnection-id}/quota`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /external/connections/{externalConnection-id}/quota']['body'],
    params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/quota']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /external/connections/{externalConnection-id}/quota']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/external/connections/{externalConnection-id}/quota',
      paramDefs: {
        path: ['externalConnection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /external/connections/{externalConnection-id}/quota`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /external/connections/{externalConnection-id}/quota']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /external/connections/{externalConnection-id}/quota']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/external/connections/{externalConnection-id}/quota',
      paramDefs: {
        header: ['If-Match'],
        path: ['externalConnection-id'],
      },
      params,
    };
  },
};

export const schema = {
  /**
   * `GET /external/connections/{externalConnection-id}/schema`
   *
   * Retrieve the properties of a schema for an externalConnection.
   */
  get: function get(
    params?: IEndpoints['GET /external/connections/{externalConnection-id}/schema']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/connections/{externalConnection-id}/schema']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/connections/{externalConnection-id}/schema',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['externalConnection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /external/connections/{externalConnection-id}/schema`
   *
   * Create a new or update an existing schema for a Microsoft Search connection.
   */
  update: function update(
    body: IEndpoints['PATCH /external/connections/{externalConnection-id}/schema']['body'],
    params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/schema']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /external/connections/{externalConnection-id}/schema']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/external/connections/{externalConnection-id}/schema',
      paramDefs: {
        path: ['externalConnection-id'],
      },
      params,
      body,
    };
  },
};
