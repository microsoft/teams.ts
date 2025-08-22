export * as confirmCompromised from './confirmCompromised';
export * as confirmSafe from './confirmSafe';
export * as dismiss from './dismiss';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /auditLogs/signIns/{signIn-id}': Operation<'/auditLogs/signIns/{signIn-id}', 'delete'>;
  'GET /auditLogs/signIns': Operation<'/auditLogs/signIns', 'get'>;
  'GET /auditLogs/signIns/{signIn-id}': Operation<'/auditLogs/signIns/{signIn-id}', 'get'>;
  'PATCH /auditLogs/signIns/{signIn-id}': Operation<'/auditLogs/signIns/{signIn-id}', 'patch'>;
  'POST /auditLogs/signIns': Operation<'/auditLogs/signIns', 'post'>;
}

/**
 * `DELETE /auditLogs/signIns/{signIn-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /auditLogs/signIns/{signIn-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /auditLogs/signIns/{signIn-id}']['response']> {
  return {
    method: 'delete',
    path: '/auditLogs/signIns/{signIn-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'signIn-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /auditLogs/signIns`
 *
 * Retrieve the Microsoft Entra user sign-ins for your tenant. Sign-ins that are interactive in nature (where a username/password is passed as part of auth token) and successful federated sign-ins are currently included in the sign-in logs.  The maximum and default page size is 1,000 objects and by default, the most recent sign-ins are returned first. Only sign-in events that occurred within the Microsoft Entra ID default retention period are available.
 */
export function list(
  params?: IEndpoints['GET /auditLogs/signIns']['parameters']
): EndpointRequest<IEndpoints['GET /auditLogs/signIns']['response']> {
  return {
    method: 'get',
    path: '/auditLogs/signIns',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /auditLogs/signIns/{signIn-id}`
 *
 * Retrieve a specific Microsoft Entra user sign-in event for your tenant. Sign-ins that are interactive in nature (where a username/password is passed as part of auth token) and successful federated sign-ins are currently included in the sign-in logs.
 */
export function get(
  params?: IEndpoints['GET /auditLogs/signIns/{signIn-id}']['parameters']
): EndpointRequest<IEndpoints['GET /auditLogs/signIns/{signIn-id}']['response']> {
  return {
    method: 'get',
    path: '/auditLogs/signIns/{signIn-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'signIn-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /auditLogs/signIns/{signIn-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /auditLogs/signIns/{signIn-id}']['body'],
  params?: IEndpoints['PATCH /auditLogs/signIns/{signIn-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /auditLogs/signIns/{signIn-id}']['response']> {
  return {
    method: 'patch',
    path: '/auditLogs/signIns/{signIn-id}',
    paramDefs: [{ name: 'signIn-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /auditLogs/signIns`
 *
 */
export function create(
  body: IEndpoints['POST /auditLogs/signIns']['body'],
  params?: IEndpoints['POST /auditLogs/signIns']['parameters']
): EndpointRequest<IEndpoints['POST /auditLogs/signIns']['response']> {
  return {
    method: 'post',
    path: '/auditLogs/signIns',
    paramDefs: [],
    params,
    body,
  };
}
