import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start`
 *
 * Start an existing synchronization job. If the job is in a paused state, it continues processing changes from the point where it was paused. If the job is in quarantine, the quarantine status is cleared. Don&#x27;t create scripts to call the start job continuously while it&#x27;s running because that can cause the service to stop running. Use the start job only when the job is currently paused or in quarantine.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/start',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
