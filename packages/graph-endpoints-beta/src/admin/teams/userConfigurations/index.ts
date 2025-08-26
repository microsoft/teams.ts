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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamsUserConfiguration-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamsUserConfiguration-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'teamsUserConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/teams/userConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /admin/teams/userConfigurations']['body'],
  params?: IEndpoints['POST /admin/teams/userConfigurations']['parameters']
): EndpointRequest<IEndpoints['POST /admin/teams/userConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/teams/userConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
