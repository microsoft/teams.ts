import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/admin/settings': Operation<'/copilot/admin/settings', 'delete'>;
  'GET /copilot/admin/settings': Operation<'/copilot/admin/settings', 'get'>;
  'PATCH /copilot/admin/settings': Operation<'/copilot/admin/settings', 'patch'>;
  'GET /copilot/admin/settings/limitedMode': Operation<
    '/copilot/admin/settings/limitedMode',
    'get'
  >;
  'PATCH /copilot/admin/settings/limitedMode': Operation<
    '/copilot/admin/settings/limitedMode',
    'patch'
  >;
  'DELETE /copilot/admin/settings/limitedMode': Operation<
    '/copilot/admin/settings/limitedMode',
    'delete'
  >;
}

/**
 * `DELETE /copilot/admin/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/admin/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/admin/settings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/admin/settings',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /copilot/admin/settings`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/admin/settings']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/admin/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/admin/settings',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /copilot/admin/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/admin/settings']['body']
): EndpointRequest<IEndpoints['PATCH /copilot/admin/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/admin/settings',
    body,
  };
}

export const limitedMode = {
  /**
   * `GET /copilot/admin/settings/limitedMode`
   *
   */
  get: function get(
    params?: IEndpoints['GET /copilot/admin/settings/limitedMode']['parameters']
  ): EndpointRequest<IEndpoints['GET /copilot/admin/settings/limitedMode']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/copilot/admin/settings/limitedMode',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /copilot/admin/settings/limitedMode`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /copilot/admin/settings/limitedMode']['body']
  ): EndpointRequest<IEndpoints['PATCH /copilot/admin/settings/limitedMode']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/copilot/admin/settings/limitedMode',
      body,
    };
  },
  /**
   * `DELETE /copilot/admin/settings/limitedMode`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /copilot/admin/settings/limitedMode']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /copilot/admin/settings/limitedMode']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/copilot/admin/settings/limitedMode',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
