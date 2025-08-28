import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps': Operation<
    '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps',
    paramDefs: [{ name: 'managedAppPolicy-id', in: 'path' }],
    params,
    body,
  };
}
