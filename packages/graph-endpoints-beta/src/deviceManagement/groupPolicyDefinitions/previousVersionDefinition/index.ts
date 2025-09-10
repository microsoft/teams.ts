export * as nextVersionDefinition from './nextVersionDefinition';
export * as presentations from './presentations';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition',
    'patch'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category',
    'get'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/definitionFile': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/definitionFile',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition',
    paramDefs: {
      header: ['If-Match'],
      path: ['groupPolicyDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition`
 *
 * Definition of the previous version of this definition
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition',
    paramDefs: {
      path: ['groupPolicyDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition',
    paramDefs: {
      path: ['groupPolicyDefinition-id'],
    },
    params,
    body,
  };
}

export const category = {
  /**
   * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category`
   *
   * The group policy category associated with the definition.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyDefinition-id'],
      },
      params,
    };
  },
};

export const definitionFile = {
  /**
   * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/definitionFile`
   *
   * The group policy file associated with the definition.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/definitionFile']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/definitionFile']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/definitionFile',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyDefinition-id'],
      },
      params,
    };
  },
};
