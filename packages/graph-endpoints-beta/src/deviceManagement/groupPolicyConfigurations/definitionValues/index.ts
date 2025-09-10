export * as presentationValues from './presentationValues';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues',
    'get'
  >;
  'GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues',
    'post'
  >;
  'GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['groupPolicyConfiguration-id', 'groupPolicyDefinitionValue-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues`
 *
 * The list of enabled or disabled group policy definition values for the configuration.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues',
    paramDefs: {
      path: ['groupPolicyConfiguration-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}`
 *
 * The list of enabled or disabled group policy definition values for the configuration.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}',
    paramDefs: {
      path: ['groupPolicyConfiguration-id', 'groupPolicyDefinitionValue-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}',
    paramDefs: {
      path: ['groupPolicyConfiguration-id', 'groupPolicyDefinitionValue-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues',
    paramDefs: {
      path: ['groupPolicyConfiguration-id'],
    },
    params,
    body,
  };
}

export const definition = {
  /**
   * `GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition`
   *
   * The associated group policy definition with the value.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['groupPolicyConfiguration-id', 'groupPolicyDefinitionValue-id'],
      },
      params,
    };
  },
};
