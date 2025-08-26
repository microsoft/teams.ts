import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode',
    'delete'
  >;
  'GET /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode`
 *
 * Temporary QR code has lifetime up to 12 hours. It can be issued when the user doesn&#x27;t have access to their standard QR code. There can be only one active temporary QR code for the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
