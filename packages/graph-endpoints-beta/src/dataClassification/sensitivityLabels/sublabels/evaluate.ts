import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
    'post'
  >;
}

/**
 * `POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['body'],
  params?: IEndpoints['POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}
