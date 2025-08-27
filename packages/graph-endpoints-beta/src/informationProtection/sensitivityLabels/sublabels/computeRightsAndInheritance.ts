import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance',
    'post'
  >;
}

/**
 * `POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance`
 *
 * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
 */
export function create(
  body: IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['body'],
  params?: IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['parameters']
): EndpointRequest<
  IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}
