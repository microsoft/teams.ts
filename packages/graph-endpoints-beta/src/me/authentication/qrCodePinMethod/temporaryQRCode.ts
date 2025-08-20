import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/qrCodePinMethod/temporaryQRCode': Operation<
    '/me/authentication/qrCodePinMethod/temporaryQRCode',
    'delete'
  >;
  'GET /me/authentication/qrCodePinMethod/temporaryQRCode': Operation<
    '/me/authentication/qrCodePinMethod/temporaryQRCode',
    'get'
  >;
  'PATCH /me/authentication/qrCodePinMethod/temporaryQRCode': Operation<
    '/me/authentication/qrCodePinMethod/temporaryQRCode',
    'patch'
  >;
}

/**
 * `DELETE /me/authentication/qrCodePinMethod/temporaryQRCode`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/qrCodePinMethod/temporaryQRCode']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/qrCodePinMethod/temporaryQRCode']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/qrCodePinMethod/temporaryQRCode',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/authentication/qrCodePinMethod/temporaryQRCode`
 *
 * Temporary QR code has lifetime up to 12 hours. It can be issued when the user doesn&#x27;t have access to their standard QR code. There can be only one active temporary QR code for the user.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/qrCodePinMethod/temporaryQRCode']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/qrCodePinMethod/temporaryQRCode']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/qrCodePinMethod/temporaryQRCode',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/authentication/qrCodePinMethod/temporaryQRCode`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/qrCodePinMethod/temporaryQRCode']['body'],
  params?: IEndpoints['PATCH /me/authentication/qrCodePinMethod/temporaryQRCode']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/authentication/qrCodePinMethod/temporaryQRCode']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/authentication/qrCodePinMethod/temporaryQRCode',
    paramDefs: [],
    params,
    body,
  };
}
