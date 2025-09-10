import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/virtualEvents': Operation<'/users/{user-id}/virtualEvents', 'delete'>;
  'GET /users/{user-id}/virtualEvents': Operation<'/users/{user-id}/virtualEvents', 'get'>;
  'PATCH /users/{user-id}/virtualEvents': Operation<'/users/{user-id}/virtualEvents', 'patch'>;
  'GET /users/{user-id}/virtualEvents/webinars': Operation<
    '/users/{user-id}/virtualEvents/webinars',
    'get'
  >;
  'GET /users/{user-id}/virtualEvents/webinars/{virtualEventWebinar-id}': Operation<
    '/users/{user-id}/virtualEvents/webinars/{virtualEventWebinar-id}',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/virtualEvents`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/virtualEvents',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/virtualEvents`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/virtualEvents',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/virtualEvents`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/virtualEvents']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/virtualEvents',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const webinars = {
  /**
   * `GET /users/{user-id}/virtualEvents/webinars`
   *
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/virtualEvents/webinars']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/virtualEvents/webinars']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/virtualEvents/webinars',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/virtualEvents/webinars/{virtualEventWebinar-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/virtualEvents/webinars/{virtualEventWebinar-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'virtualEventWebinar-id'],
      },
      params,
    };
  },
};
