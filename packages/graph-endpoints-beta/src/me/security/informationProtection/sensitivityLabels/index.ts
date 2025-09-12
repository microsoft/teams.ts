import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /me/security/informationProtection/sensitivityLabels': Operation<
    '/me/security/informationProtection/sensitivityLabels',
    'get'
  >;
  'GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /me/security/informationProtection/sensitivityLabels': Operation<
    '/me/security/informationProtection/sensitivityLabels',
    'post'
  >;
  'GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'get'
  >;
  'PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'patch'
  >;
  'DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'delete'
  >;
}

/**
 * `DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sensitivityLabel-id'],
    },
    params,
  };
}

/**
 * `GET /me/security/informationProtection/sensitivityLabels`
 *
 * Read the Microsoft Purview Information Protection labels for the user or organization.
 */
export function list(
  params?: IEndpoints['GET /me/security/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/security/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/security/informationProtection/sensitivityLabels',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 * Read the Microsoft Purview Information Protection labels for the user or organization.
 */
export function get(
  params?: IEndpoints['GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['sensitivityLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['sensitivityLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/security/informationProtection/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /me/security/informationProtection/sensitivityLabels']['body']
): EndpointRequest<
  IEndpoints['POST /me/security/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/security/informationProtection/sensitivityLabels',
    body,
  };
}

export const parent = {
  /**
   * `GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sensitivityLabel-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['body'],
    params?: IEndpoints['PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
      paramDefs: {
        path: ['sensitivityLabel-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
      paramDefs: {
        header: ['If-Match'],
        path: ['sensitivityLabel-id'],
      },
      params,
    };
  },
};
