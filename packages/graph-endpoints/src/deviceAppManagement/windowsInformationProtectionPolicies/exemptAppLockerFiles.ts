import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles',
    'get'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'patch'
  >;
  'POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
 *
 * Deletes a windowsInformationProtectionAppLockerFile.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsInformationProtectionPolicy-id', in: 'path' },
      { name: 'windowsInformationProtectionAppLockerFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles`
 *
 * List properties and relationships of the windowsInformationProtectionAppLockerFile objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsInformationProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
 *
 * Read properties and relationships of the windowsInformationProtectionAppLockerFile object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsInformationProtectionPolicy-id', in: 'path' },
      { name: 'windowsInformationProtectionAppLockerFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
 *
 * Update the properties of a windowsInformationProtectionAppLockerFile object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    paramDefs: [
      { name: 'windowsInformationProtectionPolicy-id', in: 'path' },
      { name: 'windowsInformationProtectionAppLockerFile-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles`
 *
 * Create a new windowsInformationProtectionAppLockerFile object.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['body'],
  params?: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles',
    paramDefs: [{ name: 'windowsInformationProtectionPolicy-id', in: 'path' }],
    params,
    body,
  };
}
