import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
}

/**
 * `POST /security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance`
 *
 * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
 */
export function create(
  body: IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['body'],
  params?: IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['response']
> {
  return {
    method: 'post',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance',
    paramDefs: [],
    params,
    body,
  };
}
