import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/tabs': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/tabs',
    'get'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/tabs': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/tabs',
    'post'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'channel-id', 'teamsTab-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/tabs`
 *
 * A collection of all the tabs in the channel. A navigation property.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/tabs']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/tabs',
    paramDefs: {
      path: ['group-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 * A collection of all the tabs in the channel. A navigation property.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: {
      path: ['group-id', 'channel-id', 'teamsTab-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: {
      path: ['group-id', 'channel-id', 'teamsTab-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/channels/{channel-id}/tabs`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/tabs']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/tabs']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/channels/{channel-id}/tabs',
    paramDefs: {
      path: ['group-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp`
   *
   * The application that is linked to the tab. This can&#x27;t be changed after tab creation.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'channel-id', 'teamsTab-id'],
      },
      params,
    };
  },
};
