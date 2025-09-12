import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/users/{aiUser-id}': Operation<'/copilot/users/{aiUser-id}', 'delete'>;
  'GET /copilot/users': Operation<'/copilot/users', 'get'>;
  'GET /copilot/users/{aiUser-id}': Operation<'/copilot/users/{aiUser-id}', 'get'>;
  'PATCH /copilot/users/{aiUser-id}': Operation<'/copilot/users/{aiUser-id}', 'patch'>;
  'POST /copilot/users': Operation<'/copilot/users', 'post'>;
  'GET /copilot/users/{aiUser-id}/interactionHistory': Operation<
    '/copilot/users/{aiUser-id}/interactionHistory',
    'get'
  >;
  'PATCH /copilot/users/{aiUser-id}/interactionHistory': Operation<
    '/copilot/users/{aiUser-id}/interactionHistory',
    'patch'
  >;
  'DELETE /copilot/users/{aiUser-id}/interactionHistory': Operation<
    '/copilot/users/{aiUser-id}/interactionHistory',
    'delete'
  >;
}

/**
 * `DELETE /copilot/users/{aiUser-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/users/{aiUser-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/users/{aiUser-id}']['response']> {
  return {
    method: 'delete',
    path: '/copilot/users/{aiUser-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['aiUser-id'],
    },
    params,
  };
}

/**
 * `GET /copilot/users`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/users']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/users']['response']> {
  return {
    method: 'get',
    path: '/copilot/users',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /copilot/users/{aiUser-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/users/{aiUser-id}']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/users/{aiUser-id}']['response']> {
  return {
    method: 'get',
    path: '/copilot/users/{aiUser-id}',
    paramDefs: {
      path: ['aiUser-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /copilot/users/{aiUser-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/users/{aiUser-id}']['body'],
  params?: IEndpoints['PATCH /copilot/users/{aiUser-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /copilot/users/{aiUser-id}']['response']> {
  return {
    method: 'patch',
    path: '/copilot/users/{aiUser-id}',
    paramDefs: {
      path: ['aiUser-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /copilot/users`
 *
 */
export function create(
  body: IEndpoints['POST /copilot/users']['body']
): EndpointRequest<IEndpoints['POST /copilot/users']['response']> {
  return {
    method: 'post',
    path: '/copilot/users',
    body,
  };
}

export const interactionHistory = {
  /**
   * `GET /copilot/users/{aiUser-id}/interactionHistory`
   *
   */
  get: function get(
    params?: IEndpoints['GET /copilot/users/{aiUser-id}/interactionHistory']['parameters']
  ): EndpointRequest<IEndpoints['GET /copilot/users/{aiUser-id}/interactionHistory']['response']> {
    return {
      method: 'get',
      path: '/copilot/users/{aiUser-id}/interactionHistory',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['aiUser-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /copilot/users/{aiUser-id}/interactionHistory`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /copilot/users/{aiUser-id}/interactionHistory']['body'],
    params?: IEndpoints['PATCH /copilot/users/{aiUser-id}/interactionHistory']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /copilot/users/{aiUser-id}/interactionHistory']['response']
  > {
    return {
      method: 'patch',
      path: '/copilot/users/{aiUser-id}/interactionHistory',
      paramDefs: {
        path: ['aiUser-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /copilot/users/{aiUser-id}/interactionHistory`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /copilot/users/{aiUser-id}/interactionHistory']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /copilot/users/{aiUser-id}/interactionHistory']['response']
  > {
    return {
      method: 'delete',
      path: '/copilot/users/{aiUser-id}/interactionHistory',
      paramDefs: {
        header: ['If-Match'],
        path: ['aiUser-id'],
      },
      params,
    };
  },
};
