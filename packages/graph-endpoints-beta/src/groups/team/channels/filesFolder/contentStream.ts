import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream',
    'delete'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream',
    'get'
  >;
  'PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream',
    'put'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['body'],
  params?: IEndpoints['PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/groups/{group-id}/team/channels/{channel-id}/filesFolder/contentStream',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
