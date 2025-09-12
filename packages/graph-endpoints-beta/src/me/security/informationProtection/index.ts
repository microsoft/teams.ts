export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/security/informationProtection': Operation<
    '/me/security/informationProtection',
    'delete'
  >;
  'GET /me/security/informationProtection': Operation<'/me/security/informationProtection', 'get'>;
  'PATCH /me/security/informationProtection': Operation<
    '/me/security/informationProtection',
    'patch'
  >;
  'GET /me/security/informationProtection/labelPolicySettings': Operation<
    '/me/security/informationProtection/labelPolicySettings',
    'get'
  >;
  'PATCH /me/security/informationProtection/labelPolicySettings': Operation<
    '/me/security/informationProtection/labelPolicySettings',
    'patch'
  >;
  'DELETE /me/security/informationProtection/labelPolicySettings': Operation<
    '/me/security/informationProtection/labelPolicySettings',
    'delete'
  >;
}

/**
 * `DELETE /me/security/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/security/informationProtection']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/security/informationProtection',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/security/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /me/security/informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /me/security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/security/informationProtection',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/security/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/security/informationProtection']['body']
): EndpointRequest<IEndpoints['PATCH /me/security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/security/informationProtection',
    body,
  };
}

export const labelPolicySettings = {
  /**
   * `GET /me/security/informationProtection/labelPolicySettings`
   *
   * Read the Microsoft Purview Information Protection policy settings for the user or organization.
   */
  list: function list(
    params?: IEndpoints['GET /me/security/informationProtection/labelPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/security/informationProtection/labelPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/security/informationProtection/labelPolicySettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/security/informationProtection/labelPolicySettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/security/informationProtection/labelPolicySettings']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /me/security/informationProtection/labelPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/security/informationProtection/labelPolicySettings',
      body,
    };
  },
  /**
   * `DELETE /me/security/informationProtection/labelPolicySettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/security/informationProtection/labelPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/security/informationProtection/labelPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/security/informationProtection/labelPolicySettings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
