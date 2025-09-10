export * as associatedTeams from './associatedTeams';
export * as installedApps from './installedApps';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/teamwork': Operation<'/users/{user-id}/teamwork', 'delete'>;
  'GET /users/{user-id}/teamwork': Operation<'/users/{user-id}/teamwork', 'get'>;
  'PATCH /users/{user-id}/teamwork': Operation<'/users/{user-id}/teamwork', 'patch'>;
  'POST /users/{user-id}/teamwork/sendActivityNotification': Operation<
    '/users/{user-id}/teamwork/sendActivityNotification',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/teamwork`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/teamwork']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/teamwork']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/teamwork',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/teamwork`
 *
 * Get the userTeamwork settings for a specified user, which includes the Microsoft Teams region and the locale chosen by the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/teamwork']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/teamwork']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/teamwork',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/teamwork`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/teamwork']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/teamwork']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/teamwork']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/teamwork',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const sendActivityNotification = {
  /**
   * `POST /users/{user-id}/teamwork/sendActivityNotification`
   *
   * Send an activity feed notification to a user. For more information, see sending Teams activity notifications.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/teamwork/sendActivityNotification']['body'],
    params?: IEndpoints['POST /users/{user-id}/teamwork/sendActivityNotification']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/teamwork/sendActivityNotification']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/teamwork/sendActivityNotification',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
