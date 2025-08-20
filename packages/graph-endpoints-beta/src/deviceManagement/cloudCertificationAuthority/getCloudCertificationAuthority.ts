import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority': Operation<
    '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority',
    'post'
  >;
}

/**
 * `POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority']['body'],
  params?: IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority-id}/getCloudCertificationAuthority',
    paramDefs: [{ name: 'cloudCertificationAuthority-id', in: 'path' }],
    params,
    body,
  };
}
