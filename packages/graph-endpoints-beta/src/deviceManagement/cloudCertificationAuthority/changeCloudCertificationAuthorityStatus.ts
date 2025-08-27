import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus',
    'post'
  >;
}

/**
 * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus']['body'],
  params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/changeCloudCertificationAuthorityStatus',
    paramDefs: [{ name: 'cloudCertificationAuthority-id', in: 'path' }],
    params,
    body,
  };
}
