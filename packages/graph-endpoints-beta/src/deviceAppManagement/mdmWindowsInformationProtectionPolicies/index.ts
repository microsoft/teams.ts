export * as assignments from './assignments';
export * as exemptAppLockerFiles from './exemptAppLockerFiles';
export * as hasPayloadLinks from './hasPayloadLinks';
export * as protectedAppLockerFiles from './protectedAppLockerFiles';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies',
    'get'
  >;
  'GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies`
 *
 * Windows information protection for apps running on devices which are MDM enrolled.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies',
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
 * `GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}`
 *
 * Windows information protection for apps running on devices which are MDM enrolled.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}',
    paramDefs: [{ name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies',
    paramDefs: [],
    params,
    body,
  };
}
