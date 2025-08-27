import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks',
    paramDefs: [],
    params,
    body,
  };
}
