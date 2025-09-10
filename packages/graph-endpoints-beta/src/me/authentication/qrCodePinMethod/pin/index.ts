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
  'POST /me/authentication/qrCodePinMethod/pin/updatePin': Operation<
    '/me/authentication/qrCodePinMethod/pin/updatePin',
    'post'
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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/authentication/qrCodePinMethod/pin`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/qrCodePinMethod/pin']['body']
): EndpointRequest<IEndpoints['PATCH /me/authentication/qrCodePinMethod/pin']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/authentication/qrCodePinMethod/pin',
    body,
  };
}

export const updatePin = {
  /**
   * `POST /me/authentication/qrCodePinMethod/pin/updatePin`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/authentication/qrCodePinMethod/pin/updatePin']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/authentication/qrCodePinMethod/pin/updatePin']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/authentication/qrCodePinMethod/pin/updatePin',
      body,
    };
  },
};
