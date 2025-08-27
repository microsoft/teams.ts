import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /informationProtection/verifySignature': Operation<
    '/informationProtection/verifySignature',
    'post'
  >;
}

/**
 * `POST /informationProtection/verifySignature`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /informationProtection/verifySignature']['body'],
  params?: IEndpoints['POST /informationProtection/verifySignature']['parameters']
): EndpointRequest<IEndpoints['POST /informationProtection/verifySignature']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/verifySignature',
    paramDefs: [],
    params,
    body,
  };
}
