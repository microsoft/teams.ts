export * as pin from './pin';
export * as standardQRCode from './standardQRCode';
export * as temporaryQRCode from './temporaryQRCode';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/qrCodePinMethod': Operation<
    '/me/authentication/qrCodePinMethod',
    'delete'
  >;
  'GET /me/authentication/qrCodePinMethod': Operation<'/me/authentication/qrCodePinMethod', 'get'>;
}

/**
 * `DELETE /me/authentication/qrCodePinMethod`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/qrCodePinMethod']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/authentication/qrCodePinMethod']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/qrCodePinMethod',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/authentication/qrCodePinMethod`
 *
 * Represents a QR code authentication method registered to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/qrCodePinMethod']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/qrCodePinMethod']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/qrCodePinMethod',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
