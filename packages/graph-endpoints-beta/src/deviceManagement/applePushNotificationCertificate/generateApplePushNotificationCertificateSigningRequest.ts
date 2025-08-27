import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest': Operation<
    '/deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest',
    'post'
  >;
}

/**
 * `POST /deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest`
 *
 * Download Apple push notification certificate signing request
 */
export function create(
  body: IEndpoints['POST /deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest']['body'],
  params?: IEndpoints['POST /deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest',
    paramDefs: [],
    params,
    body,
  };
}
