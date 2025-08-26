import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation`
 *
 * Retry installation for the partner agents that failed to install on the Cloud PC. Service side checks which agent installation failed firstly and retry.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation']['body'],
  params?: IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/cloudPCs/{cloudPC-id}/retryPartnerAgentInstallation',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
    body,
  };
}
