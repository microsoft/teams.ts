import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/enableEndpointPrivilegeManagement': Operation<
    '/deviceManagement/enableEndpointPrivilegeManagement',
    'post'
  >;
}

/**
 * `POST /deviceManagement/enableEndpointPrivilegeManagement`
 *
 * DEPRECATED - DO NOT USE. (Triggers onboarding of tenant to Microsoft Managed Platform - Cloud (MMP-C)).
 */
export function create(
  body: IEndpoints['POST /deviceManagement/enableEndpointPrivilegeManagement']['body'],
  params?: IEndpoints['POST /deviceManagement/enableEndpointPrivilegeManagement']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/enableEndpointPrivilegeManagement']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/enableEndpointPrivilegeManagement',
    paramDefs: [],
    params,
    body,
  };
}
