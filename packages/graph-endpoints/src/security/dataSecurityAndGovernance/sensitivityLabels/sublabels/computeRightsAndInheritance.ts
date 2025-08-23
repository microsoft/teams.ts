import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance',
    'post'
  >;
}

/**
 * `POST /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance`
 *
 * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
 */
export function create(
  body: IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['body'],
  params?: IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['response']
> {
  return {
    method: 'post',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}
