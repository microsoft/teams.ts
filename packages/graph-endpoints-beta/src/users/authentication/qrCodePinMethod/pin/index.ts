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
  'POST /users/{user-id}/authentication/qrCodePinMethod/pin/updatePin': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/pin/updatePin',
    'post'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
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
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const updatePin = {
  /**
   * `POST /users/{user-id}/authentication/qrCodePinMethod/pin/updatePin`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/authentication/qrCodePinMethod/pin/updatePin']['body'],
    params?: IEndpoints['POST /users/{user-id}/authentication/qrCodePinMethod/pin/updatePin']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/qrCodePinMethod/pin/updatePin']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/qrCodePinMethod/pin/updatePin',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
