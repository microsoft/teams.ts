export * as resource from './resource';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}',
    'delete'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}',
    'patch'
  >;
  'POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings',
    'post'
  >;
}

/**
 * `DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings`
 *
 * The collection of role settings for the resource.
 */
export function list(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings',
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
      { name: 'governanceResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}`
 *
 * The collection of role settings for the resource.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['body'],
  params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}',
    paramDefs: [
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceResource-id', in: 'path' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings']['body'],
  params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings',
    paramDefs: [
      { name: 'privilegedAccess-id', in: 'path' },
      { name: 'governanceResource-id', in: 'path' },
    ],
    params,
    body,
  };
}
