export * as pin from './pin';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/qrCodePinMethod': Operation<
    '/me/authentication/qrCodePinMethod',
    'delete'
  >;
  'GET /me/authentication/qrCodePinMethod': Operation<'/me/authentication/qrCodePinMethod', 'get'>;
  'GET /me/authentication/qrCodePinMethod/standardQRCode': Operation<
    '/me/authentication/qrCodePinMethod/standardQRCode',
    'get'
  >;
  'PATCH /me/authentication/qrCodePinMethod/standardQRCode': Operation<
    '/me/authentication/qrCodePinMethod/standardQRCode',
    'patch'
  >;
  'DELETE /me/authentication/qrCodePinMethod/standardQRCode': Operation<
    '/me/authentication/qrCodePinMethod/standardQRCode',
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
  'DELETE /me/authentication/qrCodePinMethod/temporaryQRCode': Operation<
    '/me/authentication/qrCodePinMethod/temporaryQRCode',
    'delete'
  >;
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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const standardQRCode = {
  /**
   * `GET /me/authentication/qrCodePinMethod/standardQRCode`
   *
   * Standard QR code is primary QR code of the user with lifetime upto 395 days (13 months). There can be only one active standard QR code for the user.
   */
  get: function get(
    params?: IEndpoints['GET /me/authentication/qrCodePinMethod/standardQRCode']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/qrCodePinMethod/standardQRCode']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/authentication/qrCodePinMethod/standardQRCode',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/authentication/qrCodePinMethod/standardQRCode`
   *
   * Create a standard or temporary QR code, if there is no active QR code, or update a standard QR code. Only the expireDateTime property can be updated for a standard QR code.
   */
  update: function update(
    body: IEndpoints['PATCH /me/authentication/qrCodePinMethod/standardQRCode']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /me/authentication/qrCodePinMethod/standardQRCode']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/authentication/qrCodePinMethod/standardQRCode',
      body,
    };
  },
  /**
   * `DELETE /me/authentication/qrCodePinMethod/standardQRCode`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/authentication/qrCodePinMethod/standardQRCode']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/authentication/qrCodePinMethod/standardQRCode']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/authentication/qrCodePinMethod/standardQRCode',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const temporaryQRCode = {
  /**
   * `GET /me/authentication/qrCodePinMethod/temporaryQRCode`
   *
   * Temporary QR code has lifetime up to 12 hours. It can be issued when the user doesn&#x27;t have access to their standard QR code. There can be only one active temporary QR code for the user.
   */
  get: function get(
    params?: IEndpoints['GET /me/authentication/qrCodePinMethod/temporaryQRCode']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/qrCodePinMethod/temporaryQRCode']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/authentication/qrCodePinMethod/temporaryQRCode',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/authentication/qrCodePinMethod/temporaryQRCode`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/authentication/qrCodePinMethod/temporaryQRCode']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /me/authentication/qrCodePinMethod/temporaryQRCode']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/authentication/qrCodePinMethod/temporaryQRCode',
      body,
    };
  },
  /**
   * `DELETE /me/authentication/qrCodePinMethod/temporaryQRCode`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/authentication/qrCodePinMethod/temporaryQRCode']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/authentication/qrCodePinMethod/temporaryQRCode']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/authentication/qrCodePinMethod/temporaryQRCode',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
