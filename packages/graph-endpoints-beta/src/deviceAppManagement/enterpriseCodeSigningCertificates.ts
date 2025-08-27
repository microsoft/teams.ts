import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}': Operation<
    '/deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}',
    'delete'
  >;
  'GET /deviceAppManagement/enterpriseCodeSigningCertificates': Operation<
    '/deviceAppManagement/enterpriseCodeSigningCertificates',
    'get'
  >;
  'GET /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}': Operation<
    '/deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}': Operation<
    '/deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}',
    'patch'
  >;
  'POST /deviceAppManagement/enterpriseCodeSigningCertificates': Operation<
    '/deviceAppManagement/enterpriseCodeSigningCertificates',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'enterpriseCodeSigningCertificate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/enterpriseCodeSigningCertificates`
 *
 * The Windows Enterprise Code Signing Certificate.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/enterpriseCodeSigningCertificates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/enterpriseCodeSigningCertificates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/enterpriseCodeSigningCertificates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}`
 *
 * The Windows Enterprise Code Signing Certificate.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'enterpriseCodeSigningCertificate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}',
    paramDefs: [{ name: 'enterpriseCodeSigningCertificate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/enterpriseCodeSigningCertificates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/enterpriseCodeSigningCertificates']['body'],
  params?: IEndpoints['POST /deviceAppManagement/enterpriseCodeSigningCertificates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/enterpriseCodeSigningCertificates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/enterpriseCodeSigningCertificates',
    paramDefs: [],
    params,
    body,
  };
}
