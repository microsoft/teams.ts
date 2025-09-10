export * as groups from './groups';
export * as items from './items';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /connections/{externalConnection-id}': Operation<
    '/connections/{externalConnection-id}',
    'delete'
  >;
  'GET /connections': Operation<'/connections', 'get'>;
  'GET /connections/{externalConnection-id}': Operation<
    '/connections/{externalConnection-id}',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}': Operation<
    '/connections/{externalConnection-id}',
    'patch'
  >;
  'POST /connections': Operation<'/connections', 'post'>;
  'GET /connections/{externalConnection-id}/operations': Operation<
    '/connections/{externalConnection-id}/operations',
    'get'
  >;
  'POST /connections/{externalConnection-id}/operations': Operation<
    '/connections/{externalConnection-id}/operations',
    'post'
  >;
  'GET /connections/{externalConnection-id}/operations/{connectionOperation-id}': Operation<
    '/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}/operations/{connectionOperation-id}': Operation<
    '/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    'patch'
  >;
  'DELETE /connections/{externalConnection-id}/operations/{connectionOperation-id}': Operation<
    '/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    'delete'
  >;
  'GET /connections/{externalConnection-id}/schema': Operation<
    '/connections/{externalConnection-id}/schema',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}/schema': Operation<
    '/connections/{externalConnection-id}/schema',
    'patch'
  >;
}

/**
 * `DELETE /connections/{externalConnection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /connections/{externalConnection-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /connections/{externalConnection-id}']['response']> {
  return {
    method: 'delete',
    path: '/connections/{externalConnection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['externalConnection-id'],
    },
    params,
  };
}

/**
 * `GET /connections`
 *
 */
export function list(
  params?: IEndpoints['GET /connections']['parameters']
): EndpointRequest<IEndpoints['GET /connections']['response']> {
  return {
    method: 'get',
    path: '/connections',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /connections/{externalConnection-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /connections/{externalConnection-id}']['parameters']
): EndpointRequest<IEndpoints['GET /connections/{externalConnection-id}']['response']> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}',
    paramDefs: {
      path: ['externalConnection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /connections/{externalConnection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /connections/{externalConnection-id}']['body'],
  params?: IEndpoints['PATCH /connections/{externalConnection-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /connections/{externalConnection-id}']['response']> {
  return {
    method: 'patch',
    path: '/connections/{externalConnection-id}',
    paramDefs: {
      path: ['externalConnection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /connections`
 *
 */
export function create(
  body: IEndpoints['POST /connections']['body']
): EndpointRequest<IEndpoints['POST /connections']['response']> {
  return {
    method: 'post',
    path: '/connections',
    body,
  };
}

export const operations = {
  /**
   * `GET /connections/{externalConnection-id}/operations`
   *
   */
  list: function list(
    params?: IEndpoints['GET /connections/{externalConnection-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /connections/{externalConnection-id}/operations']['response']
  > {
    return {
      method: 'get',
      path: '/connections/{externalConnection-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['externalConnection-id'],
      },
      params,
    };
  },
  /**
   * `POST /connections/{externalConnection-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /connections/{externalConnection-id}/operations']['body'],
    params?: IEndpoints['POST /connections/{externalConnection-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /connections/{externalConnection-id}/operations']['response']
  > {
    return {
      method: 'post',
      path: '/connections/{externalConnection-id}/operations',
      paramDefs: {
        path: ['externalConnection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /connections/{externalConnection-id}/operations/{connectionOperation-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /connections/{externalConnection-id}/operations/{connectionOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /connections/{externalConnection-id}/operations/{connectionOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/connections/{externalConnection-id}/operations/{connectionOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['externalConnection-id', 'connectionOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /connections/{externalConnection-id}/operations/{connectionOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /connections/{externalConnection-id}/operations/{connectionOperation-id}']['body'],
    params?: IEndpoints['PATCH /connections/{externalConnection-id}/operations/{connectionOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /connections/{externalConnection-id}/operations/{connectionOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/connections/{externalConnection-id}/operations/{connectionOperation-id}',
      paramDefs: {
        path: ['externalConnection-id', 'connectionOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /connections/{externalConnection-id}/operations/{connectionOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /connections/{externalConnection-id}/operations/{connectionOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /connections/{externalConnection-id}/operations/{connectionOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/connections/{externalConnection-id}/operations/{connectionOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['externalConnection-id', 'connectionOperation-id'],
      },
      params,
    };
  },
};

export const schema = {
  /**
   * `GET /connections/{externalConnection-id}/schema`
   *
   */
  get: function get(
    params?: IEndpoints['GET /connections/{externalConnection-id}/schema']['parameters']
  ): EndpointRequest<IEndpoints['GET /connections/{externalConnection-id}/schema']['response']> {
    return {
      method: 'get',
      path: '/connections/{externalConnection-id}/schema',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['externalConnection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /connections/{externalConnection-id}/schema`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /connections/{externalConnection-id}/schema']['body'],
    params?: IEndpoints['PATCH /connections/{externalConnection-id}/schema']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /connections/{externalConnection-id}/schema']['response']> {
    return {
      method: 'patch',
      path: '/connections/{externalConnection-id}/schema',
      paramDefs: {
        path: ['externalConnection-id'],
      },
      params,
      body,
    };
  },
};
