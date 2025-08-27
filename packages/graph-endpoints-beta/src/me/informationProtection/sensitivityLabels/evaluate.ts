import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/informationProtection/sensitivityLabels/evaluate': Operation<
    '/me/informationProtection/sensitivityLabels/evaluate',
    'post'
  >;
}

/**
 * `POST /me/informationProtection/sensitivityLabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/sensitivityLabels/evaluate']['body'],
  params?: IEndpoints['POST /me/informationProtection/sensitivityLabels/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/informationProtection/sensitivityLabels/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/sensitivityLabels/evaluate',
    paramDefs: [],
    params,
    body,
  };
}
