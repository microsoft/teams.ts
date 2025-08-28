import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover`
 *
 * Discover the latest schema definition for provisioning to an application.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
      { name: 'directoryDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}
