import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate',
    'post'
  >;
}

/**
 * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate']['body'],
  params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/uploadExternallySignedCertificationAuthorityCertificate',
    paramDefs: [{ name: 'cloudCertificationAuthority-id', in: 'path' }],
    params,
    body,
  };
}
