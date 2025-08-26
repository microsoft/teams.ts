export * as activeUsers from './activeUsers';
export * as authentications from './authentications';
export * as inactiveUsers from './inactiveUsers';
export * as inactiveUsersByApplication from './inactiveUsersByApplication';
export * as mfaCompletions from './mfaCompletions';
export * as mfaTelecomFraud from './mfaTelecomFraud';
export * as signUps from './signUps';
export * as summary from './summary';
export * as userCount from './userCount';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/userInsights/daily': Operation<'/reports/userInsights/daily', 'delete'>;
  'GET /reports/userInsights/daily': Operation<'/reports/userInsights/daily', 'get'>;
  'PATCH /reports/userInsights/daily': Operation<'/reports/userInsights/daily', 'patch'>;
}

/**
 * `DELETE /reports/userInsights/daily`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/userInsights/daily']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/userInsights/daily']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/userInsights/daily',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/userInsights/daily`
 *
 * Summaries of daily user activities on apps registered in your tenant that is configured for Microsoft Entra External ID for customers.
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/daily']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/daily']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/userInsights/daily`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/userInsights/daily']['body'],
  params?: IEndpoints['PATCH /reports/userInsights/daily']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/userInsights/daily']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/userInsights/daily',
    paramDefs: [],
    params,
    body,
  };
}
