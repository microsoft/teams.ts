import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
    body,
  };
}
