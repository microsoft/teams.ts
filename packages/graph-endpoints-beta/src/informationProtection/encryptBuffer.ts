import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /informationProtection/encryptBuffer': Operation<
    '/informationProtection/encryptBuffer',
    'post'
  >;
}

/**
 * `POST /informationProtection/encryptBuffer`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /informationProtection/encryptBuffer']['body'],
  params?: IEndpoints['POST /informationProtection/encryptBuffer']['parameters']
): EndpointRequest<IEndpoints['POST /informationProtection/encryptBuffer']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/encryptBuffer',
    paramDefs: [],
    params,
    body,
  };
}
