export * as approvalItems from './approvalItems';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/approval': Operation<'/solutions/approval', 'delete'>;
  'GET /solutions/approval': Operation<'/solutions/approval', 'get'>;
  'PATCH /solutions/approval': Operation<'/solutions/approval', 'patch'>;
  'GET /solutions/approval/operations': Operation<'/solutions/approval/operations', 'get'>;
  'POST /solutions/approval/operations': Operation<'/solutions/approval/operations', 'post'>;
  'GET /solutions/approval/operations/{approvalOperation-id}': Operation<
    '/solutions/approval/operations/{approvalOperation-id}',
    'get'
  >;
  'PATCH /solutions/approval/operations/{approvalOperation-id}': Operation<
    '/solutions/approval/operations/{approvalOperation-id}',
    'patch'
  >;
  'DELETE /solutions/approval/operations/{approvalOperation-id}': Operation<
    '/solutions/approval/operations/{approvalOperation-id}',
    'delete'
  >;
  'POST /solutions/approval/provision': Operation<'/solutions/approval/provision', 'post'>;
}

/**
 * `DELETE /solutions/approval`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/approval']['parameters']
): EndpointRequest<IEndpoints['DELETE /solutions/approval']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/approval',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /solutions/approval`
 *
 * Read the properties of an approvalSolution object to determine the provisioning state for a tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/approval']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/approval']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/approval',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/approval`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/approval']['body']
): EndpointRequest<IEndpoints['PATCH /solutions/approval']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/approval',
    body,
  };
}

export const operations = {
  /**
   * `GET /solutions/approval/operations`
   *
   * Read the properties and relationships of an approvalOperation object.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/approval/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /solutions/approval/operations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/approval/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/approval/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/approval/operations']['body']
  ): EndpointRequest<IEndpoints['POST /solutions/approval/operations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/approval/operations',
      body,
    };
  },
  /**
   * `GET /solutions/approval/operations/{approvalOperation-id}`
   *
   * Read the properties and relationships of an approvalOperation object.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/approval/operations/{approvalOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/approval/operations/{approvalOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/approval/operations/{approvalOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['approvalOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/approval/operations/{approvalOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/approval/operations/{approvalOperation-id}']['body'],
    params?: IEndpoints['PATCH /solutions/approval/operations/{approvalOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/approval/operations/{approvalOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/solutions/approval/operations/{approvalOperation-id}',
      paramDefs: {
        path: ['approvalOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/approval/operations/{approvalOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/approval/operations/{approvalOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/approval/operations/{approvalOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/solutions/approval/operations/{approvalOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['approvalOperation-id'],
      },
      params,
    };
  },
};

export const provision = {
  /**
   * `POST /solutions/approval/provision`
   *
   * Provision an approvalSolution on behalf of a tenant.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /solutions/approval/provision']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/approval/provision',
    };
  },
};
