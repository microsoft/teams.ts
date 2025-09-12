import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/primaryChannel/tabs': Operation<
    '/groups/{group-id}/team/primaryChannel/tabs',
    'get'
  >;
  'GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/primaryChannel/tabs': Operation<
    '/groups/{group-id}/team/primaryChannel/tabs',
    'post'
  >;
  'GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp': Operation<
    '/groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'teamsTab-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/tabs`
 *
 * A collection of all the tabs in the channel.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/tabs']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/primaryChannel/tabs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/tabs',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}`
 *
 * A collection of all the tabs in the channel.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}',
    paramDefs: {
      path: ['group-id', 'teamsTab-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}',
    paramDefs: {
      path: ['group-id', 'teamsTab-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/tabs`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/tabs']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/tabs']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/primaryChannel/tabs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/tabs',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp`
   *
   * The application that is linked to the tab.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'teamsTab-id'],
      },
      params,
    };
  },
};
