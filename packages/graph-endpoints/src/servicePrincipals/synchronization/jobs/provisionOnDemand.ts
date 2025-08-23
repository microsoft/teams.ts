import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand`
 *
 * Select a user and provision the account on-demand. The rate limit for this API is 5 requests per 10 seconds.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
