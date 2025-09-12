import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners/billing/usage': Operation<'/reports/partners/billing/usage', 'delete'>;
  'GET /reports/partners/billing/usage': Operation<'/reports/partners/billing/usage', 'get'>;
  'PATCH /reports/partners/billing/usage': Operation<'/reports/partners/billing/usage', 'patch'>;
  'GET /reports/partners/billing/usage/billed': Operation<
    '/reports/partners/billing/usage/billed',
    'get'
  >;
  'PATCH /reports/partners/billing/usage/billed': Operation<
    '/reports/partners/billing/usage/billed',
    'patch'
  >;
  'DELETE /reports/partners/billing/usage/billed': Operation<
    '/reports/partners/billing/usage/billed',
    'delete'
  >;
  'GET /reports/partners/billing/usage/unbilled': Operation<
    '/reports/partners/billing/usage/unbilled',
    'get'
  >;
  'PATCH /reports/partners/billing/usage/unbilled': Operation<
    '/reports/partners/billing/usage/unbilled',
    'patch'
  >;
  'DELETE /reports/partners/billing/usage/unbilled': Operation<
    '/reports/partners/billing/usage/unbilled',
    'delete'
  >;
}

/**
 * `DELETE /reports/partners/billing/usage`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners/billing/usage']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/partners/billing/usage']['response']> {
  return {
    method: 'delete',
    path: '/reports/partners/billing/usage',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /reports/partners/billing/usage`
 *
 * Represents details for billed and unbilled Azure usage data.
 */
export function get(
  params?: IEndpoints['GET /reports/partners/billing/usage']['parameters']
): EndpointRequest<IEndpoints['GET /reports/partners/billing/usage']['response']> {
  return {
    method: 'get',
    path: '/reports/partners/billing/usage',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /reports/partners/billing/usage`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners/billing/usage']['body']
): EndpointRequest<IEndpoints['PATCH /reports/partners/billing/usage']['response']> {
  return {
    method: 'patch',
    path: '/reports/partners/billing/usage',
    body,
  };
}

export const billed = {
  /**
   * `GET /reports/partners/billing/usage/billed`
   *
   * Represents details for billed Azure usage data.
   */
  get: function get(
    params?: IEndpoints['GET /reports/partners/billing/usage/billed']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/partners/billing/usage/billed']['response']> {
    return {
      method: 'get',
      path: '/reports/partners/billing/usage/billed',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/partners/billing/usage/billed`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/partners/billing/usage/billed']['body']
  ): EndpointRequest<IEndpoints['PATCH /reports/partners/billing/usage/billed']['response']> {
    return {
      method: 'patch',
      path: '/reports/partners/billing/usage/billed',
      body,
    };
  },
  /**
   * `DELETE /reports/partners/billing/usage/billed`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/partners/billing/usage/billed']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /reports/partners/billing/usage/billed']['response']> {
    return {
      method: 'delete',
      path: '/reports/partners/billing/usage/billed',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const unbilled = {
  /**
   * `GET /reports/partners/billing/usage/unbilled`
   *
   * Represents details for unbilled Azure usage data.
   */
  get: function get(
    params?: IEndpoints['GET /reports/partners/billing/usage/unbilled']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/partners/billing/usage/unbilled']['response']> {
    return {
      method: 'get',
      path: '/reports/partners/billing/usage/unbilled',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/partners/billing/usage/unbilled`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/partners/billing/usage/unbilled']['body']
  ): EndpointRequest<IEndpoints['PATCH /reports/partners/billing/usage/unbilled']['response']> {
    return {
      method: 'patch',
      path: '/reports/partners/billing/usage/unbilled',
      body,
    };
  },
  /**
   * `DELETE /reports/partners/billing/usage/unbilled`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/partners/billing/usage/unbilled']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /reports/partners/billing/usage/unbilled']['response']> {
    return {
      method: 'delete',
      path: '/reports/partners/billing/usage/unbilled',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
