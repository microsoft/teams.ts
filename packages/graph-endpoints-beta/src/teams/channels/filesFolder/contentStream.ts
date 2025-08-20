import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/teams/{team-id}/channels/{channel-id}/filesFolder/contentStream',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/teams/{team-id}/channels/{channel-id}/filesFolder/contentStream',
    'get'
  >;
  'PUT /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/teams/{team-id}/channels/{channel-id}/filesFolder/contentStream',
    'put'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/filesFolder/contentStream',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/filesFolder/contentStream',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream']['body'],
  params?: IEndpoints['PUT /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['PUT /teams/{team-id}/channels/{channel-id}/filesFolder/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/teams/{team-id}/channels/{channel-id}/filesFolder/contentStream',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
