import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition': Operation<
    '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition',
    'delete'
  >;
  'GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition': Operation<
    '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition': Operation<
    '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition',
    'patch'
  >;
  'GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource': Operation<
    '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource',
    'get'
  >;
  'GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting': Operation<
    '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting',
    'get'
  >;
}

/**
 * `DELETE /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition',
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceResource-id', 'governanceRoleSetting-id'],
    },
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition`
 *
 * Read-only. The role definition that is enforced with this role setting.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition',
    paramDefs: {
      path: ['governanceResource-id', 'governanceRoleSetting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition']['body'],
  params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition',
    paramDefs: {
      path: ['governanceResource-id', 'governanceRoleSetting-id'],
    },
    params,
    body,
  };
}

export const resource = {
  /**
   * `GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource`
   *
   * Read-only. The associated resource for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id', 'governanceRoleSetting-id'],
      },
      params,
    };
  },
};

export const roleSetting = {
  /**
   * `GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting`
   *
   * The associated role setting for the role definition.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id', 'governanceRoleSetting-id'],
      },
      params,
    };
  },
};
