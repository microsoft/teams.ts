export * as userConfigurations from './userConfigurations';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/teams': Operation<'/admin/teams', 'delete'>;
  'GET /admin/teams': Operation<'/admin/teams', 'get'>;
  'PATCH /admin/teams': Operation<'/admin/teams', 'patch'>;
  'GET /admin/teams/policy': Operation<'/admin/teams/policy', 'get'>;
  'PATCH /admin/teams/policy': Operation<'/admin/teams/policy', 'patch'>;
  'DELETE /admin/teams/policy': Operation<'/admin/teams/policy', 'delete'>;
}

/**
 * `DELETE /admin/teams`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/teams']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/teams']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/teams',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/teams`
 *
 * A container for all Teams telephone number management functionalities and user configurations.
 */
export function list(
  params?: IEndpoints['GET /admin/teams']['parameters']
): EndpointRequest<IEndpoints['GET /admin/teams']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/teams',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/teams`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/teams']['body']
): EndpointRequest<IEndpoints['PATCH /admin/teams']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/teams',
    body,
  };
}

export const policy = {
  /**
   * `GET /admin/teams/policy`
   *
   */
  get: function get(
    params?: IEndpoints['GET /admin/teams/policy']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/teams/policy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/teams/policy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/teams/policy`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/teams/policy']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/teams/policy']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/teams/policy',
      body,
    };
  },
  /**
   * `DELETE /admin/teams/policy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/teams/policy']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/teams/policy']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/teams/policy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
