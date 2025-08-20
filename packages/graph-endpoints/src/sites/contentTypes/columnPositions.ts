import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columnPositions',
    'get'
  >;
  'GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions`
 *
 * Column order information in a content type.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/columnPositions',
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
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}`
 *
 * Column order information in a content type.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}
