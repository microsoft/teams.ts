import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber',
    'post'
  >;
}

/**
 * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber']['body'],
  params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/searchCloudCertificationAuthorityLeafCertificateBySerialNumber',
    paramDefs: [{ name: 'cloudCertificationAuthority-id', in: 'path' }],
    params,
    body,
  };
}
