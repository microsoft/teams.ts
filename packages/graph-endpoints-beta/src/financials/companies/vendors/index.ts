export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/vendors/{vendor-id}': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/vendors': Operation<
    '/financials/companies/{company-id}/vendors',
    'get'
  >;
  'GET /financials/companies/{company-id}/vendors/{vendor-id}': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/vendors/{vendor-id}': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/vendors': Operation<
    '/financials/companies/{company-id}/vendors',
    'post'
  >;
  'GET /financials/companies/{company-id}/vendors/{vendor-id}/currency': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}/currency',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/vendors/{vendor-id}/currency': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}/currency',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/vendors/{vendor-id}/currency': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}/currency',
    'delete'
  >;
  'GET /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod',
    'delete'
  >;
  'GET /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm',
    'delete'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/vendors/{vendor-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/vendors/{vendor-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/vendors/{vendor-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/vendors/{vendor-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'vendor-id'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/vendors`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/vendors']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/vendors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/vendors',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/vendors/{vendor-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/vendors/{vendor-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/vendors/{vendor-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/vendors/{vendor-id}',
    paramDefs: {
      path: ['company-id', 'vendor-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/vendors/{vendor-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/vendors/{vendor-id}',
    paramDefs: {
      path: ['company-id', 'vendor-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/vendors`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/vendors']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/vendors']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/vendors']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/vendors',
    paramDefs: {
      path: ['company-id'],
    },
    params,
    body,
  };
}

export const currency = {
  /**
   * `GET /financials/companies/{company-id}/vendors/{vendor-id}/currency`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/vendors/{vendor-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/vendors/{vendor-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/vendors/{vendor-id}/currency',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'vendor-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/vendors/{vendor-id}/currency`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}/currency']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/vendors/{vendor-id}/currency',
      paramDefs: {
        path: ['company-id', 'vendor-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/vendors/{vendor-id}/currency`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/vendors/{vendor-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/vendors/{vendor-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/vendors/{vendor-id}/currency',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'vendor-id'],
      },
      params,
    };
  },
};

export const paymentMethod = {
  /**
   * `GET /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'vendor-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod',
      paramDefs: {
        path: ['company-id', 'vendor-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'vendor-id'],
      },
      params,
    };
  },
};

export const paymentTerm = {
  /**
   * `GET /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'vendor-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm',
      paramDefs: {
        path: ['company-id', 'vendor-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/vendors/{vendor-id}/paymentTerm',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'vendor-id'],
      },
      params,
    };
  },
};
