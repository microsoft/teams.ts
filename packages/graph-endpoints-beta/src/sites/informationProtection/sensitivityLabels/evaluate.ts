import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/informationProtection/sensitivityLabels/evaluate': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/evaluate',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/informationProtection/sensitivityLabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/evaluate']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/evaluate',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
