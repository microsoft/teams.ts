import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /informationProtection/sensitivityLabels/evaluate': Operation<
    '/informationProtection/sensitivityLabels/evaluate',
    'post'
  >;
}

/**
 * `POST /informationProtection/sensitivityLabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /informationProtection/sensitivityLabels/evaluate']['body'],
  params?: IEndpoints['POST /informationProtection/sensitivityLabels/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /informationProtection/sensitivityLabels/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/sensitivityLabels/evaluate',
    paramDefs: [],
    params,
    body,
  };
}
