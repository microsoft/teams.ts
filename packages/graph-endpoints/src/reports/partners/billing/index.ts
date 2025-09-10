export * as reconciliation from './reconciliation';
export * as usage from './usage';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners/billing': Operation<'/reports/partners/billing', 'delete'>;
  'GET /reports/partners/billing': Operation<'/reports/partners/billing', 'get'>;
  'PATCH /reports/partners/billing': Operation<'/reports/partners/billing', 'patch'>;
  'GET /reports/partners/billing/manifests': Operation<
    '/reports/partners/billing/manifests',
    'get'
  >;
  'POST /reports/partners/billing/manifests': Operation<
    '/reports/partners/billing/manifests',
    'post'
  >;
  'GET /reports/partners/billing/manifests/{manifest-id}': Operation<
    '/reports/partners/billing/manifests/{manifest-id}',
    'get'
  >;
  'PATCH /reports/partners/billing/manifests/{manifest-id}': Operation<
    '/reports/partners/billing/manifests/{manifest-id}',
    'patch'
  >;
  'DELETE /reports/partners/billing/manifests/{manifest-id}': Operation<
    '/reports/partners/billing/manifests/{manifest-id}',
    'delete'
  >;
  'GET /reports/partners/billing/operations': Operation<
    '/reports/partners/billing/operations',
    'get'
  >;
  'POST /reports/partners/billing/operations': Operation<
    '/reports/partners/billing/operations',
    'post'
  >;
  'GET /reports/partners/billing/operations/{operation-id}': Operation<
    '/reports/partners/billing/operations/{operation-id}',
    'get'
  >;
  'PATCH /reports/partners/billing/operations/{operation-id}': Operation<
    '/reports/partners/billing/operations/{operation-id}',
    'patch'
  >;
  'DELETE /reports/partners/billing/operations/{operation-id}': Operation<
    '/reports/partners/billing/operations/{operation-id}',
    'delete'
  >;
}

/**
 * `DELETE /reports/partners/billing`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners/billing']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/partners/billing']['response']> {
  return {
    method: 'delete',
    path: '/reports/partners/billing',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /reports/partners/billing`
 *
 * Represents billing details for billed and unbilled data.
 */
export function get(
  params?: IEndpoints['GET /reports/partners/billing']['parameters']
): EndpointRequest<IEndpoints['GET /reports/partners/billing']['response']> {
  return {
    method: 'get',
    path: '/reports/partners/billing',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /reports/partners/billing`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners/billing']['body']
): EndpointRequest<IEndpoints['PATCH /reports/partners/billing']['response']> {
  return {
    method: 'patch',
    path: '/reports/partners/billing',
    body,
  };
}

export const manifests = {
  /**
   * `GET /reports/partners/billing/manifests`
   *
   * Read the properties and relationships of a manifest object.
   */
  list: function list(
    params?: IEndpoints['GET /reports/partners/billing/manifests']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/partners/billing/manifests']['response']> {
    return {
      method: 'get',
      path: '/reports/partners/billing/manifests',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/partners/billing/manifests`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/partners/billing/manifests']['body']
  ): EndpointRequest<IEndpoints['POST /reports/partners/billing/manifests']['response']> {
    return {
      method: 'post',
      path: '/reports/partners/billing/manifests',
      body,
    };
  },
  /**
   * `GET /reports/partners/billing/manifests/{manifest-id}`
   *
   * Read the properties and relationships of a manifest object.
   */
  get: function get(
    params?: IEndpoints['GET /reports/partners/billing/manifests/{manifest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/partners/billing/manifests/{manifest-id}']['response']
  > {
    return {
      method: 'get',
      path: '/reports/partners/billing/manifests/{manifest-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['manifest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/partners/billing/manifests/{manifest-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/partners/billing/manifests/{manifest-id}']['body'],
    params?: IEndpoints['PATCH /reports/partners/billing/manifests/{manifest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/partners/billing/manifests/{manifest-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/reports/partners/billing/manifests/{manifest-id}',
      paramDefs: {
        path: ['manifest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/partners/billing/manifests/{manifest-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/partners/billing/manifests/{manifest-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/partners/billing/manifests/{manifest-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/reports/partners/billing/manifests/{manifest-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['manifest-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /reports/partners/billing/operations`
   *
   * Read the properties and relationships of an operation object.
   */
  list: function list(
    params?: IEndpoints['GET /reports/partners/billing/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/partners/billing/operations']['response']> {
    return {
      method: 'get',
      path: '/reports/partners/billing/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/partners/billing/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/partners/billing/operations']['body']
  ): EndpointRequest<IEndpoints['POST /reports/partners/billing/operations']['response']> {
    return {
      method: 'post',
      path: '/reports/partners/billing/operations',
      body,
    };
  },
  /**
   * `GET /reports/partners/billing/operations/{operation-id}`
   *
   * Read the properties and relationships of an operation object.
   */
  get: function get(
    params?: IEndpoints['GET /reports/partners/billing/operations/{operation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/partners/billing/operations/{operation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/reports/partners/billing/operations/{operation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['operation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/partners/billing/operations/{operation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/partners/billing/operations/{operation-id}']['body'],
    params?: IEndpoints['PATCH /reports/partners/billing/operations/{operation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/partners/billing/operations/{operation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/reports/partners/billing/operations/{operation-id}',
      paramDefs: {
        path: ['operation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/partners/billing/operations/{operation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/partners/billing/operations/{operation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/partners/billing/operations/{operation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/reports/partners/billing/operations/{operation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['operation-id'],
      },
      params,
    };
  },
};
