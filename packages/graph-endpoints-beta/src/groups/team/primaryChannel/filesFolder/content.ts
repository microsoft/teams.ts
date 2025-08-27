import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/primaryChannel/filesFolder/content': Operation<
    '/groups/{group-id}/team/primaryChannel/filesFolder/content',
    'delete'
  >;
  'GET /groups/{group-id}/team/primaryChannel/filesFolder/content': Operation<
    '/groups/{group-id}/team/primaryChannel/filesFolder/content',
    'get'
  >;
  'PUT /groups/{group-id}/team/primaryChannel/filesFolder/content': Operation<
    '/groups/{group-id}/team/primaryChannel/filesFolder/content',
    'put'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/primaryChannel/filesFolder/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/filesFolder/content']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/primaryChannel/filesFolder/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/filesFolder/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/filesFolder/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/filesFolder/content',
    paramDefs: [
      { name: '$format', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /groups/{group-id}/team/primaryChannel/filesFolder/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function set(
  body: IEndpoints['PUT /groups/{group-id}/team/primaryChannel/filesFolder/content']['body'],
  params?: IEndpoints['PUT /groups/{group-id}/team/primaryChannel/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /groups/{group-id}/team/primaryChannel/filesFolder/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/groups/{group-id}/team/primaryChannel/filesFolder/content',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
