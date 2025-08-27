export * as acronyms from './acronyms';
export * as bookmarks from './bookmarks';
export * as qnas from './qnas';
export * as query from './query';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /search': Operation<'/search', 'get'>;
  'PATCH /search': Operation<'/search', 'patch'>;
}

/**
 * `GET /search`
 *
 */
export function get(
  params?: IEndpoints['GET /search']['parameters']
): EndpointRequest<IEndpoints['GET /search']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/search',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /search`
 *
 */
export function update(
  body: IEndpoints['PATCH /search']['body'],
  params?: IEndpoints['PATCH /search']['parameters']
): EndpointRequest<IEndpoints['PATCH /search']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/search',
    paramDefs: [],
    params,
    body,
  };
}
