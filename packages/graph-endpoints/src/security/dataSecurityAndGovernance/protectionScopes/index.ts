import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataSecurityAndGovernance/protectionScopes': Operation<
    '/security/dataSecurityAndGovernance/protectionScopes',
    'delete'
  >;
  'GET /security/dataSecurityAndGovernance/protectionScopes': Operation<
    '/security/dataSecurityAndGovernance/protectionScopes',
    'get'
  >;
  'PATCH /security/dataSecurityAndGovernance/protectionScopes': Operation<
    '/security/dataSecurityAndGovernance/protectionScopes',
    'patch'
  >;
  'POST /security/dataSecurityAndGovernance/protectionScopes/compute': Operation<
    '/security/dataSecurityAndGovernance/protectionScopes/compute',
    'post'
  >;
}

/**
 * `DELETE /security/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    method: 'delete',
    path: '/security/dataSecurityAndGovernance/protectionScopes',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/dataSecurityAndGovernance/protectionScopes`
 *
 * Container for actions related to computing tenant-wide data protection scopes.
 */
export function list(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance/protectionScopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    method: 'get',
    path: '/security/dataSecurityAndGovernance/protectionScopes',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/dataSecurityAndGovernance/protectionScopes`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataSecurityAndGovernance/protectionScopes']['body']
): EndpointRequest<
  IEndpoints['PATCH /security/dataSecurityAndGovernance/protectionScopes']['response']
> {
  return {
    method: 'patch',
    path: '/security/dataSecurityAndGovernance/protectionScopes',
    body,
  };
}

export const compute = {
  /**
   * `POST /security/dataSecurityAndGovernance/protectionScopes/compute`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/dataSecurityAndGovernance/protectionScopes/compute']['body']
  ): EndpointRequest<
    IEndpoints['POST /security/dataSecurityAndGovernance/protectionScopes/compute']['response']
  > {
    return {
      method: 'post',
      path: '/security/dataSecurityAndGovernance/protectionScopes/compute',
      body,
    };
  },
};
