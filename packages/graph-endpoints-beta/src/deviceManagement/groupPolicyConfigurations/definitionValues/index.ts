export * as definition from './definition';
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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyConfiguration-id', in: 'path' },
      { name: 'groupPolicyDefinitionValue-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyConfiguration-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyConfiguration-id', in: 'path' },
      { name: 'groupPolicyDefinitionValue-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'groupPolicyConfiguration-id', in: 'path' },
      { name: 'groupPolicyDefinitionValue-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'groupPolicyConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
