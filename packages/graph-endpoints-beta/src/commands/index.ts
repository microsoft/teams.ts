import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /commands/{command-id}': Operation<'/commands/{command-id}', 'delete'>;
  'GET /commands': Operation<'/commands', 'get'>;
  'GET /commands/{command-id}': Operation<'/commands/{command-id}', 'get'>;
  'PATCH /commands/{command-id}': Operation<'/commands/{command-id}', 'patch'>;
  'POST /commands': Operation<'/commands', 'post'>;
  'GET /commands/{command-id}/responsepayload': Operation<
    '/commands/{command-id}/responsepayload',
    'get'
  >;
}

/**
 * `DELETE /commands/{command-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /commands/{command-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /commands/{command-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/commands/{command-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['command-id'],
    },
    params,
  };
}

/**
 * `GET /commands`
 *
 */
export function list(
  params?: IEndpoints['GET /commands']['parameters']
): EndpointRequest<IEndpoints['GET /commands']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/commands',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /commands/{command-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /commands/{command-id}']['parameters']
): EndpointRequest<IEndpoints['GET /commands/{command-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/commands/{command-id}',
    paramDefs: {
      path: ['command-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /commands/{command-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /commands/{command-id}']['body'],
  params?: IEndpoints['PATCH /commands/{command-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /commands/{command-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/commands/{command-id}',
    paramDefs: {
      path: ['command-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /commands`
 *
 */
export function create(
  body: IEndpoints['POST /commands']['body']
): EndpointRequest<IEndpoints['POST /commands']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/commands',
    body,
  };
}

export const responsepayload = {
  /**
   * `GET /commands/{command-id}/responsepayload`
   *
   */
  get: function get(
    params?: IEndpoints['GET /commands/{command-id}/responsepayload']['parameters']
  ): EndpointRequest<IEndpoints['GET /commands/{command-id}/responsepayload']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/commands/{command-id}/responsepayload',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['command-id'],
      },
      params,
    };
  },
};
