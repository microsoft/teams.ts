import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/reports/readingCoachPassages/{readingCoachPassage-id}': Operation<
    '/education/reports/readingCoachPassages/{readingCoachPassage-id}',
    'delete'
  >;
  'GET /education/reports/readingCoachPassages': Operation<
    '/education/reports/readingCoachPassages',
    'get'
  >;
  'GET /education/reports/readingCoachPassages/{readingCoachPassage-id}': Operation<
    '/education/reports/readingCoachPassages/{readingCoachPassage-id}',
    'get'
  >;
  'PATCH /education/reports/readingCoachPassages/{readingCoachPassage-id}': Operation<
    '/education/reports/readingCoachPassages/{readingCoachPassage-id}',
    'patch'
  >;
  'POST /education/reports/readingCoachPassages': Operation<
    '/education/reports/readingCoachPassages',
    'post'
  >;
}

/**
 * `DELETE /education/reports/readingCoachPassages/{readingCoachPassage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/reports/readingCoachPassages/{readingCoachPassage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/reports/readingCoachPassages/{readingCoachPassage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/reports/readingCoachPassages/{readingCoachPassage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'readingCoachPassage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/reports/readingCoachPassages`
 *
 * Get a list of Reading Coach passages that were practiced by a student.
 */
export function list(
  params?: IEndpoints['GET /education/reports/readingCoachPassages']['parameters']
): EndpointRequest<IEndpoints['GET /education/reports/readingCoachPassages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/reports/readingCoachPassages',
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
 * `GET /education/reports/readingCoachPassages/{readingCoachPassage-id}`
 *
 * Details of practiced Reading Coach passages.
 */
export function get(
  params?: IEndpoints['GET /education/reports/readingCoachPassages/{readingCoachPassage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/reports/readingCoachPassages/{readingCoachPassage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/reports/readingCoachPassages/{readingCoachPassage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'readingCoachPassage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/reports/readingCoachPassages/{readingCoachPassage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/reports/readingCoachPassages/{readingCoachPassage-id}']['body'],
  params?: IEndpoints['PATCH /education/reports/readingCoachPassages/{readingCoachPassage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/reports/readingCoachPassages/{readingCoachPassage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/reports/readingCoachPassages/{readingCoachPassage-id}',
    paramDefs: [{ name: 'readingCoachPassage-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /education/reports/readingCoachPassages`
 *
 */
export function create(
  body: IEndpoints['POST /education/reports/readingCoachPassages']['body'],
  params?: IEndpoints['POST /education/reports/readingCoachPassages']['parameters']
): EndpointRequest<IEndpoints['POST /education/reports/readingCoachPassages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/reports/readingCoachPassages',
    paramDefs: [],
    params,
    body,
  };
}
