import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance',
    'delete'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance',
    'get'
  >;
  'PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance',
    'patch'
  >;
  'POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance/uploadClientCertificate': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance/uploadClientCertificate',
    'post'
  >;
}

/**
 * `DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance',
    paramDefs: {
      header: ['If-Match'],
      path: ['b2xIdentityUserFlow-id'],
    },
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance`
 *
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance',
    paramDefs: {
      path: ['b2xIdentityUserFlow-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['body'],
  params?: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance',
    paramDefs: {
      path: ['b2xIdentityUserFlow-id'],
    },
    params,
    body,
  };
}

export const uploadClientCertificate = {
  /**
   * `POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance/uploadClientCertificate`
   *
   * Upload a PKCS 12 format key (.pfx) to an API connector&#x27;s authentication configuration. The input is a base-64 encoded value of the PKCS 12 certificate contents. This method returns an apiConnector.
   */
  create: function create(
    body: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance/uploadClientCertificate']['body'],
    params?: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance/uploadClientCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance/uploadClientCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/preTokenIssuance/uploadClientCertificate',
      paramDefs: {
        path: ['b2xIdentityUserFlow-id'],
      },
      params,
      body,
    };
  },
};
