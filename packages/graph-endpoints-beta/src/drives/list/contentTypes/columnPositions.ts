import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions',
    'get'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions`
 *
 * Column order information in a content type.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}`
 *
 * Column order information in a content type.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}
