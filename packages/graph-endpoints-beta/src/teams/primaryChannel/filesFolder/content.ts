import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel/filesFolder/content': Operation<
    '/teams/{team-id}/primaryChannel/filesFolder/content',
    'delete'
  >;
  'GET /teams/{team-id}/primaryChannel/filesFolder/content': Operation<
    '/teams/{team-id}/primaryChannel/filesFolder/content',
    'get'
  >;
  'PUT /teams/{team-id}/primaryChannel/filesFolder/content': Operation<
    '/teams/{team-id}/primaryChannel/filesFolder/content',
    'put'
  >;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel/filesFolder/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/primaryChannel/filesFolder/content']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel/filesFolder/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/filesFolder/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/primaryChannel/filesFolder/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/filesFolder/content',
    paramDefs: [
      { name: '$format', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /teams/{team-id}/primaryChannel/filesFolder/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function set(
  body: IEndpoints['PUT /teams/{team-id}/primaryChannel/filesFolder/content']['body'],
  params?: IEndpoints['PUT /teams/{team-id}/primaryChannel/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /teams/{team-id}/primaryChannel/filesFolder/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/teams/{team-id}/primaryChannel/filesFolder/content',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
