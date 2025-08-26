import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/authentication/qrCodePinMethod/pin/updatePin': Operation<
    '/users/{user-id}/authentication/qrCodePinMethod/pin/updatePin',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/authentication/qrCodePinMethod/pin/updatePin`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/qrCodePinMethod/pin/updatePin']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/qrCodePinMethod/pin/updatePin']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/qrCodePinMethod/pin/updatePin']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/qrCodePinMethod/pin/updatePin',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
