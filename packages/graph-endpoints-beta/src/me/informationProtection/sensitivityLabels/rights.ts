import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights`
 *
 */
export function list(
  params?: IEndpoints['GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}
