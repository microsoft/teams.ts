export * as resource from './resource';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleSettings/{governanceRoleSetting-id}': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}',
    'delete'
  >;
  'GET /governanceRoleSettings': Operation<'/governanceRoleSettings', 'get'>;
  'GET /governanceRoleSettings/{governanceRoleSetting-id}': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}',
    'get'
  >;
  'PATCH /governanceRoleSettings/{governanceRoleSetting-id}': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}',
    'patch'
  >;
  'POST /governanceRoleSettings': Operation<'/governanceRoleSettings', 'post'>;
}

/**
 * `DELETE /governanceRoleSettings/{governanceRoleSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleSettings/{governanceRoleSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleSettings/{governanceRoleSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleSettings/{governanceRoleSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceRoleSettings`
 *
 */
export function list(
  params?: IEndpoints['GET /governanceRoleSettings']['parameters']
): EndpointRequest<IEndpoints['GET /governanceRoleSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleSettings',
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
 * `GET /governanceRoleSettings/{governanceRoleSetting-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleSettings/{governanceRoleSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceRoleSettings/{governanceRoleSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleSettings/{governanceRoleSetting-id}']['body'],
  params?: IEndpoints['PATCH /governanceRoleSettings/{governanceRoleSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleSettings/{governanceRoleSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleSettings/{governanceRoleSetting-id}',
    paramDefs: [{ name: 'governanceRoleSetting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /governanceRoleSettings`
 *
 */
export function create(
  body: IEndpoints['POST /governanceRoleSettings']['body'],
  params?: IEndpoints['POST /governanceRoleSettings']['parameters']
): EndpointRequest<IEndpoints['POST /governanceRoleSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceRoleSettings',
    paramDefs: [],
    params,
    body,
  };
}
