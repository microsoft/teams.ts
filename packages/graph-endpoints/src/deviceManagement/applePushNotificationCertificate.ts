import type { EndpointRequest, Operation } from './../types/common.ts';

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
    method: 'delete',
    path: '/deviceManagement/applePushNotificationCertificate',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/applePushNotificationCertificate`
 *
 * Read properties and relationships of the applePushNotificationCertificate object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/applePushNotificationCertificate']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/applePushNotificationCertificate']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/applePushNotificationCertificate',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/applePushNotificationCertificate`
 *
 * Update the properties of a applePushNotificationCertificate object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/applePushNotificationCertificate']['body'],
  params?: IEndpoints['PATCH /deviceManagement/applePushNotificationCertificate']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/applePushNotificationCertificate']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/applePushNotificationCertificate',
    paramDefs: [],
    params,
    body,
  };
}
