import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
    body,
  };
}
