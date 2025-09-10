export * as printerShares from './printerShares';
export * as printers from './printers';
export * as services from './services';
export * as shares from './shares';
export * as taskDefinitions from './taskDefinitions';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /print': Operation<'/print', 'get'>;
  'PATCH /print': Operation<'/print', 'patch'>;
  'GET /print/connectors': Operation<'/print/connectors', 'get'>;
  'POST /print/connectors': Operation<'/print/connectors', 'post'>;
  'GET /print/connectors/{printConnector-id}': Operation<
    '/print/connectors/{printConnector-id}',
    'get'
  >;
  'PATCH /print/connectors/{printConnector-id}': Operation<
    '/print/connectors/{printConnector-id}',
    'patch'
  >;
  'DELETE /print/connectors/{printConnector-id}': Operation<
    '/print/connectors/{printConnector-id}',
    'delete'
  >;
  'GET /print/operations': Operation<'/print/operations', 'get'>;
  'POST /print/operations': Operation<'/print/operations', 'post'>;
  'GET /print/operations/{printOperation-id}': Operation<
    '/print/operations/{printOperation-id}',
    'get'
  >;
  'PATCH /print/operations/{printOperation-id}': Operation<
    '/print/operations/{printOperation-id}',
    'patch'
  >;
  'DELETE /print/operations/{printOperation-id}': Operation<
    '/print/operations/{printOperation-id}',
    'delete'
  >;
}

/**
 * `GET /print`
 *
 */
export function get(
  params?: IEndpoints['GET /print']['parameters']
): EndpointRequest<IEndpoints['GET /print']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print`
 *
 */
export function update(
  body: IEndpoints['PATCH /print']['body']
): EndpointRequest<IEndpoints['PATCH /print']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print',
    body,
  };
}

export const connectors = {
  /**
   * `GET /print/connectors`
   *
   * Retrieve a list of print connectors.
   */
  list: function list(
    params?: IEndpoints['GET /print/connectors']['parameters']
  ): EndpointRequest<IEndpoints['GET /print/connectors']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/connectors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /print/connectors`
   *
   */
  create: function create(
    body: IEndpoints['POST /print/connectors']['body']
  ): EndpointRequest<IEndpoints['POST /print/connectors']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/connectors',
      body,
    };
  },
  /**
   * `GET /print/connectors/{printConnector-id}`
   *
   * Retrieve the properties and relationships of a printConnector object.
   */
  get: function get(
    params?: IEndpoints['GET /print/connectors/{printConnector-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /print/connectors/{printConnector-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/connectors/{printConnector-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printConnector-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /print/connectors/{printConnector-id}`
   *
   * Update the properties of a printConnector object.
   */
  update: function update(
    body: IEndpoints['PATCH /print/connectors/{printConnector-id}']['body'],
    params?: IEndpoints['PATCH /print/connectors/{printConnector-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /print/connectors/{printConnector-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/print/connectors/{printConnector-id}',
      paramDefs: {
        path: ['printConnector-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /print/connectors/{printConnector-id}`
   *
   * Delete (unregister) a printConnector.
   */
  del: function del(
    params?: IEndpoints['DELETE /print/connectors/{printConnector-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /print/connectors/{printConnector-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/print/connectors/{printConnector-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printConnector-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /print/operations`
   *
   * Retrieve the properties and relationships of a printOperation object.
   */
  list: function list(
    params?: IEndpoints['GET /print/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /print/operations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /print/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /print/operations']['body']
  ): EndpointRequest<IEndpoints['POST /print/operations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/print/operations',
      body,
    };
  },
  /**
   * `GET /print/operations/{printOperation-id}`
   *
   * Retrieve the properties and relationships of a printOperation object.
   */
  get: function get(
    params?: IEndpoints['GET /print/operations/{printOperation-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /print/operations/{printOperation-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/operations/{printOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /print/operations/{printOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /print/operations/{printOperation-id}']['body'],
    params?: IEndpoints['PATCH /print/operations/{printOperation-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /print/operations/{printOperation-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/print/operations/{printOperation-id}',
      paramDefs: {
        path: ['printOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /print/operations/{printOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /print/operations/{printOperation-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /print/operations/{printOperation-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/print/operations/{printOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printOperation-id'],
      },
      params,
    };
  },
};
