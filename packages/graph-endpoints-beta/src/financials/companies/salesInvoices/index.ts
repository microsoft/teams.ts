export * as customer from './customer';
export * as salesInvoiceLines from './salesInvoiceLines';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesInvoices': Operation<
    '/financials/companies/{company-id}/salesInvoices',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel',
    'post'
  >;
  'POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend',
    'post'
  >;
  'GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency',
    'delete'
  >;
  'GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm',
    'delete'
  >;
  'POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post',
    'post'
  >;
  'POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend',
    'post'
  >;
  'POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send',
    'post'
  >;
  'GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod',
    'delete'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesInvoices`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoices']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/salesInvoices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesInvoices',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}',
    paramDefs: {
      path: ['company-id', 'salesInvoice-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}',
    paramDefs: {
      path: ['company-id', 'salesInvoice-id'],
    },
    params,
    body,
  };
}

export const cancel = {
  /**
   * `POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel`
   *
   */
  create: function create(
    params?: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancel',
      paramDefs: {
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
    };
  },
};

export const cancelAndSend = {
  /**
   * `POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend`
   *
   */
  create: function create(
    params?: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/cancelAndSend',
      paramDefs: {
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
    };
  },
};

export const currency = {
  /**
   * `GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency',
      paramDefs: {
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/currency',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
    };
  },
};

export const paymentTerm = {
  /**
   * `GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm',
      paramDefs: {
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/paymentTerm',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
    };
  },
};

export const post = {
  /**
   * `POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post`
   *
   */
  create: function create(
    params?: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post',
      paramDefs: {
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
    };
  },
};

export const postAndSend = {
  /**
   * `POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend`
   *
   */
  create: function create(
    params?: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/postAndSend',
      paramDefs: {
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
    };
  },
};

export const send = {
  /**
   * `POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send`
   *
   */
  create: function create(
    params?: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/send',
      paramDefs: {
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
    };
  },
};

export const shipmentMethod = {
  /**
   * `GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod',
      paramDefs: {
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/shipmentMethod',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'salesInvoice-id'],
      },
      params,
    };
  },
};
