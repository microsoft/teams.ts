export * as acceptanceStatuses from './acceptanceStatuses';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}',
    'delete'
  >;
  'GET /deviceManagement/termsAndConditions': Operation<
    '/deviceManagement/termsAndConditions',
    'get'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}',
    'get'
  >;
  'PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}',
    'patch'
  >;
  'POST /deviceManagement/termsAndConditions': Operation<
    '/deviceManagement/termsAndConditions',
    'post'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}`
 *
 * Deletes a termsAndConditions.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['termsAndConditions-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/termsAndConditions`
 *
 * List properties and relationships of the termsAndConditions objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/termsAndConditions']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/termsAndConditions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}`
 *
 * Read properties and relationships of the termsAndConditions object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}',
    paramDefs: {
      path: ['termsAndConditions-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}`
 *
 * Update the properties of a termsAndConditions object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}',
    paramDefs: {
      path: ['termsAndConditions-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/termsAndConditions`
 *
 * Create a new termsAndConditions object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/termsAndConditions']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/termsAndConditions']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/termsAndConditions',
    body,
  };
}

export const assignments = {
  /**
   * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments`
   *
   * List properties and relationships of the termsAndConditionsAssignment objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['termsAndConditions-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments`
   *
   * Create a new termsAndConditionsAssignment object.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments',
      paramDefs: {
        path: ['termsAndConditions-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}`
   *
   * Read properties and relationships of the termsAndConditionsAssignment object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['termsAndConditions-id', 'termsAndConditionsAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}`
   *
   * Update the properties of a termsAndConditionsAssignment object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}',
      paramDefs: {
        path: ['termsAndConditions-id', 'termsAndConditionsAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}`
   *
   * Deletes a termsAndConditionsAssignment.
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['termsAndConditions-id', 'termsAndConditionsAssignment-id'],
      },
      params,
    };
  },
};
