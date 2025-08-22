import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents`
 *
 * Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
 *
 * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['response']
> {
  return {
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
