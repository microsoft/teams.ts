import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/dataSecurityAndGovernance/protectionScopes': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/protectionScopes',
    'delete'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/protectionScopes': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/protectionScopes',
    'get'
  >;
  'PATCH /users/{user-id}/dataSecurityAndGovernance/protectionScopes': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/protectionScopes',
    'patch'
  >;
  'POST /users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/dataSecurityAndGovernance/protectionScopes',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance/protectionScopes',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/dataSecurityAndGovernance/protectionScopes',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const compute = {
  /**
   * `POST /users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute']['body'],
    params?: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/dataSecurityAndGovernance/protectionScopes/compute',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
