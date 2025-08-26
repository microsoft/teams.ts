import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding': Operation<
    '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding',
    'post'
  >;
}

/**
 * `POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding`
 *
 * A request to start onboarding.  Must be coupled with the appropriate TeamViewer account information
 */
export function create(
  body: IEndpoints['POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding']['body'],
  params?: IEndpoints['POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}/beginOnboarding',
    paramDefs: [{ name: 'remoteAssistancePartner-id', in: 'path' }],
    params,
    body,
  };
}
