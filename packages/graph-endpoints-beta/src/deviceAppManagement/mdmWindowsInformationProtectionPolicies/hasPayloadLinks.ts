import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/hasPayloadLinks': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/hasPayloadLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies/hasPayloadLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/hasPayloadLinks',
    paramDefs: [],
    params,
    body,
  };
}
