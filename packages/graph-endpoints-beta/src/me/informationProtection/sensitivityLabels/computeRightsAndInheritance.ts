import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/informationProtection/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/me/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
}

/**
 * `POST /me/informationProtection/sensitivityLabels/computeRightsAndInheritance`
 *
 * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/sensitivityLabels/computeRightsAndInheritance']['body'],
  params?: IEndpoints['POST /me/informationProtection/sensitivityLabels/computeRightsAndInheritance']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/informationProtection/sensitivityLabels/computeRightsAndInheritance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    paramDefs: [],
    params,
    body,
  };
}
