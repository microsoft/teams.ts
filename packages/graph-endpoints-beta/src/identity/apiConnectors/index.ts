import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/apiConnectors/{identityApiConnector-id}': Operation<
    '/identity/apiConnectors/{identityApiConnector-id}',
    'delete'
  >;
  'GET /identity/apiConnectors': Operation<'/identity/apiConnectors', 'get'>;
  'GET /identity/apiConnectors/{identityApiConnector-id}': Operation<
    '/identity/apiConnectors/{identityApiConnector-id}',
    'get'
  >;
  'PATCH /identity/apiConnectors/{identityApiConnector-id}': Operation<
    '/identity/apiConnectors/{identityApiConnector-id}',
    'patch'
  >;
  'POST /identity/apiConnectors': Operation<'/identity/apiConnectors', 'post'>;
  'POST /identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate': Operation<
    '/identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate',
    'post'
  >;
}

/**
 * `DELETE /identity/apiConnectors/{identityApiConnector-id}`
 *
 * Deletes an identityApiConnector object.
 */
export function del(
  params?: IEndpoints['DELETE /identity/apiConnectors/{identityApiConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/apiConnectors/{identityApiConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/apiConnectors/{identityApiConnector-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['identityApiConnector-id'],
    },
    params,
  };
}

/**
 * `GET /identity/apiConnectors`
 *
 * Read the properties of an identityApiConnector object.
 */
export function list(
  params?: IEndpoints['GET /identity/apiConnectors']['parameters']
): EndpointRequest<IEndpoints['GET /identity/apiConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/apiConnectors',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/apiConnectors/{identityApiConnector-id}`
 *
 * Read the properties of an identityApiConnector object.
 */
export function get(
  params?: IEndpoints['GET /identity/apiConnectors/{identityApiConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/apiConnectors/{identityApiConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/apiConnectors/{identityApiConnector-id}',
    paramDefs: {
      path: ['identityApiConnector-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/apiConnectors/{identityApiConnector-id}`
 *
 * Update the properties of an identityApiConnector object.
 */
export function update(
  body: IEndpoints['PATCH /identity/apiConnectors/{identityApiConnector-id}']['body'],
  params?: IEndpoints['PATCH /identity/apiConnectors/{identityApiConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/apiConnectors/{identityApiConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/apiConnectors/{identityApiConnector-id}',
    paramDefs: {
      path: ['identityApiConnector-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/apiConnectors`
 *
 * Create a new identityApiConnector object.
 */
export function create(
  body: IEndpoints['POST /identity/apiConnectors']['body']
): EndpointRequest<IEndpoints['POST /identity/apiConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/apiConnectors',
    body,
  };
}

export const uploadClientCertificate = {
  /**
   * `POST /identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate`
   *
   * Upload a PKCS 12 format key (.pfx) to an API connector&#x27;s authentication configuration. The input is a base-64 encoded value of the PKCS 12 certificate contents. This method returns an apiConnector.
   */
  create: function create(
    body: IEndpoints['POST /identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate']['body'],
    params?: IEndpoints['POST /identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/apiConnectors/{identityApiConnector-id}/uploadClientCertificate',
      paramDefs: {
        path: ['identityApiConnector-id'],
      },
      params,
      body,
    };
  },
};
