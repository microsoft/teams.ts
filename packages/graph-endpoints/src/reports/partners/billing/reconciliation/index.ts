import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners/billing/reconciliation': Operation<
    '/reports/partners/billing/reconciliation',
    'delete'
  >;
  'GET /reports/partners/billing/reconciliation': Operation<
    '/reports/partners/billing/reconciliation',
    'get'
  >;
  'PATCH /reports/partners/billing/reconciliation': Operation<
    '/reports/partners/billing/reconciliation',
    'patch'
  >;
  'GET /reports/partners/billing/reconciliation/billed': Operation<
    '/reports/partners/billing/reconciliation/billed',
    'get'
  >;
  'PATCH /reports/partners/billing/reconciliation/billed': Operation<
    '/reports/partners/billing/reconciliation/billed',
    'patch'
  >;
  'DELETE /reports/partners/billing/reconciliation/billed': Operation<
    '/reports/partners/billing/reconciliation/billed',
    'delete'
  >;
  'GET /reports/partners/billing/reconciliation/unbilled': Operation<
    '/reports/partners/billing/reconciliation/unbilled',
    'get'
  >;
  'PATCH /reports/partners/billing/reconciliation/unbilled': Operation<
    '/reports/partners/billing/reconciliation/unbilled',
    'patch'
  >;
  'DELETE /reports/partners/billing/reconciliation/unbilled': Operation<
    '/reports/partners/billing/reconciliation/unbilled',
    'delete'
  >;
}

/**
 * `DELETE /reports/partners/billing/reconciliation`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners/billing/reconciliation']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/partners/billing/reconciliation']['response']> {
  return {
    method: 'delete',
    path: '/reports/partners/billing/reconciliation',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /reports/partners/billing/reconciliation`
 *
 * Represents details for billed and unbilled invoice reconciliation data.
 */
export function get(
  params?: IEndpoints['GET /reports/partners/billing/reconciliation']['parameters']
): EndpointRequest<IEndpoints['GET /reports/partners/billing/reconciliation']['response']> {
  return {
    method: 'get',
    path: '/reports/partners/billing/reconciliation',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /reports/partners/billing/reconciliation`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners/billing/reconciliation']['body']
): EndpointRequest<IEndpoints['PATCH /reports/partners/billing/reconciliation']['response']> {
  return {
    method: 'patch',
    path: '/reports/partners/billing/reconciliation',
    body,
  };
}

export const billed = {
  /**
   * `GET /reports/partners/billing/reconciliation/billed`
   *
   * Represents details for billed invoice reconciliation data.
   */
  get: function get(
    params?: IEndpoints['GET /reports/partners/billing/reconciliation/billed']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/partners/billing/reconciliation/billed']['response']
  > {
    return {
      method: 'get',
      path: '/reports/partners/billing/reconciliation/billed',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/partners/billing/reconciliation/billed`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/partners/billing/reconciliation/billed']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/partners/billing/reconciliation/billed']['response']
  > {
    return {
      method: 'patch',
      path: '/reports/partners/billing/reconciliation/billed',
      body,
    };
  },
  /**
   * `DELETE /reports/partners/billing/reconciliation/billed`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/partners/billing/reconciliation/billed']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/partners/billing/reconciliation/billed']['response']
  > {
    return {
      method: 'delete',
      path: '/reports/partners/billing/reconciliation/billed',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const unbilled = {
  /**
   * `GET /reports/partners/billing/reconciliation/unbilled`
   *
   * Represents details for unbilled invoice reconciliation data.
   */
  get: function get(
    params?: IEndpoints['GET /reports/partners/billing/reconciliation/unbilled']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/partners/billing/reconciliation/unbilled']['response']
  > {
    return {
      method: 'get',
      path: '/reports/partners/billing/reconciliation/unbilled',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/partners/billing/reconciliation/unbilled`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/partners/billing/reconciliation/unbilled']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/partners/billing/reconciliation/unbilled']['response']
  > {
    return {
      method: 'patch',
      path: '/reports/partners/billing/reconciliation/unbilled',
      body,
    };
  },
  /**
   * `DELETE /reports/partners/billing/reconciliation/unbilled`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/partners/billing/reconciliation/unbilled']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/partners/billing/reconciliation/unbilled']['response']
  > {
    return {
      method: 'delete',
      path: '/reports/partners/billing/reconciliation/unbilled',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
