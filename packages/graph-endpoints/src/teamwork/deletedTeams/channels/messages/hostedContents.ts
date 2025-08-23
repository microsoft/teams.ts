import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    'get'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    'post'
  >;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents`
 *
 * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
 */
export function list(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['response']
> {
  return {
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
 *
 * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    paramDefs: [
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessageHostedContent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['body'],
  params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['response']
> {
  return {
    method: 'post',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    paramDefs: [
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
