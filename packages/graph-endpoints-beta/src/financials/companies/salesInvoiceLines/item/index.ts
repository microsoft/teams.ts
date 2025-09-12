export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item': Operation<
    '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item',
    'delete'
  >;
  'GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item': Operation<
    '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item': Operation<
    '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item',
    'patch'
  >;
  'GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory': Operation<
    '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory': Operation<
    '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory': Operation<
    '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory',
    'delete'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item',
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'salesInvoiceLine-id'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item',
    paramDefs: {
      path: ['company-id', 'salesInvoiceLine-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item',
    paramDefs: {
      path: ['company-id', 'salesInvoiceLine-id'],
    },
    params,
    body,
  };
}

export const itemCategory = {
  /**
   * `GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesInvoiceLine-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory',
      paramDefs: {
        path: ['company-id', 'salesInvoiceLine-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/itemCategory',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'salesInvoiceLine-id'],
      },
      params,
    };
  },
};
