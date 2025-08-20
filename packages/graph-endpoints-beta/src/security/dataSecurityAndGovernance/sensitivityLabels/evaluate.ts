import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /security/dataSecurityAndGovernance/sensitivityLabels/evaluate': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/evaluate',
    'post'
  >;
}

/**
 * `POST /security/dataSecurityAndGovernance/sensitivityLabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/evaluate']['body'],
  params?: IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/evaluate',
    paramDefs: [],
    params,
    body,
  };
}
