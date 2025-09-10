export * as presentations from './presentations';
export * as previousVersionDefinition from './previousVersionDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition',
    'patch'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category',
    'get'
  >;
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/definitionFile': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/definitionFile',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition',
    paramDefs: {
      header: ['If-Match'],
      path: ['groupPolicyDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition`
 *
 * Definition of the next version of this definition
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition',
    paramDefs: {
      path: ['groupPolicyDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition',
    paramDefs: {
      path: ['groupPolicyDefinition-id'],
    },
    params,
    body,
  };
}

export const category = {
  /**
   * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category`
   *
   * The group policy category associated with the definition.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category',
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
   * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/definitionFile`
   *
   * The group policy file associated with the definition.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/definitionFile']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/definitionFile']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/definitionFile',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyDefinition-id'],
      },
      params,
    };
  },
};
