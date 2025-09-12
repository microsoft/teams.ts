import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    'delete'
  >;
  'GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
    'get'
  >;
  'GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    'get'
  >;
  'PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    'patch'
  >;
  'POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
    'post'
  >;
  'POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover',
    'post'
  >;
}

/**
 * `DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['application-id', 'synchronizationJob-id', 'directoryDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories`
 *
 * Contains the collection of directories and all of their objects.
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
    paramDefs: {
      path: ['application-id', 'synchronizationJob-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}`
 *
 * Contains the collection of directories and all of their objects.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    paramDefs: {
      path: ['application-id', 'synchronizationJob-id', 'directoryDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['body'],
  params?: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    paramDefs: {
      path: ['application-id', 'synchronizationJob-id', 'directoryDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories`
 *
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['body'],
  params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['response']
> {
  return {
    method: 'post',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
    paramDefs: {
      path: ['application-id', 'synchronizationJob-id'],
    },
    params,
    body,
  };
}

export const discover = {
  /**
   * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover`
   *
   * Discover the latest schema definition for provisioning to an application.
   */
  create: function create(
    params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover']['response']
  > {
    return {
      method: 'post',
      path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover',
      paramDefs: {
        path: ['application-id', 'synchronizationJob-id', 'directoryDefinition-id'],
      },
      params,
    };
  },
};
