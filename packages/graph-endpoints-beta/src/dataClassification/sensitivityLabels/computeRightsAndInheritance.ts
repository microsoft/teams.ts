import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /dataClassification/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/dataClassification/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
}

/**
 * `POST /dataClassification/sensitivityLabels/computeRightsAndInheritance`
 *
 * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
 */
export function create(
  body: IEndpoints['POST /dataClassification/sensitivityLabels/computeRightsAndInheritance']['body'],
  params?: IEndpoints['POST /dataClassification/sensitivityLabels/computeRightsAndInheritance']['parameters']
): EndpointRequest<
  IEndpoints['POST /dataClassification/sensitivityLabels/computeRightsAndInheritance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/sensitivityLabels/computeRightsAndInheritance',
    paramDefs: [],
    params,
    body,
  };
}
