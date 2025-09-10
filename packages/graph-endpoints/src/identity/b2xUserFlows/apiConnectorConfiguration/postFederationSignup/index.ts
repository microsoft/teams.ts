import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup',
    'delete'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup',
    'get'
  >;
  'PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup',
    'patch'
  >;
  'POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup/uploadClientCertificate': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup/uploadClientCertificate',
    'post'
  >;
}

/**
 * `DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['response']
> {
  return {
    method: 'delete',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup',
    paramDefs: {
      header: ['If-Match'],
      path: ['b2xIdentityUserFlow-id'],
    },
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup`
 *
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['response']
> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup',
    paramDefs: {
      path: ['b2xIdentityUserFlow-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['body'],
  params?: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup']['response']
> {
  return {
    method: 'patch',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup',
    paramDefs: {
      path: ['b2xIdentityUserFlow-id'],
    },
    params,
    body,
  };
}

export const uploadClientCertificate = {
  /**
   * `POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup/uploadClientCertificate`
   *
   * Upload a PKCS 12 format key (.pfx) to an API connector&#x27;s authentication configuration. The input is a base-64 encoded value of the PKCS 12 certificate contents. This method returns an apiConnector.
   */
  create: function create(
    body: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup/uploadClientCertificate']['body'],
    params?: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup/uploadClientCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup/uploadClientCertificate']['response']
  > {
    return {
      method: 'post',
      path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration/postFederationSignup/uploadClientCertificate',
      paramDefs: {
        path: ['b2xIdentityUserFlow-id'],
      },
      params,
      body,
    };
  },
};
