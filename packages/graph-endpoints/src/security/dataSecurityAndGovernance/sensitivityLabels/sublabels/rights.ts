import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights',
    'get'
  >;
}

/**
 * `GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights`
 *
 */
export function list(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights']['response']
> {
  return {
    method: 'get',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
      { name: 'sensitivityLabel-id1', in: 'path' },
    ],
    params,
  };
}
