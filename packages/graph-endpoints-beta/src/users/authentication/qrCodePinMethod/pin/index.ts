export * as updatePin from './updatePin';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/qrCodePinMethod/pin': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/pin',
    'delete'
  >;
  'GET /users/{user-id}/authentication/qrCodePinMethod/pin': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/pin',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/qrCodePinMethod/pin': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/pin',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/qrCodePinMethod/pin`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod/pin']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod/pin']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/qrCodePinMethod/pin',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/qrCodePinMethod/pin`
 *
 * The PIN linked to the QR Code auth method of the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod/pin']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod/pin']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/qrCodePinMethod/pin',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/qrCodePinMethod/pin`
 *
 * Reset a user&#x27;s PIN and generate a new temporary PIN that&#x27;s represented by a qrPin object and is linked to the user&#x27;s QR Code authentication method object.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/pin']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/pin']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/pin']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/authentication/qrCodePinMethod/pin',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
