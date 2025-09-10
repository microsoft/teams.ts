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
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp',
    'get'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['teamTemplateDefinition-id', 'channel-id', 'teamsTab-id'],
    },
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
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id', 'teamsTab-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id', 'teamsTab-id'],
    },
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
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp`
   *
   * The application that is linked to the tab.
   */
  get: function get(
    params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamTemplateDefinition-id', 'channel-id', 'teamsTab-id'],
      },
      params,
    };
  },
};
