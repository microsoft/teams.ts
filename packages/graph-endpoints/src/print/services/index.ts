import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/services/{printService-id}': Operation<
    '/print/services/{printService-id}',
    'delete'
  >;
  'GET /print/services': Operation<'/print/services', 'get'>;
  'GET /print/services/{printService-id}': Operation<'/print/services/{printService-id}', 'get'>;
  'PATCH /print/services/{printService-id}': Operation<
    '/print/services/{printService-id}',
    'patch'
  >;
  'POST /print/services': Operation<'/print/services', 'post'>;
  'GET /print/services/{printService-id}/endpoints': Operation<
    '/print/services/{printService-id}/endpoints',
    'get'
  >;
  'POST /print/services/{printService-id}/endpoints': Operation<
    '/print/services/{printService-id}/endpoints',
    'post'
  >;
  'GET /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}': Operation<
    '/print/services/{printService-id}/endpoints/{printServiceEndpoint-id}',
    'get'
  >;
  'PATCH /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}': Operation<
    '/print/services/{printService-id}/endpoints/{printServiceEndpoint-id}',
    'patch'
  >;
  'DELETE /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}': Operation<
    '/print/services/{printService-id}/endpoints/{printServiceEndpoint-id}',
    'delete'
  >;
}

/**
 * `DELETE /print/services/{printService-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/services/{printService-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /print/services/{printService-id}']['response']> {
  return {
    method: 'delete',
    path: '/print/services/{printService-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printService-id'],
    },
    params,
  };
}

/**
 * `GET /print/services`
 *
 * Retrieve a list of printService objects that represent the services available to your tenant.
 */
export function list(
  params?: IEndpoints['GET /print/services']['parameters']
): EndpointRequest<IEndpoints['GET /print/services']['response']> {
  return {
    method: 'get',
    path: '/print/services',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/services/{printService-id}`
 *
 * Retrieve the properties and relationships of a print service.
 */
export function get(
  params?: IEndpoints['GET /print/services/{printService-id}']['parameters']
): EndpointRequest<IEndpoints['GET /print/services/{printService-id}']['response']> {
  return {
    method: 'get',
    path: '/print/services/{printService-id}',
    paramDefs: {
      path: ['printService-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/services/{printService-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/services/{printService-id}']['body'],
  params?: IEndpoints['PATCH /print/services/{printService-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /print/services/{printService-id}']['response']> {
  return {
    method: 'patch',
    path: '/print/services/{printService-id}',
    paramDefs: {
      path: ['printService-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/services`
 *
 */
export function create(
  body: IEndpoints['POST /print/services']['body']
): EndpointRequest<IEndpoints['POST /print/services']['response']> {
  return {
    method: 'post',
    path: '/print/services',
    body,
  };
}

export const endpoints = {
  /**
   * `GET /print/services/{printService-id}/endpoints`
   *
   * Retrieve a list of endpoints exposed by a print service.
   */
  list: function list(
    params?: IEndpoints['GET /print/services/{printService-id}/endpoints']['parameters']
  ): EndpointRequest<IEndpoints['GET /print/services/{printService-id}/endpoints']['response']> {
    return {
      method: 'get',
      path: '/print/services/{printService-id}/endpoints',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['printService-id'],
      },
      params,
    };
  },
  /**
   * `POST /print/services/{printService-id}/endpoints`
   *
   */
  create: function create(
    body: IEndpoints['POST /print/services/{printService-id}/endpoints']['body'],
    params?: IEndpoints['POST /print/services/{printService-id}/endpoints']['parameters']
  ): EndpointRequest<IEndpoints['POST /print/services/{printService-id}/endpoints']['response']> {
    return {
      method: 'post',
      path: '/print/services/{printService-id}/endpoints',
      paramDefs: {
        path: ['printService-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}`
   *
   * Retrieve the properties and relationships of a print service endpoint.
   */
  get: function get(
    params?: IEndpoints['GET /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['response']
  > {
    return {
      method: 'get',
      path: '/print/services/{printService-id}/endpoints/{printServiceEndpoint-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printService-id', 'printServiceEndpoint-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['body'],
    params?: IEndpoints['PATCH /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/print/services/{printService-id}/endpoints/{printServiceEndpoint-id}',
      paramDefs: {
        path: ['printService-id', 'printServiceEndpoint-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/print/services/{printService-id}/endpoints/{printServiceEndpoint-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printService-id', 'printServiceEndpoint-id'],
      },
      params,
    };
  },
};
