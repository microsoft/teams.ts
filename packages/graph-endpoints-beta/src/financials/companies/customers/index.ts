export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/customers/{customer-id}': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customers': Operation<
    '/financials/companies/{company-id}/customers',
    'get'
  >;
  'GET /financials/companies/{company-id}/customers/{customer-id}': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customers/{customer-id}': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/customers': Operation<
    '/financials/companies/{company-id}/customers',
    'post'
  >;
  'GET /financials/companies/{company-id}/customers/{customer-id}/currency': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/currency',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customers/{customer-id}/currency': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/currency',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/customers/{customer-id}/currency': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/currency',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customers/{customer-id}/paymentMethod': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/paymentMethod',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customers/{customer-id}/paymentMethod': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/paymentMethod',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/customers/{customer-id}/paymentMethod': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/paymentMethod',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customers/{customer-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/paymentTerm',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customers/{customer-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/paymentTerm',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/customers/{customer-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/paymentTerm',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/shipmentMethod',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/shipmentMethod',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/shipmentMethod',
    'delete'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/customers/{customer-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/customers/{customer-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/customers/{customer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/customers/{customer-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'customer-id'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/customers`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/customers']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/customers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customers',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/customers/{customer-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/customers/{customer-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/customers/{customer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customers/{customer-id}',
    paramDefs: {
      path: ['company-id', 'customer-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/customers/{customer-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/customers/{customer-id}',
    paramDefs: {
      path: ['company-id', 'customer-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/customers`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/customers']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/customers']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/customers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/customers',
    paramDefs: {
      path: ['company-id'],
    },
    params,
    body,
  };
}

export const currency = {
  /**
   * `GET /financials/companies/{company-id}/customers/{customer-id}/currency`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/customers/{customer-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/customers/{customer-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/customers/{customer-id}/currency',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'customer-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/customers/{customer-id}/currency`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/currency']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/customers/{customer-id}/currency',
      paramDefs: {
        path: ['company-id', 'customer-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/customers/{customer-id}/currency`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/customers/{customer-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/customers/{customer-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/customers/{customer-id}/currency',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'customer-id'],
      },
      params,
    };
  },
};

export const paymentMethod = {
  /**
   * `GET /financials/companies/{company-id}/customers/{customer-id}/paymentMethod`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/customers/{customer-id}/paymentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/customers/{customer-id}/paymentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/customers/{customer-id}/paymentMethod',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'customer-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/customers/{customer-id}/paymentMethod`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/paymentMethod']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/paymentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/paymentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/customers/{customer-id}/paymentMethod',
      paramDefs: {
        path: ['company-id', 'customer-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/customers/{customer-id}/paymentMethod`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/customers/{customer-id}/paymentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/customers/{customer-id}/paymentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/customers/{customer-id}/paymentMethod',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'customer-id'],
      },
      params,
    };
  },
};

export const paymentTerm = {
  /**
   * `GET /financials/companies/{company-id}/customers/{customer-id}/paymentTerm`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/customers/{customer-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/customers/{customer-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/customers/{customer-id}/paymentTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'customer-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/customers/{customer-id}/paymentTerm`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/paymentTerm']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/customers/{customer-id}/paymentTerm',
      paramDefs: {
        path: ['company-id', 'customer-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/customers/{customer-id}/paymentTerm`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/customers/{customer-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/customers/{customer-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/customers/{customer-id}/paymentTerm',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'customer-id'],
      },
      params,
    };
  },
};

export const shipmentMethod = {
  /**
   * `GET /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/customers/{customer-id}/shipmentMethod',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'customer-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/customers/{customer-id}/shipmentMethod',
      paramDefs: {
        path: ['company-id', 'customer-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/customers/{customer-id}/shipmentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/customers/{customer-id}/shipmentMethod',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'customer-id'],
      },
      params,
    };
  },
};
