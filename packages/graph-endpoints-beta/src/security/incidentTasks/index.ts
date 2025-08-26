export * as incident from './incident';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/incidentTasks/{incidentTask-id}': Operation<
    '/security/incidentTasks/{incidentTask-id}',
    'delete'
  >;
  'GET /security/incidentTasks': Operation<'/security/incidentTasks', 'get'>;
  'GET /security/incidentTasks/{incidentTask-id}': Operation<
    '/security/incidentTasks/{incidentTask-id}',
    'get'
  >;
  'PATCH /security/incidentTasks/{incidentTask-id}': Operation<
    '/security/incidentTasks/{incidentTask-id}',
    'patch'
  >;
  'POST /security/incidentTasks': Operation<'/security/incidentTasks', 'post'>;
}

/**
 * `DELETE /security/incidentTasks/{incidentTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/incidentTasks/{incidentTask-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/incidentTasks/{incidentTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/incidentTasks/{incidentTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'incidentTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/incidentTasks`
 *
 * Get incident tasks that Microsoft Defender Experts for XDR identified for remediation.
 */
export function list(
  params?: IEndpoints['GET /security/incidentTasks']['parameters']
): EndpointRequest<IEndpoints['GET /security/incidentTasks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/incidentTasks',
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
 * `GET /security/incidentTasks/{incidentTask-id}`
 *
 * A collection of tasks associated with security incidents.
 */
export function get(
  params?: IEndpoints['GET /security/incidentTasks/{incidentTask-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/incidentTasks/{incidentTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/incidentTasks/{incidentTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'incidentTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/incidentTasks/{incidentTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/incidentTasks/{incidentTask-id}']['body'],
  params?: IEndpoints['PATCH /security/incidentTasks/{incidentTask-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/incidentTasks/{incidentTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/incidentTasks/{incidentTask-id}',
    paramDefs: [{ name: 'incidentTask-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/incidentTasks`
 *
 */
export function create(
  body: IEndpoints['POST /security/incidentTasks']['body'],
  params?: IEndpoints['POST /security/incidentTasks']['parameters']
): EndpointRequest<IEndpoints['POST /security/incidentTasks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/incidentTasks',
    paramDefs: [],
    params,
    body,
  };
}
