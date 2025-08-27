import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/informationProtection/verifySignature': Operation<
    '/me/informationProtection/verifySignature',
    'post'
  >;
}

/**
 * `POST /me/informationProtection/verifySignature`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/verifySignature']['body'],
  params?: IEndpoints['POST /me/informationProtection/verifySignature']['parameters']
): EndpointRequest<IEndpoints['POST /me/informationProtection/verifySignature']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/verifySignature',
    paramDefs: [],
    params,
    body,
  };
}
