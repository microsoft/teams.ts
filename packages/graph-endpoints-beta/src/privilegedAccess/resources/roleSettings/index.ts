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
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource',
    'get'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccess-id', 'governanceResource-id', 'governanceRoleSetting-id'],
    },
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
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceResource-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceResource-id', 'governanceRoleSetting-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceResource-id', 'governanceRoleSetting-id'],
    },
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
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceResource-id'],
    },
    params,
    body,
  };
}

export const resource = {
  /**
   * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource`
   *
   * Read-only. The associated resource for this role setting.
   */
  get: function get(
    params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccess-id', 'governanceResource-id', 'governanceRoleSetting-id'],
      },
      params,
    };
  },
};
