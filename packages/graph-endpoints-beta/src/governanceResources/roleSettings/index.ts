export * as resource from './resource';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}',
    'delete'
  >;
  'GET /governanceResources/{governanceResource-id}/roleSettings': Operation<
    '/governanceResources/{governanceResource-id}/roleSettings',
    'get'
  >;
  'GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}',
    'patch'
  >;
  'POST /governanceResources/{governanceResource-id}/roleSettings': Operation<
    '/governanceResources/{governanceResource-id}/roleSettings',
    'post'
  >;
}

/**
 * `DELETE /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleSettings`
 *
 * The collection of role settings for the resource.
 */
export function list(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleSettings',
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
 * `GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}`
 *
 * The collection of role settings for the resource.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['body'],
  params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}',
    paramDefs: [
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /governanceResources/{governanceResource-id}/roleSettings`
 *
 */
export function create(
  body: IEndpoints['POST /governanceResources/{governanceResource-id}/roleSettings']['body'],
  params?: IEndpoints['POST /governanceResources/{governanceResource-id}/roleSettings']['parameters']
): EndpointRequest<
  IEndpoints['POST /governanceResources/{governanceResource-id}/roleSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceResources/{governanceResource-id}/roleSettings',
    paramDefs: [{ name: 'governanceResource-id', in: 'path' }],
    params,
    body,
  };
}
