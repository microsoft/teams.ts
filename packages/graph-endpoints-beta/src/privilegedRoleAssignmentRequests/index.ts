export * as roleInfo from './roleInfo';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}',
    'delete'
  >;
  'GET /privilegedRoleAssignmentRequests': Operation<'/privilegedRoleAssignmentRequests', 'get'>;
  'GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}',
    'get'
  >;
  'PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}',
    'patch'
  >;
  'POST /privilegedRoleAssignmentRequests': Operation<'/privilegedRoleAssignmentRequests', 'post'>;
  'POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel': Operation<
    '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel',
    'post'
  >;
}

/**
 * `DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedRoleAssignmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedRoleAssignmentRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedRoleAssignmentRequests']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedRoleAssignmentRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignmentRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}',
    paramDefs: {
      path: ['privilegedRoleAssignmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}',
    paramDefs: {
      path: ['privilegedRoleAssignmentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /privilegedRoleAssignmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoleAssignmentRequests']['body']
): EndpointRequest<IEndpoints['POST /privilegedRoleAssignmentRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoleAssignmentRequests',
    body,
  };
}

export const cancel = {
  /**
   * `POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel`
   *
   */
  create: function create(
    params?: IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}/cancel',
      paramDefs: {
        path: ['privilegedRoleAssignmentRequest-id'],
      },
      params,
    };
  },
};
