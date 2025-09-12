export * as user from './user';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/teams/userConfigurations/{teamsUserConfiguration-id}': Operation<
    '/admin/teams/userConfigurations/{teamsUserConfiguration-id}',
    'delete'
  >;
  'GET /admin/teams/userConfigurations': Operation<'/admin/teams/userConfigurations', 'get'>;
  'GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}': Operation<
    '/admin/teams/userConfigurations/{teamsUserConfiguration-id}',
    'get'
  >;
  'PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}': Operation<
    '/admin/teams/userConfigurations/{teamsUserConfiguration-id}',
    'patch'
  >;
  'POST /admin/teams/userConfigurations': Operation<'/admin/teams/userConfigurations', 'post'>;
}

/**
 * `DELETE /admin/teams/userConfigurations/{teamsUserConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/teams/userConfigurations/{teamsUserConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/teams/userConfigurations/{teamsUserConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/teams/userConfigurations/{teamsUserConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamsUserConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /admin/teams/userConfigurations`
 *
 * Get user configurations for all Teams users who belong to a tenant.
 */
export function list(
  params?: IEndpoints['GET /admin/teams/userConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /admin/teams/userConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/teams/userConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}`
 *
 * Read the Teams user configurations for a specific user using their ID (the user&#x27;s identifier).
 */
export function get(
  params?: IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/teams/userConfigurations/{teamsUserConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/teams/userConfigurations/{teamsUserConfiguration-id}',
    paramDefs: {
      path: ['teamsUserConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/teams/userConfigurations/{teamsUserConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/teams/userConfigurations/{teamsUserConfiguration-id}',
    paramDefs: {
      path: ['teamsUserConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/teams/userConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /admin/teams/userConfigurations']['body']
): EndpointRequest<IEndpoints['POST /admin/teams/userConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/teams/userConfigurations',
    body,
  };
}
