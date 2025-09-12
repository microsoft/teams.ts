export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/security/informationProtection': Operation<
    '/users/{user-id}/security/informationProtection',
    'delete'
  >;
  'GET /users/{user-id}/security/informationProtection': Operation<
    '/users/{user-id}/security/informationProtection',
    'get'
  >;
  'PATCH /users/{user-id}/security/informationProtection': Operation<
    '/users/{user-id}/security/informationProtection',
    'patch'
  >;
  'GET /users/{user-id}/security/informationProtection/labelPolicySettings': Operation<
    '/users/{user-id}/security/informationProtection/labelPolicySettings',
    'get'
  >;
  'PATCH /users/{user-id}/security/informationProtection/labelPolicySettings': Operation<
    '/users/{user-id}/security/informationProtection/labelPolicySettings',
    'patch'
  >;
  'DELETE /users/{user-id}/security/informationProtection/labelPolicySettings': Operation<
    '/users/{user-id}/security/informationProtection/labelPolicySettings',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/security/informationProtection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/security/informationProtection']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/security/informationProtection']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/security/informationProtection',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/security/informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/security/informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/security/informationProtection']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/security/informationProtection',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/security/informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/security/informationProtection']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/security/informationProtection']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/security/informationProtection']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/security/informationProtection',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const labelPolicySettings = {
  /**
   * `GET /users/{user-id}/security/informationProtection/labelPolicySettings`
   *
   * Read the properties and relationships of an informationProtectionPolicySetting object. The settings exposed by this API should be used in applications to populate the moreInfoUrl property for Microsoft Purview Information Protection help, and indicate whether labeling is mandatory for the user and whether justification must be provided on downgrade.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/security/informationProtection/labelPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/security/informationProtection/labelPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/security/informationProtection/labelPolicySettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/security/informationProtection/labelPolicySettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/security/informationProtection/labelPolicySettings']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/security/informationProtection/labelPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/security/informationProtection/labelPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/security/informationProtection/labelPolicySettings',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/security/informationProtection/labelPolicySettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/security/informationProtection/labelPolicySettings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/security/informationProtection/labelPolicySettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/security/informationProtection/labelPolicySettings',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id'],
      },
      params,
    };
  },
};
