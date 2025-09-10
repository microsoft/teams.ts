export * as customer from './customer';
export * as salesCreditMemoLines from './salesCreditMemoLines';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesCreditMemos': Operation<
    '/financials/companies/{company-id}/salesCreditMemos',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}',
    'patch'
  >;
  'GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency',
    'delete'
  >;
  'GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm',
    'patch'
  >;
  'DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm',
    'delete'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesCreditMemos`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesCreditMemos',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}',
    paramDefs: {
      path: ['company-id', 'salesCreditMemo-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}',
    paramDefs: {
      path: ['company-id', 'salesCreditMemo-id'],
    },
    params,
    body,
  };
}

export const currency = {
  /**
   * `GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesCreditMemo-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency',
      paramDefs: {
        path: ['company-id', 'salesCreditMemo-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/currency',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'salesCreditMemo-id'],
      },
      params,
    };
  },
};

export const paymentTerm = {
  /**
   * `GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesCreditMemo-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['body'],
    params?: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm',
      paramDefs: {
        path: ['company-id', 'salesCreditMemo-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'salesCreditMemo-id'],
      },
      params,
    };
  },
};
