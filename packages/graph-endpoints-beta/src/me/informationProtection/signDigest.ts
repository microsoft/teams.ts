import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/informationProtection/signDigest': Operation<
    '/me/informationProtection/signDigest',
    'post'
  >;
}

/**
 * `POST /me/informationProtection/signDigest`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/signDigest']['body'],
  params?: IEndpoints['POST /me/informationProtection/signDigest']['parameters']
): EndpointRequest<IEndpoints['POST /me/informationProtection/signDigest']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/signDigest',
    paramDefs: [],
    params,
    body,
  };
}
