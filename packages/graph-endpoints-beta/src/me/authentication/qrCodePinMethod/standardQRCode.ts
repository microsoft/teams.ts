import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/qrCodePinMethod/standardQRCode': Operation<
    '/me/authentication/qrCodePinMethod/standardQRCode',
    'delete'
  >;
  'GET /me/authentication/qrCodePinMethod/standardQRCode': Operation<
    '/me/authentication/qrCodePinMethod/standardQRCode',
    'get'
  >;
  'PATCH /me/authentication/qrCodePinMethod/standardQRCode': Operation<
    '/me/authentication/qrCodePinMethod/standardQRCode',
    'patch'
  >;
}

/**
 * `DELETE /me/authentication/qrCodePinMethod/standardQRCode`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/qrCodePinMethod/standardQRCode']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/qrCodePinMethod/standardQRCode']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/qrCodePinMethod/standardQRCode',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/authentication/qrCodePinMethod/standardQRCode`
 *
 * Standard QR code is primary QR code of the user with lifetime upto 395 days (13 months). There can be only one active standard QR code for the user.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/qrCodePinMethod/standardQRCode']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/qrCodePinMethod/standardQRCode']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/qrCodePinMethod/standardQRCode',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/authentication/qrCodePinMethod/standardQRCode`
 *
 * Create a standard or temporary QR code, if there is no active QR code, or update a standard QR code. Only the expireDateTime property can be updated for a standard QR code.
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/qrCodePinMethod/standardQRCode']['body'],
  params?: IEndpoints['PATCH /me/authentication/qrCodePinMethod/standardQRCode']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/authentication/qrCodePinMethod/standardQRCode']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/authentication/qrCodePinMethod/standardQRCode',
    paramDefs: [],
    params,
    body,
  };
}
