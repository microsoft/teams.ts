import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /search/bookmarks/{bookmark-id}': Operation<'/search/bookmarks/{bookmark-id}', 'delete'>;
  'GET /search/bookmarks': Operation<'/search/bookmarks', 'get'>;
  'GET /search/bookmarks/{bookmark-id}': Operation<'/search/bookmarks/{bookmark-id}', 'get'>;
  'PATCH /search/bookmarks/{bookmark-id}': Operation<'/search/bookmarks/{bookmark-id}', 'patch'>;
  'POST /search/bookmarks': Operation<'/search/bookmarks', 'post'>;
}

/**
 * `DELETE /search/bookmarks/{bookmark-id}`
 *
 * Delete a bookmark object.
 */
export function del(
  params?: IEndpoints['DELETE /search/bookmarks/{bookmark-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /search/bookmarks/{bookmark-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/search/bookmarks/{bookmark-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookmark-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /search/bookmarks`
 *
 * Get a list of bookmark objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /search/bookmarks']['parameters']
): EndpointRequest<IEndpoints['GET /search/bookmarks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/search/bookmarks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /search/bookmarks/{bookmark-id}`
 *
 * Read the properties and relationships of a bookmark object.
 */
export function get(
  params?: IEndpoints['GET /search/bookmarks/{bookmark-id}']['parameters']
): EndpointRequest<IEndpoints['GET /search/bookmarks/{bookmark-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/search/bookmarks/{bookmark-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookmark-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /search/bookmarks/{bookmark-id}`
 *
 * Update the properties of a bookmark object.
 */
export function update(
  body: IEndpoints['PATCH /search/bookmarks/{bookmark-id}']['body'],
  params?: IEndpoints['PATCH /search/bookmarks/{bookmark-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /search/bookmarks/{bookmark-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/search/bookmarks/{bookmark-id}',
    paramDefs: [{ name: 'bookmark-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /search/bookmarks`
 *
 * Create a new bookmark object.
 */
export function create(
  body: IEndpoints['POST /search/bookmarks']['body'],
  params?: IEndpoints['POST /search/bookmarks']['parameters']
): EndpointRequest<IEndpoints['POST /search/bookmarks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/search/bookmarks',
    paramDefs: [],
    params,
    body,
  };
}
