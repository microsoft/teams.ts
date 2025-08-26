import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation': Operation<
    '/me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation',
    'post'
  >;
}

/**
 * `POST /me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation`
 *
 * Retry installation for the partner agents that failed to install on the Cloud PC. Service side checks which agent installation failed firstly and retry.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation']['body'],
  params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
