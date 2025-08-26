import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights`
 *
 */
export function list(
  params?: IEndpoints['GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
): EndpointRequest<
  IEndpoints['GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}
