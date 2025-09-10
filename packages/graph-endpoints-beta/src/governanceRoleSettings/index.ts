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
  'GET /governanceRoleSettings/{governanceRoleSetting-id}/resource': Operation<
    '/governanceRoleSettings/{governanceRoleSetting-id}/resource',
    'get'
  >;
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
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceRoleSetting-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['governanceRoleSetting-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['governanceRoleSetting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /governanceRoleSettings`
 *
 */
export function create(
  body: IEndpoints['POST /governanceRoleSettings']['body']
): EndpointRequest<IEndpoints['POST /governanceRoleSettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceRoleSettings',
    body,
  };
}

export const resource = {
  /**
   * `GET /governanceRoleSettings/{governanceRoleSetting-id}/resource`
   *
   * Read-only. The associated resource for this role setting.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleSettings/{governanceRoleSetting-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleSettings/{governanceRoleSetting-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleSetting-id'],
      },
      params,
    };
  },
};
