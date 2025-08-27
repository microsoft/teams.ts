import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/informationProtection/decryptBuffer': Operation<
    '/sites/{site-id}/informationProtection/decryptBuffer',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/informationProtection/decryptBuffer`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/decryptBuffer']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/decryptBuffer']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/decryptBuffer']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/decryptBuffer',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
