import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
    'get'
  >;
  'PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
    'put'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/content`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/filesFolder/content`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
    paramDefs: [
      { name: '$format', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content']['body'],
  params?: IEndpoints['PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
> {
  return {
    method: 'put',
    path: '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
