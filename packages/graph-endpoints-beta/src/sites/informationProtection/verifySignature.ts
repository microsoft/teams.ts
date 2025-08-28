import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/informationProtection/verifySignature': Operation<
    '/sites/{site-id}/informationProtection/verifySignature',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/informationProtection/verifySignature`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/verifySignature']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/verifySignature']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/verifySignature']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/verifySignature',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
