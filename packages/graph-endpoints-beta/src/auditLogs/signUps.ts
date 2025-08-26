import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /auditLogs/signUps/{selfServiceSignUp-id}': Operation<
    '/auditLogs/signUps/{selfServiceSignUp-id}',
    'delete'
  >;
  'GET /auditLogs/signUps': Operation<'/auditLogs/signUps', 'get'>;
  'GET /auditLogs/signUps/{selfServiceSignUp-id}': Operation<
    '/auditLogs/signUps/{selfServiceSignUp-id}',
    'get'
  >;
  'PATCH /auditLogs/signUps/{selfServiceSignUp-id}': Operation<
    '/auditLogs/signUps/{selfServiceSignUp-id}',
    'patch'
  >;
  'POST /auditLogs/signUps': Operation<'/auditLogs/signUps', 'post'>;
}

/**
 * `DELETE /auditLogs/signUps/{selfServiceSignUp-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /auditLogs/signUps/{selfServiceSignUp-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /auditLogs/signUps/{selfServiceSignUp-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/auditLogs/signUps/{selfServiceSignUp-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'selfServiceSignUp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /auditLogs/signUps`
 *
 * Retrieve the Microsoft Entra External ID user selfServiceSignUps events for your tenant.  The maximum and default page size is 1,000 objects and by default, the most recent sign-ups are returned first. Only sign-up events that occurred within the Microsoft Entra ID default retention period are available.
 */
export function list(
  params?: IEndpoints['GET /auditLogs/signUps']['parameters']
): EndpointRequest<IEndpoints['GET /auditLogs/signUps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs/signUps',
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
 * `GET /auditLogs/signUps/{selfServiceSignUp-id}`
 *
 * Retrieve a specific Microsoft Entra External ID user selfServiceSignUp event for your tenant.
 */
export function get(
  params?: IEndpoints['GET /auditLogs/signUps/{selfServiceSignUp-id}']['parameters']
): EndpointRequest<IEndpoints['GET /auditLogs/signUps/{selfServiceSignUp-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs/signUps/{selfServiceSignUp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'selfServiceSignUp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /auditLogs/signUps/{selfServiceSignUp-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /auditLogs/signUps/{selfServiceSignUp-id}']['body'],
  params?: IEndpoints['PATCH /auditLogs/signUps/{selfServiceSignUp-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /auditLogs/signUps/{selfServiceSignUp-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/auditLogs/signUps/{selfServiceSignUp-id}',
    paramDefs: [{ name: 'selfServiceSignUp-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /auditLogs/signUps`
 *
 */
export function create(
  body: IEndpoints['POST /auditLogs/signUps']['body'],
  params?: IEndpoints['POST /auditLogs/signUps']['parameters']
): EndpointRequest<IEndpoints['POST /auditLogs/signUps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/auditLogs/signUps',
    paramDefs: [],
    params,
    body,
  };
}
