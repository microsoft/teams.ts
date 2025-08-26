import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}
