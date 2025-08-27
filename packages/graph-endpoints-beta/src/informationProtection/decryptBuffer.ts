import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /informationProtection/decryptBuffer': Operation<
    '/informationProtection/decryptBuffer',
    'post'
  >;
}

/**
 * `POST /informationProtection/decryptBuffer`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /informationProtection/decryptBuffer']['body'],
  params?: IEndpoints['POST /informationProtection/decryptBuffer']['parameters']
): EndpointRequest<IEndpoints['POST /informationProtection/decryptBuffer']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/decryptBuffer',
    paramDefs: [],
    params,
    body,
  };
}
