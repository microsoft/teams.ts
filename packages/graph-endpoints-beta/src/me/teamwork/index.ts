export * as associatedTeams from './associatedTeams';
export * as installedApps from './installedApps';
export * as sendActivityNotification from './sendActivityNotification';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/teamwork': Operation<'/me/teamwork', 'delete'>;
  'GET /me/teamwork': Operation<'/me/teamwork', 'get'>;
  'PATCH /me/teamwork': Operation<'/me/teamwork', 'patch'>;
}

/**
 * `DELETE /me/teamwork`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/teamwork']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/teamwork']['response']> {
  return {
    ver: 'beta',
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
    ver: 'beta',
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
  body: IEndpoints['PATCH /me/teamwork']['body'],
  params?: IEndpoints['PATCH /me/teamwork']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/teamwork']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/teamwork',
    paramDefs: [],
    params,
    body,
  };
}
