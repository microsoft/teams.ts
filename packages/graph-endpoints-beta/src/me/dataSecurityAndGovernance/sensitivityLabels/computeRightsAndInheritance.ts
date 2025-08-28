import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
}

/**
 * `POST /me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance`
 *
 * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
 */
export function create(
  body: IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['body'],
  params?: IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance',
    paramDefs: [],
    params,
    body,
  };
}
