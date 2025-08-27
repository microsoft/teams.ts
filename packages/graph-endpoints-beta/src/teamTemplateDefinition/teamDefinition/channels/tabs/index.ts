export * as teamsApp from './teamsApp';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs',
    'post'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs`
 *
 * A collection of all the tabs in the channel.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 * A collection of all the tabs in the channel.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
