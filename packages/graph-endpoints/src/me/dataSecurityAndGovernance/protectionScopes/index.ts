import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/dataSecurityAndGovernance/protectionScopes': Operation<
    '/me/dataSecurityAndGovernance/protectionScopes',
    'delete'
  >;
  'GET /me/dataSecurityAndGovernance/protectionScopes': Operation<
    '/me/dataSecurityAndGovernance/protectionScopes',
    'get'
  >;
  'PATCH /me/dataSecurityAndGovernance/protectionScopes': Operation<
    '/me/dataSecurityAndGovernance/protectionScopes',
    'patch'
  >;
  'POST /me/dataSecurityAndGovernance/protectionScopes/compute': Operation<
    '/me/dataSecurityAndGovernance/protectionScopes/compute',
    'post'
  >;
}

/**
 * `DELETE /me/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    method: 'delete',
    path: '/me/dataSecurityAndGovernance/protectionScopes',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function list(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<IEndpoints['GET /me/dataSecurityAndGovernance/protectionScopes']['response']> {
  return {
    method: 'get',
    path: '/me/dataSecurityAndGovernance/protectionScopes',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/dataSecurityAndGovernance/protectionScopes']['body']
): EndpointRequest<IEndpoints['PATCH /me/dataSecurityAndGovernance/protectionScopes']['response']> {
  return {
    method: 'patch',
    path: '/me/dataSecurityAndGovernance/protectionScopes',
    body,
  };
}

export const compute = {
  /**
   * `POST /me/dataSecurityAndGovernance/protectionScopes/compute`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/dataSecurityAndGovernance/protectionScopes/compute']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/dataSecurityAndGovernance/protectionScopes/compute']['response']
  > {
    return {
      method: 'post',
      path: '/me/dataSecurityAndGovernance/protectionScopes/compute',
      body,
    };
  },
};
