import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps',
    paramDefs: [
      { name: 'managedAppRegistration-id', in: 'path' },
      { name: 'managedAppPolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}
