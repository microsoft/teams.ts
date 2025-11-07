import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}': Operation<
    '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/policies': Operation<
    '/identity/conditionalAccess/policies',
    'get'
  >;
  'GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}': Operation<
    '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}': Operation<
    '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/policies': Operation<
    '/identity/conditionalAccess/policies',
    'post'
  >;
  'POST /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}/restore': Operation<
    '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}/restore',
    'post'
  >;
}

/**
 * `DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}`
 *
 * Delete a conditionalAccessPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['conditionalAccessPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/policies`
 *
 * Retrieve a list of conditionalAccessPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/policies']['parameters']
): EndpointRequest<IEndpoints['GET /identity/conditionalAccess/policies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/policies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}`
 *
 * Retrieve the properties and relationships of a conditionalAccessPolicy object.
 */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    paramDefs: {
      path: ['conditionalAccessPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}`
 *
 * Update the properties of a conditionalAccessPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}',
    paramDefs: {
      path: ['conditionalAccessPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/policies`
 *
 * Create a new conditionalAccessPolicy.
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/policies']['body']
): EndpointRequest<IEndpoints['POST /identity/conditionalAccess/policies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/conditionalAccess/policies',
    body,
  };
}

export const restore = {
  /**
   * `POST /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}/restore`
   *
   * Restore a deleted conditionalAccessPolicy object.
   */
  create: function create(
    params?: IEndpoints['POST /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/conditionalAccess/policies/{conditionalAccessPolicy-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/conditionalAccess/policies/{conditionalAccessPolicy-id}/restore',
      paramDefs: {
        path: ['conditionalAccessPolicy-id'],
      },
      params,
    };
  },
};
