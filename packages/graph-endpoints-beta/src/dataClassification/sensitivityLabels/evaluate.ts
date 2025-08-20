import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /dataClassification/sensitivityLabels/evaluate': Operation<
    '/dataClassification/sensitivityLabels/evaluate',
    'post'
  >;
}

/**
 * `POST /dataClassification/sensitivityLabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/sensitivityLabels/evaluate']['body'],
  params?: IEndpoints['POST /dataClassification/sensitivityLabels/evaluate']['parameters']
): EndpointRequest<IEndpoints['POST /dataClassification/sensitivityLabels/evaluate']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/sensitivityLabels/evaluate',
    paramDefs: [],
    params,
    body,
  };
}
