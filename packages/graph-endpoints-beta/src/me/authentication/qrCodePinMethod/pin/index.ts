export * as updatePin from './updatePin';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/qrCodePinMethod/pin': Operation<
    '/me/authentication/qrCodePinMethod/pin',
    'delete'
  >;
  'GET /me/authentication/qrCodePinMethod/pin': Operation<
    '/me/authentication/qrCodePinMethod/pin',
    'get'
  >;
  'PATCH /me/authentication/qrCodePinMethod/pin': Operation<
    '/me/authentication/qrCodePinMethod/pin',
    'patch'
  >;
}

/**
 * `DELETE /me/authentication/qrCodePinMethod/pin`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/qrCodePinMethod/pin']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/authentication/qrCodePinMethod/pin']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/qrCodePinMethod/pin',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/authentication/qrCodePinMethod/pin`
 *
 * The PIN linked to the QR Code auth method of the user.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/qrCodePinMethod/pin']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/qrCodePinMethod/pin']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/qrCodePinMethod/pin',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/authentication/qrCodePinMethod/pin`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/qrCodePinMethod/pin']['body'],
  params?: IEndpoints['PATCH /me/authentication/qrCodePinMethod/pin']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/authentication/qrCodePinMethod/pin']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/authentication/qrCodePinMethod/pin',
    paramDefs: [],
    params,
    body,
  };
}
