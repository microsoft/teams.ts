import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/{cloudPC-id}/endGracePeriod': Operation<
    '/me/cloudPCs/{cloudPC-id}/endGracePeriod',
    'post'
  >;
}

/**
 * `POST /me/cloudPCs/{cloudPC-id}/endGracePeriod`
 *
 * End the grace period for a specific Cloud PC. The grace period is triggered when the Cloud PC license is removed or the provisioning policy is unassigned. It allows users to access Cloud PCs for up to seven days before deprovisioning occurs. Ending the grace period immediately deprovisions the Cloud PC without waiting the seven days.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/endGracePeriod']['body'],
  params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/endGracePeriod']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/endGracePeriod']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/{cloudPC-id}/endGracePeriod',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
