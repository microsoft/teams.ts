import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /termStore/sets/{set-id}/relations/{relation-id}/toTerm': Operation<
    '/termStore/sets/{set-id}/relations/{relation-id}/toTerm',
    'get'
  >;
}

/**
 * `GET /termStore/sets/{set-id}/relations/{relation-id}/toTerm`
 *
 * The to [term] of the relation. The term to which the relationship is defined.
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/relations/{relation-id}/toTerm']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/relations/{relation-id}/toTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/relations/{relation-id}/toTerm',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'set-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}
