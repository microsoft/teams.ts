export * as pin from './pin';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/qrCodePinMethod': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod',
    'delete'
  >;
  'GET /users/{user-id}/authentication/qrCodePinMethod': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod',
    'get'
  >;
  'GET /users/{user-id}/authentication/qrCodePinMethod/standardQRCode': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/standardQRCode',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/qrCodePinMethod/standardQRCode': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/standardQRCode',
    'patch'
  >;
  'DELETE /users/{user-id}/authentication/qrCodePinMethod/standardQRCode': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/standardQRCode',
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
  'DELETE /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/qrCodePinMethod`
 *
 * Deletes user&#x27;s qrCodePinAuthenticationMethod object. Once the object is deleted, it can&#x27;t be retrieved. The user won&#x27;t be able to sign-in with any QR codes associated with the deleted object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/qrCodePinMethod',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/qrCodePinMethod`
 *
 * Retrieve a user&#x27;s qrCodePinAuthenticationMethod object.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/qrCodePinMethod',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const standardQRCode = {
  /**
   * `GET /users/{user-id}/authentication/qrCodePinMethod/standardQRCode`
   *
   * Read the properties and relationships of a qrCode object.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/qrCodePinMethod/standardQRCode',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/authentication/qrCodePinMethod/standardQRCode`
   *
   * Create a standard or temporary QR code, if there is no active QR code, or update a standard QR code. Only the expireDateTime property can be updated for a standard QR code.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/authentication/qrCodePinMethod/standardQRCode',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/authentication/qrCodePinMethod/standardQRCode`
   *
   * Delete a standard or temporary qrCode object.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod/standardQRCode']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/authentication/qrCodePinMethod/standardQRCode',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id'],
      },
      params,
    };
  },
};

export const temporaryQRCode = {
  /**
   * `GET /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode`
   *
   * Temporary QR code has lifetime up to 12 hours. It can be issued when the user doesn&#x27;t have access to their standard QR code. There can be only one active temporary QR code for the user.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/authentication/qrCodePinMethod/temporaryQRCode',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id'],
      },
      params,
    };
  },
};
