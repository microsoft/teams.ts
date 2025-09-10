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
  'GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource': Operation<
    '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource',
    'get'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceResource-id', 'governanceRoleSetting-id'],
    },
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
    paramDefs: {
      path: ['governanceResource-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['governanceResource-id', 'governanceRoleSetting-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['governanceResource-id', 'governanceRoleSetting-id'],
    },
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
    paramDefs: {
      path: ['governanceResource-id'],
    },
    params,
    body,
  };
}

export const resource = {
  /**
   * `GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource`
   *
   * Read-only. The associated resource for this role setting.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id', 'governanceRoleSetting-id'],
      },
      params,
    };
  },
};
