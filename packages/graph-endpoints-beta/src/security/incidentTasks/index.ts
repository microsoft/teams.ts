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
  'GET /security/incidentTasks/{incidentTask-id}/incident': Operation<
    '/security/incidentTasks/{incidentTask-id}/incident',
    'get'
  >;
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
    paramDefs: {
      header: ['If-Match'],
      path: ['incidentTask-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['incidentTask-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['incidentTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/incidentTasks`
 *
 */
export function create(
  body: IEndpoints['POST /security/incidentTasks']['body']
): EndpointRequest<IEndpoints['POST /security/incidentTasks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/incidentTasks',
    body,
  };
}

export const incident = {
  /**
   * `GET /security/incidentTasks/{incidentTask-id}/incident`
   *
   * Required. The incident that contains this task. Must contain a valid incident ID.
   */
  get: function get(
    params?: IEndpoints['GET /security/incidentTasks/{incidentTask-id}/incident']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/incidentTasks/{incidentTask-id}/incident']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/incidentTasks/{incidentTask-id}/incident',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['incidentTask-id'],
      },
      params,
    };
  },
};
