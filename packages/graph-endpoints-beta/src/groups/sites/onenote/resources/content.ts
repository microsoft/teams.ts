import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    'get'
  >;
  'PUT /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    'put'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content`
 *
 * The content of the resource.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content`
 *
 * The content of the resource.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content`
 *
 * The content of the resource.
 */
export function set(
  body: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['body'],
  params?: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'onenoteResource-id', in: 'path' },
    ],
    params,
    body,
  };
}
