import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance`
 *
 * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['body'],
  params?: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
