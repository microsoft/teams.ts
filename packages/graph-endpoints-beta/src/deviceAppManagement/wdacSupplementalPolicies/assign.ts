import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign']['body'],
  params?: IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign',
    paramDefs: [{ name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' }],
    params,
    body,
  };
}
