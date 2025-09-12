import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    'delete'
  >;
  'GET /connections/{externalConnection-id}/items/{externalItem-id}/activities': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    'get'
  >;
  'GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    'patch'
  >;
  'POST /connections/{externalConnection-id}/items/{externalItem-id}/activities': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    'post'
  >;
  'GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy': Operation<
    '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy',
    'get'
  >;
}

/**
 * `DELETE /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['response']
> {
  return {
    method: 'delete',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['externalConnection-id', 'externalItem-id', 'externalActivity-id'],
    },
    params,
  };
}

/**
 * `GET /connections/{externalConnection-id}/items/{externalItem-id}/activities`
 *
 * Returns a list of activities performed on the item. Write-only.
 */
export function list(
  params?: IEndpoints['GET /connections/{externalConnection-id}/items/{externalItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /connections/{externalConnection-id}/items/{externalItem-id}/activities']['response']
> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}`
 *
 * Returns a list of activities performed on the item. Write-only.
 */
export function get(
  params?: IEndpoints['GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['response']
> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id', 'externalActivity-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['body'],
  params?: IEndpoints['PATCH /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}']['response']
> {
  return {
    method: 'patch',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id', 'externalActivity-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /connections/{externalConnection-id}/items/{externalItem-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /connections/{externalConnection-id}/items/{externalItem-id}/activities']['body'],
  params?: IEndpoints['POST /connections/{externalConnection-id}/items/{externalItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /connections/{externalConnection-id}/items/{externalItem-id}/activities']['response']
> {
  return {
    method: 'post',
    path: '/connections/{externalConnection-id}/items/{externalItem-id}/activities',
    paramDefs: {
      path: ['externalConnection-id', 'externalItem-id'],
    },
    params,
    body,
  };
}

export const performedBy = {
  /**
   * `GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy`
   *
   * Represents an identity used to identify who is responsible for the activity.
   */
  get: function get(
    params?: IEndpoints['GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy']['response']
  > {
    return {
      method: 'get',
      path: '/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['externalConnection-id', 'externalItem-id', 'externalActivity-id'],
      },
      params,
    };
  },
};
