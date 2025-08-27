import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/userPfxCertificates/{userPFXCertificate-id}': Operation<
    '/deviceManagement/userPfxCertificates/{userPFXCertificate-id}',
    'delete'
  >;
  'GET /deviceManagement/userPfxCertificates': Operation<
    '/deviceManagement/userPfxCertificates',
    'get'
  >;
  'GET /deviceManagement/userPfxCertificates/{userPFXCertificate-id}': Operation<
    '/deviceManagement/userPfxCertificates/{userPFXCertificate-id}',
    'get'
  >;
  'PATCH /deviceManagement/userPfxCertificates/{userPFXCertificate-id}': Operation<
    '/deviceManagement/userPfxCertificates/{userPFXCertificate-id}',
    'patch'
  >;
  'POST /deviceManagement/userPfxCertificates': Operation<
    '/deviceManagement/userPfxCertificates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/userPfxCertificates/{userPFXCertificate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/userPfxCertificates/{userPFXCertificate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userPFXCertificate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/userPfxCertificates`
 *
 * Collection of PFX certificates associated with a user.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/userPfxCertificates']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/userPfxCertificates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userPfxCertificates',
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
 * `GET /deviceManagement/userPfxCertificates/{userPFXCertificate-id}`
 *
 * Collection of PFX certificates associated with a user.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/userPfxCertificates/{userPFXCertificate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userPFXCertificate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/userPfxCertificates/{userPFXCertificate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/userPfxCertificates/{userPFXCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/userPfxCertificates/{userPFXCertificate-id}',
    paramDefs: [{ name: 'userPFXCertificate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/userPfxCertificates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/userPfxCertificates']['body'],
  params?: IEndpoints['POST /deviceManagement/userPfxCertificates']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/userPfxCertificates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/userPfxCertificates',
    paramDefs: [],
    params,
    body,
  };
}
