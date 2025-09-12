export * as roleInfo from './roleInfo';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}',
    'delete'
  >;
  'GET /privilegedRoleAssignments': Operation<'/privilegedRoleAssignments', 'get'>;
  'GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}',
    'get'
  >;
  'PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}',
    'patch'
  >;
  'POST /privilegedRoleAssignments': Operation<'/privilegedRoleAssignments', 'post'>;
  'POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible',
    'post'
  >;
  'POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent': Operation<
    '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent',
    'post'
  >;
}

/**
 * `DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedRoleAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedRoleAssignments`
 *
 */
export function list(
  params?: IEndpoints['GET /privilegedRoleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /privilegedRoleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignments',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}',
    paramDefs: {
      path: ['privilegedRoleAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedRoleAssignments/{privilegedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}',
    paramDefs: {
      path: ['privilegedRoleAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /privilegedRoleAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedRoleAssignments']['body']
): EndpointRequest<IEndpoints['POST /privilegedRoleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedRoleAssignments',
    body,
  };
}

export const makeEligible = {
  /**
   * `POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible`
   *
   */
  create: function create(
    params?: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/makeEligible',
      paramDefs: {
        path: ['privilegedRoleAssignment-id'],
      },
      params,
    };
  },
};

export const makePermanent = {
  /**
   * `POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent`
   *
   */
  create: function create(
    body: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent']['body'],
    params?: IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedRoleAssignments/{privilegedRoleAssignment-id}/makePermanent',
      paramDefs: {
        path: ['privilegedRoleAssignment-id'],
      },
      params,
      body,
    };
  },
};
