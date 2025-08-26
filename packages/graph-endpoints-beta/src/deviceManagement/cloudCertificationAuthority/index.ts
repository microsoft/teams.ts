export * as changeCloudCertificationAuthorityStatus from './changeCloudCertificationAuthorityStatus';
export * as cloudCertificationAuthorityLeafCertificate from './cloudCertificationAuthorityLeafCertificate';
export * as getAllCloudCertificationAuthority from './getAllCloudCertificationAuthority';
export * as getAllCloudCertificationAuthorityLeafCertificates from './getAllCloudCertificationAuthorityLeafCertificates';
export * as getCloudCertificationAuthority from './getCloudCertificationAuthority';
export * as patchCloudCertificationAuthority from './patchCloudCertificationAuthority';
export * as postCloudCertificationAuthority from './postCloudCertificationAuthority';
export * as revokeCloudCertificationAuthorityCertificate from './revokeCloudCertificationAuthorityCertificate';
export * as revokeLeafCertificate from './revokeLeafCertificate';
export * as revokeLeafCertificateBySerialNumber from './revokeLeafCertificateBySerialNumber';
export * as searchCloudCertificationAuthorityLeafCertificateBySerialNumber from './searchCloudCertificationAuthorityLeafCertificateBySerialNumber';
export * as uploadExternallySignedCertificationAuthorityCertificate from './uploadExternallySignedCertificationAuthorityCertificate';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}',
    'delete'
  >;
  'GET /deviceManagement/cloudCertificationAuthority': Operation<
    '/deviceManagement/cloudCertificationAuthority',
    'get'
  >;
  'GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}',
    'get'
  >;
  'PATCH /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}',
    'patch'
  >;
  'POST /deviceManagement/cloudCertificationAuthority': Operation<
    '/deviceManagement/cloudCertificationAuthority',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudCertificationAuthority-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/cloudCertificationAuthority`
 *
 * Collection of CloudCertificationAuthority records associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/cloudCertificationAuthority']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/cloudCertificationAuthority']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/cloudCertificationAuthority',
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
 * `GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}`
 *
 * Collection of CloudCertificationAuthority records associated with account.
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudCertificationAuthority-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}',
    paramDefs: [{ name: 'cloudCertificationAuthority-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/cloudCertificationAuthority`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority']['body'],
  params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/cloudCertificationAuthority']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/cloudCertificationAuthority',
    paramDefs: [],
    params,
    body,
  };
}
