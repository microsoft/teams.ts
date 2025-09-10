export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/informationProtection': Operation<'/security/informationProtection', 'delete'>;
  'GET /security/informationProtection': Operation<'/security/informationProtection', 'get'>;
  'PATCH /security/informationProtection': Operation<'/security/informationProtection', 'patch'>;
  'GET /security/informationProtection/labelPolicySettings': Operation<
    '/security/informationProtection/labelPolicySettings',
    'get'
  >;
  'PATCH /security/informationProtection/labelPolicySettings': Operation<
    '/security/informationProtection/labelPolicySettings',
    'patch'
  >;
  'DELETE /security/informationProtection/labelPolicySettings': Operation<
    '/security/informationProtection/labelPolicySettings',
    'delete'
  >;
}

/**
 * `DELETE /security/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/informationProtection']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/informationProtection',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /security/informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/informationProtection',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/informationProtection']['body']
): EndpointRequest<IEndpoints['PATCH /security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/informationProtection',
    body,
  };
}

export const labelPolicySettings = {
  /**
   * `GET /security/informationProtection/labelPolicySettings`
   *
   * Read the Microsoft Purview Information Protection policy settings for the user or organization.
   */
  list: function list(
    params?: IEndpoints['GET /security/informationProtection/labelPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/informationProtection/labelPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/informationProtection/labelPolicySettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/informationProtection/labelPolicySettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/informationProtection/labelPolicySettings']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /security/informationProtection/labelPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/informationProtection/labelPolicySettings',
      body,
    };
  },
  /**
   * `DELETE /security/informationProtection/labelPolicySettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/informationProtection/labelPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/informationProtection/labelPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/informationProtection/labelPolicySettings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
