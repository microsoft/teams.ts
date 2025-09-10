import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/applePushNotificationCertificate': Operation<
    '/deviceManagement/applePushNotificationCertificate',
    'delete'
  >;
  'GET /deviceManagement/applePushNotificationCertificate': Operation<
    '/deviceManagement/applePushNotificationCertificate',
    'get'
  >;
  'PATCH /deviceManagement/applePushNotificationCertificate': Operation<
    '/deviceManagement/applePushNotificationCertificate',
    'patch'
  >;
  'POST /deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest': Operation<
    '/deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/applePushNotificationCertificate`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/applePushNotificationCertificate']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/applePushNotificationCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/applePushNotificationCertificate',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/applePushNotificationCertificate`
 *
 * Apple push notification certificate.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/applePushNotificationCertificate']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/applePushNotificationCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/applePushNotificationCertificate',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/applePushNotificationCertificate`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/applePushNotificationCertificate']['body']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/applePushNotificationCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/applePushNotificationCertificate',
    body,
  };
}

export const generateApplePushNotificationCertificateSigningRequest = {
  /**
   * `POST /deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest`
   *
   * Download Apple push notification certificate signing request
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest',
    };
  },
};
