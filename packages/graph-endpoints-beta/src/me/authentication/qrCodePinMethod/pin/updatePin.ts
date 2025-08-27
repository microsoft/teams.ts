import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/authentication/qrCodePinMethod/pin/updatePin': Operation<
    '/me/authentication/qrCodePinMethod/pin/updatePin',
    'post'
  >;
}

/**
 * `POST /me/authentication/qrCodePinMethod/pin/updatePin`
 *
 */
export function create(
  body: IEndpoints['POST /me/authentication/qrCodePinMethod/pin/updatePin']['body'],
  params?: IEndpoints['POST /me/authentication/qrCodePinMethod/pin/updatePin']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/authentication/qrCodePinMethod/pin/updatePin']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/qrCodePinMethod/pin/updatePin',
    paramDefs: [],
    params,
    body,
  };
}
