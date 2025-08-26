import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/dataSecurityAndGovernance/sensitivityLabels/evaluate': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/evaluate',
    'post'
  >;
}

/**
 * `POST /me/dataSecurityAndGovernance/sensitivityLabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/evaluate']['body'],
  params?: IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/evaluate',
    paramDefs: [],
    params,
    body,
  };
}
