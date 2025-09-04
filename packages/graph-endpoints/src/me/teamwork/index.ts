export * as associatedTeams from './associatedTeams';
export * as installedApps from './installedApps';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/teamwork': Operation<'/me/teamwork', 'delete'>;
  'GET /me/teamwork': Operation<'/me/teamwork', 'get'>;
  'PATCH /me/teamwork': Operation<'/me/teamwork', 'patch'>;
  'POST /me/teamwork/sendActivityNotification': Operation<
    '/me/teamwork/sendActivityNotification',
    'post'
  >;
}

/**
 * `DELETE /me/teamwork`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/teamwork']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/teamwork']['response']> {
  return {
    method: 'delete',
    path: '/me/teamwork',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/teamwork`
 *
 * A container for Microsoft Teams features available for the user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/teamwork']['parameters']
): EndpointRequest<IEndpoints['GET /me/teamwork']['response']> {
  return {
    method: 'get',
    path: '/me/teamwork',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/teamwork`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/teamwork']['body']
): EndpointRequest<IEndpoints['PATCH /me/teamwork']['response']> {
  return {
    method: 'patch',
    path: '/me/teamwork',
    body,
  };
}

export const sendActivityNotification = {
  /**
   * `POST /me/teamwork/sendActivityNotification`
   *
   * Send an activity feed notification to a user. For more information, see sending Teams activity notifications.
   */
  create: function create(
    body: IEndpoints['POST /me/teamwork/sendActivityNotification']['body']
  ): EndpointRequest<IEndpoints['POST /me/teamwork/sendActivityNotification']['response']> {
    return {
      method: 'post',
      path: '/me/teamwork/sendActivityNotification',
      body,
    };
  },
};
