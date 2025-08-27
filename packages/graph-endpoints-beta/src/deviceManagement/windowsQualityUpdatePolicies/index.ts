export * as assign from './assign';
export * as assignments from './assignments';
export * as bulkAction from './bulkAction';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsQualityUpdatePolicies': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies',
    'get'
  >;
  'GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsQualityUpdatePolicies': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsQualityUpdatePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsQualityUpdatePolicies`
 *
 * A collection of Windows quality update policies
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsQualityUpdatePolicies',
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
 * `GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}`
 *
 * A collection of Windows quality update policies
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsQualityUpdatePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}',
    paramDefs: [{ name: 'windowsQualityUpdatePolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsQualityUpdatePolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsQualityUpdatePolicies',
    paramDefs: [],
    params,
    body,
  };
}
