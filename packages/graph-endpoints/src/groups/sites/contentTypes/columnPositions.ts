import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions`
 *
 * Column order information in a content type.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}`
 *
 * Column order information in a content type.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}
