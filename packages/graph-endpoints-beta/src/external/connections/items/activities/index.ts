import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    'delete'
  >;
  'GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    'get'
  >;
  'GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    'patch'
  >;
  'POST /external/connections/{externalConnection-id}/items/{externalItem-id}/activities': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    'post'
  >;
  'GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy',
    'get'
  >;
}

/**
 * `DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['externalConnection-id', 'externalItem-id', 'externalActivity-id'],
    },
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities`
 *
 * Returns a list of activities performed on the item. Write-only.
 */
export function list(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}`
 *
 * Returns a list of activities performed on the item. Write-only.
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id', 'externalActivity-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['body'],
  params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id', 'externalActivity-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /external/connections/{externalConnection-id}/items/{externalItem-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /external/connections/{externalConnection-id}/items/{externalItem-id}/activities']['body'],
  params?: IEndpoints['POST /external/connections/{externalConnection-id}/items/{externalItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /external/connections/{externalConnection-id}/items/{externalItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id'],
    },
    params,
    body,
  };
}

export const performedBy = {
  /**
   * `GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy`
   *
   * Represents an identity used to identify who is responsible for the activity.
   */
  get: function get(
    params?: IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['externalConnection-id', 'externalItem-id', 'externalActivity-id'],
      },
      params,
    };
  },
};
