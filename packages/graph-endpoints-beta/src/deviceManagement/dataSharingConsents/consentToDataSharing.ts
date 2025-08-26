import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing': Operation<
    '/deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing',
    'post'
  >;
}

/**
 * `POST /deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing']['body'],
  params?: IEndpoints['POST /deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/dataSharingConsents/{dataSharingConsent-id}/consentToDataSharing',
    paramDefs: [{ name: 'dataSharingConsent-id', in: 'path' }],
    params,
    body,
  };
}
