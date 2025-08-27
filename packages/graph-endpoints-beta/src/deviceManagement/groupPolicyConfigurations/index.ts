export * as assign from './assign';
export * as assignments from './assignments';
export * as definitionValues from './definitionValues';
export * as updateDefinitionValues from './updateDefinitionValues';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyConfigurations': Operation<
    '/deviceManagement/groupPolicyConfigurations',
    'get'
  >;
  'GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyConfigurations': Operation<
    '/deviceManagement/groupPolicyConfigurations',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyConfigurations`
 *
 * The group policy configurations created by this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/groupPolicyConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyConfigurations',
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
 * `GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}`
 *
 * The group policy configurations created by this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}',
    paramDefs: [{ name: 'groupPolicyConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyConfigurations']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyConfigurations']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/groupPolicyConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
