import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights`
 *
 * Get the usage rights granted to the calling user for a specific sensitivity label that has admin-defined permissions.
 */
export function list(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}
