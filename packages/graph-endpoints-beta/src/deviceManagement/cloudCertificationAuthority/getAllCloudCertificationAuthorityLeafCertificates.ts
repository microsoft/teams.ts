import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates',
    'post'
  >;
}

/**
 * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates']['body'],
  params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getAllCloudCertificationAuthorityLeafCertificates',
    paramDefs: [{ name: 'cloudCertificationAuthority-id', in: 'path' }],
    params,
    body,
  };
}
