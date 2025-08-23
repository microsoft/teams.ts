import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/externalColumns': Operation<'/sites/{site-id}/externalColumns', 'get'>;
  'GET /sites/{site-id}/externalColumns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/externalColumns/{columnDefinition-id}',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/externalColumns`
 *
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/externalColumns']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/externalColumns']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/externalColumns',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/externalColumns/{columnDefinition-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/externalColumns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/externalColumns/{columnDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/externalColumns/{columnDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}
