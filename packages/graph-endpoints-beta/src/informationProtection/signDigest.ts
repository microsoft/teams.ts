import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /informationProtection/signDigest': Operation<'/informationProtection/signDigest', 'post'>;
}

/**
 * `POST /informationProtection/signDigest`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /informationProtection/signDigest']['body'],
  params?: IEndpoints['POST /informationProtection/signDigest']['parameters']
): EndpointRequest<IEndpoints['POST /informationProtection/signDigest']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/signDigest',
    paramDefs: [],
    params,
    body,
  };
}
