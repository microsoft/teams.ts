import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm': Operation<
    '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm`
 *
 * The to [term] of the relation. The term to which the relationship is defined.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStore/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}
