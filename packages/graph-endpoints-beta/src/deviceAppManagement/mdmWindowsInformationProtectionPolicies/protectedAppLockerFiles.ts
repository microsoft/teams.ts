import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles',
    'get'
  >;
  'GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' },
      { name: 'windowsInformationProtectionAppLockerFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles`
 *
 * Another way to input protected apps through xml files
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
 *
 * Another way to input protected apps through xml files
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' },
      { name: 'windowsInformationProtectionAppLockerFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    paramDefs: [
      { name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' },
      { name: 'windowsInformationProtectionAppLockerFile-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/protectedAppLockerFiles',
    paramDefs: [{ name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' }],
    params,
    body,
  };
}
