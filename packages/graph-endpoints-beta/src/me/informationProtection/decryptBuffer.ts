import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/informationProtection/decryptBuffer': Operation<
    '/me/informationProtection/decryptBuffer',
    'post'
  >;
}

/**
 * `POST /me/informationProtection/decryptBuffer`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/decryptBuffer']['body'],
  params?: IEndpoints['POST /me/informationProtection/decryptBuffer']['parameters']
): EndpointRequest<IEndpoints['POST /me/informationProtection/decryptBuffer']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/decryptBuffer',
    paramDefs: [],
    params,
    body,
  };
}
