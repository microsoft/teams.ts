import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/evaluate': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/evaluate',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/evaluate']['body'],
  params?: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/evaluate',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
