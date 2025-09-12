import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/tabs': Operation<
    '/teams/{team-id}/channels/{channel-id}/tabs',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/tabs': Operation<
    '/teams/{team-id}/channels/{channel-id}/tabs',
    'post'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp': Operation<
    '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp',
    'get'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 * Removes (unpins) a tab from the specified channel within a team.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'channel-id', 'teamsTab-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/tabs`
 *
 * Retrieve the list of tabs in the specified channel within a team.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/channels/{channel-id}/tabs']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/tabs',
    paramDefs: {
      path: ['team-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}`
 *
 * Retrieve the properties and relationships of the specified tab in a channel within a team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: {
      path: ['team-id', 'channel-id', 'teamsTab-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
  * `PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}`
  *
  * Update the properties of the specified tab.
This API can be used to configure the content of the tab.
  */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
    paramDefs: {
      path: ['team-id', 'channel-id', 'teamsTab-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/tabs`
 *
 * Add (pin) a tab to the specified channel within a team. The app must be preinstalled in the team and have the configurableTabs property defined in the app manifest.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/tabs']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/tabs']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/channels/{channel-id}/tabs']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/tabs',
    paramDefs: {
      path: ['team-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp`
   *
   * The application that is linked to the tab. This can&#x27;t be changed after tab creation.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp']['response']
  > {
    return {
      method: 'get',
      path: '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'channel-id', 'teamsTab-id'],
      },
      params,
    };
  },
};
