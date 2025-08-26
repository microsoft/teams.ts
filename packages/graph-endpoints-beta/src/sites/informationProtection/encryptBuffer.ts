import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/informationProtection/encryptBuffer': Operation<
    '/sites/{site-id}/informationProtection/encryptBuffer',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/informationProtection/encryptBuffer`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/encryptBuffer']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/encryptBuffer']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/encryptBuffer']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/encryptBuffer',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
