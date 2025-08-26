import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/informationProtection/encryptBuffer': Operation<
    '/me/informationProtection/encryptBuffer',
    'post'
  >;
}

/**
 * `POST /me/informationProtection/encryptBuffer`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/encryptBuffer']['body'],
  params?: IEndpoints['POST /me/informationProtection/encryptBuffer']['parameters']
): EndpointRequest<IEndpoints['POST /me/informationProtection/encryptBuffer']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/encryptBuffer',
    paramDefs: [],
    params,
    body,
  };
}
