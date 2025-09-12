import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/entra': Operation<'/admin/entra', 'delete'>;
  'GET /admin/entra': Operation<'/admin/entra', 'get'>;
  'PATCH /admin/entra': Operation<'/admin/entra', 'patch'>;
  'GET /admin/entra/uxSetting': Operation<'/admin/entra/uxSetting', 'get'>;
  'PATCH /admin/entra/uxSetting': Operation<'/admin/entra/uxSetting', 'patch'>;
  'DELETE /admin/entra/uxSetting': Operation<'/admin/entra/uxSetting', 'delete'>;
}

/**
 * `DELETE /admin/entra`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/entra']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/entra']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/entra',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/entra`
 *
 * A container for Microsoft Entra resources. Read-only.
 */
export function get(
  params?: IEndpoints['GET /admin/entra']['parameters']
): EndpointRequest<IEndpoints['GET /admin/entra']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/entra',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/entra`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/entra']['body']
): EndpointRequest<IEndpoints['PATCH /admin/entra']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/entra',
    body,
  };
}

export const uxSetting = {
  /**
   * `GET /admin/entra/uxSetting`
   *
   * Get the properties and relationships of a uxSetting object.
   */
  get: function get(
    params?: IEndpoints['GET /admin/entra/uxSetting']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/entra/uxSetting']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/entra/uxSetting',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/entra/uxSetting`
   *
   * Update the properties of a uxSetting object.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/entra/uxSetting']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/entra/uxSetting']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/entra/uxSetting',
      body,
    };
  },
  /**
   * `DELETE /admin/entra/uxSetting`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/entra/uxSetting']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/entra/uxSetting']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/entra/uxSetting',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
