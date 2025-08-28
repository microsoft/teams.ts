import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/symantecCodeSigningCertificate': Operation<
    '/deviceAppManagement/symantecCodeSigningCertificate',
    'delete'
  >;
  'GET /deviceAppManagement/symantecCodeSigningCertificate': Operation<
    '/deviceAppManagement/symantecCodeSigningCertificate',
    'get'
  >;
  'PATCH /deviceAppManagement/symantecCodeSigningCertificate': Operation<
    '/deviceAppManagement/symantecCodeSigningCertificate',
    'patch'
  >;
}

/**
 * `DELETE /deviceAppManagement/symantecCodeSigningCertificate`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/symantecCodeSigningCertificate']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/symantecCodeSigningCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/symantecCodeSigningCertificate',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceAppManagement/symantecCodeSigningCertificate`
 *
 * The WinPhone Symantec Code Signing Certificate.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/symantecCodeSigningCertificate']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/symantecCodeSigningCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/symantecCodeSigningCertificate',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/symantecCodeSigningCertificate`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/symantecCodeSigningCertificate']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/symantecCodeSigningCertificate']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/symantecCodeSigningCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/symantecCodeSigningCertificate',
    paramDefs: [],
    params,
    body,
  };
}
