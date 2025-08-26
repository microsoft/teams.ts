export * as assign from './assign';
export * as assignments from './assignments';
export * as deploySummary from './deploySummary';
export * as deviceStatuses from './deviceStatuses';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}',
    'delete'
  >;
  'GET /deviceAppManagement/wdacSupplementalPolicies': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies',
    'get'
  >;
  'GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}',
    'patch'
  >;
  'POST /deviceAppManagement/wdacSupplementalPolicies': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/wdacSupplementalPolicies`
 *
 * The collection of Windows Defender Application Control Supplemental Policies.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/wdacSupplementalPolicies',
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
 * `GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}`
 *
 * The collection of Windows Defender Application Control Supplemental Policies.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}',
    paramDefs: [{ name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/wdacSupplementalPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies']['body'],
  params?: IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/wdacSupplementalPolicies',
    paramDefs: [],
    params,
    body,
  };
}
