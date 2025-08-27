import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/signDigest': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/signDigest',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/informationProtection/signDigest`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/signDigest']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/signDigest']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/signDigest']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/signDigest',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
