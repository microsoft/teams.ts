import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/informationProtection/signDigest': Operation<
    '/sites/{site-id}/informationProtection/signDigest',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/informationProtection/signDigest`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/signDigest']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/signDigest']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/signDigest']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/signDigest',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
