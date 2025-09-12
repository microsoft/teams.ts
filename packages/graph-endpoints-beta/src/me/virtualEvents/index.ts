import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/virtualEvents': Operation<'/me/virtualEvents', 'delete'>;
  'GET /me/virtualEvents': Operation<'/me/virtualEvents', 'get'>;
  'PATCH /me/virtualEvents': Operation<'/me/virtualEvents', 'patch'>;
  'GET /me/virtualEvents/webinars': Operation<'/me/virtualEvents/webinars', 'get'>;
  'GET /me/virtualEvents/webinars/{virtualEventWebinar-id}': Operation<
    '/me/virtualEvents/webinars/{virtualEventWebinar-id}',
    'get'
  >;
}

/**
 * `DELETE /me/virtualEvents`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/virtualEvents',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/virtualEvents`
 *
 */
export function list(
  params?: IEndpoints['GET /me/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['GET /me/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/virtualEvents',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/virtualEvents`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/virtualEvents']['body']
): EndpointRequest<IEndpoints['PATCH /me/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/virtualEvents',
    body,
  };
}

export const webinars = {
  /**
   * `GET /me/virtualEvents/webinars`
   *
   */
  list: function list(
    params?: IEndpoints['GET /me/virtualEvents/webinars']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/virtualEvents/webinars']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/virtualEvents/webinars',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/virtualEvents/webinars/{virtualEventWebinar-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/virtualEvents/webinars/{virtualEventWebinar-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/virtualEvents/webinars/{virtualEventWebinar-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/virtualEvents/webinars/{virtualEventWebinar-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['virtualEventWebinar-id'],
      },
      params,
    };
  },
};
