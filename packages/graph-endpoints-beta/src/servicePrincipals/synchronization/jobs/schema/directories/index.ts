import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['servicePrincipal-id', 'synchronizationJob-id', 'directoryDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories`
 *
 * Contains the collection of directories and all of their objects.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
    paramDefs: {
      path: ['servicePrincipal-id', 'synchronizationJob-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}`
 *
 * Contains the collection of directories and all of their objects.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    paramDefs: {
      path: ['servicePrincipal-id', 'synchronizationJob-id', 'directoryDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    paramDefs: {
      path: ['servicePrincipal-id', 'synchronizationJob-id', 'directoryDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories`
 *
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
    paramDefs: {
      path: ['servicePrincipal-id', 'synchronizationJob-id'],
    },
    params,
    body,
  };
}

export const discover = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover`
   *
   * Discover the latest schema definition for provisioning to an application.
   */
  create: function create(
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover',
      paramDefs: {
        path: ['servicePrincipal-id', 'synchronizationJob-id', 'directoryDefinition-id'],
      },
      params,
    };
  },
};
