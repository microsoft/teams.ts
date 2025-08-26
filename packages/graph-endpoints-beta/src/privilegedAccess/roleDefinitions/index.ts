export * as resource from './resource';
export * as roleSetting from './roleSetting';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}',
    'delete'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleDefinitions',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}',
    'patch'
  >;
  'POST /privilegedAccess/{privilegedAccess-id}/roleDefinitions': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleDefinitions',
    'post'
  >;
}

/**
 * `DELETE /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions`
 *
 * A collection of role definitions for the provider.
 */
export function list(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleDefinitions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedAccess-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}`
 *
 * A collection of role definitions for the provider.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedAccess/{privilegedAccess-id}/roleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: [
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceRoleDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /privilegedAccess/{privilegedAccess-id}/roleDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleDefinitions']['body'],
  params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedAccess/{privilegedAccess-id}/roleDefinitions',
    paramDefs: [{ name: 'privilegedAccess-id', in: 'path' }],
    params,
    body,
  };
}
