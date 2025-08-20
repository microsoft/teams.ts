import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
    'post'
  >;
}

/**
 * `POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['body'],
  params?: IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}
