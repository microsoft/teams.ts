import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary',
    'delete'
  >;
  'GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary',
    'get'
  >;
  'PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary`
 *
 * WindowsDefenderApplicationControl supplemental policy deployment summary.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary',
    paramDefs: [{ name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' }],
    params,
    body,
  };
}
