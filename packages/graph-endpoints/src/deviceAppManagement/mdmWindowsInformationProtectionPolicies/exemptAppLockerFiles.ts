import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles',
    'get'
  >;
  'GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' },
      { name: 'windowsInformationProtectionAppLockerFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles`
 *
 * Another way to input exempt apps through xml files
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles',
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
 * `GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
 *
 * Another way to input exempt apps through xml files
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
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
 * `PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    paramDefs: [
      { name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' },
      { name: 'windowsInformationProtectionAppLockerFile-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}/exemptAppLockerFiles',
    paramDefs: [{ name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' }],
    params,
    body,
  };
}
