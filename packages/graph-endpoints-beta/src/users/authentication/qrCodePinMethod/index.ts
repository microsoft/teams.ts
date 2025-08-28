export * as pin from './pin';
export * as standardQRCode from './standardQRCode';
export * as temporaryQRCode from './temporaryQRCode';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/qrCodePinMethod': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod',
    'delete'
  >;
  'GET /users/{user-id}/authentication/qrCodePinMethod': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/qrCodePinMethod`
 *
 * Deletes user&#x27;s qrCodePinAuthenticationMethod object. Once the object is deleted, it can&#x27;t be retrieved. The user won&#x27;t be able to sign-in with any QR codes associated with the deleted object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/qrCodePinMethod',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/qrCodePinMethod`
 *
 * Retrieve a user&#x27;s qrCodePinAuthenticationMethod object.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/qrCodePinMethod',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}
