export * as associatedTeams from './associatedTeams';
export * as installedApps from './installedApps';
export * as sendActivityNotification from './sendActivityNotification';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/teamwork': Operation<'/users/{user-id}/teamwork', 'delete'>;
  'GET /users/{user-id}/teamwork': Operation<'/users/{user-id}/teamwork', 'get'>;
  'PATCH /users/{user-id}/teamwork': Operation<'/users/{user-id}/teamwork', 'patch'>;
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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
