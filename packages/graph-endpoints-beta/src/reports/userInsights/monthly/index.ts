export * as activeUsers from './activeUsers';
export * as authentications from './authentications';
export * as inactiveUsers from './inactiveUsers';
export * as inactiveUsersByApplication from './inactiveUsersByApplication';
export * as mfaCompletions from './mfaCompletions';
export * as mfaRegisteredUsers from './mfaRegisteredUsers';
export * as requests from './requests';
export * as signUps from './signUps';
export * as summary from './summary';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/userInsights/monthly': Operation<'/reports/userInsights/monthly', 'delete'>;
  'GET /reports/userInsights/monthly': Operation<'/reports/userInsights/monthly', 'get'>;
  'PATCH /reports/userInsights/monthly': Operation<'/reports/userInsights/monthly', 'patch'>;
}

/**
 * `DELETE /reports/userInsights/monthly`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/userInsights/monthly']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/userInsights/monthly']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/userInsights/monthly',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/userInsights/monthly`
 *
 * Summaries of monthly user activities on apps registered in your tenant that is configured for Microsoft Entra External ID for customers.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/monthly']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/userInsights/monthly`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/userInsights/monthly']['body'],
  params?: IEndpoints['PATCH /reports/userInsights/monthly']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/userInsights/monthly']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/userInsights/monthly',
    paramDefs: [],
    params,
    body,
  };
}
