import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/qrCodePinMethod/standardQRCode': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/standardQRCode',
    'delete'
  >;
  'GET /users/{user-id}/authentication/qrCodePinMethod/standardQRCode': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/standardQRCode',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/qrCodePinMethod/standardQRCode': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/standardQRCode',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/qrCodePinMethod/standardQRCode`
 *
 * Delete a standard or temporary qrCode object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/qrCodePinMethod/standardQRCode',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/qrCodePinMethod/standardQRCode`
 *
 * Read the properties and relationships of a qrCode object.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/qrCodePinMethod/standardQRCode',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/qrCodePinMethod/standardQRCode`
 *
 * Create a standard or temporary QR code, if there is no active QR code, or update a standard QR code. Only the expireDateTime property can be updated for a standard QR code.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/authentication/qrCodePinMethod/standardQRCode',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
