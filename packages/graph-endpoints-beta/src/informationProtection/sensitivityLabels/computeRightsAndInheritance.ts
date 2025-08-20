import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /informationProtection/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
}

/**
 * `POST /informationProtection/sensitivityLabels/computeRightsAndInheritance`
 *
 * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
 */
export function create(
  body: IEndpoints['POST /informationProtection/sensitivityLabels/computeRightsAndInheritance']['body'],
  params?: IEndpoints['POST /informationProtection/sensitivityLabels/computeRightsAndInheritance']['parameters']
): EndpointRequest<
  IEndpoints['POST /informationProtection/sensitivityLabels/computeRightsAndInheritance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    paramDefs: [],
    params,
    body,
  };
}
