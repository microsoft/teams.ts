import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}/fromTerm': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}/fromTerm',
    'get'
  >;
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}/fromTerm`
 *
 * The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
 */
export function get(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}/fromTerm']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}/fromTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}/fromTerm',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}
