export * as resource from './resource';
export * as roleSetting from './roleSetting';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}',
    'delete'
  >;
  'GET /governanceResources/{governanceResource-id}/roleDefinitions': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions',
    'get'
  >;
  'GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}',
    'patch'
  >;
  'POST /governanceResources/{governanceResource-id}/roleDefinitions': Operation<
    '/governanceResources/{governanceResource-id}/roleDefinitions',
    'post'
  >;
}

/**
 * `DELETE /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleDefinitions`
 *
 * The collection of role definitions for the resource.
 */
export function list(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleDefinitions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}`
 *
 * The collection of role definitions for the resource.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: [
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /governanceResources/{governanceResource-id}/roleDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /governanceResources/{governanceResource-id}/roleDefinitions']['body'],
  params?: IEndpoints['POST /governanceResources/{governanceResource-id}/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /governanceResources/{governanceResource-id}/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceResources/{governanceResource-id}/roleDefinitions',
    paramDefs: [{ name: 'governanceResource-id', in: 'path' }],
    params,
    body,
  };
}
