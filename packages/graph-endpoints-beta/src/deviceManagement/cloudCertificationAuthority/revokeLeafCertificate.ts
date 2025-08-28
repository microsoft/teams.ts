import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate',
    'post'
  >;
}

/**
 * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate']['body'],
  params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/revokeLeafCertificate',
    paramDefs: [{ name: 'cloudCertificationAuthority-id', in: 'path' }],
    params,
    body,
  };
}
