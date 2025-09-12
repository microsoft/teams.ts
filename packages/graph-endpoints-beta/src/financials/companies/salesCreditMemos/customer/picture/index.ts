import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture',
    'post'
  >;
  'GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content',
    'get'
  >;
  'PUT /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content',
    'put'
  >;
  'DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content',
    'delete'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'salesCreditMemo-id', 'picture-id'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture',
    paramDefs: {
      path: ['company-id', 'salesCreditMemo-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}',
    paramDefs: {
      path: ['company-id', 'salesCreditMemo-id', 'picture-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}',
    paramDefs: {
      path: ['company-id', 'salesCreditMemo-id', 'picture-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture',
    paramDefs: {
      path: ['company-id', 'salesCreditMemo-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content',
      paramDefs: {
        path: ['company-id', 'salesCreditMemo-id', 'picture-id'],
      },
      params,
    };
  },
  /**
   * `PUT /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content`
   *
   */
  set: function set(
    body: IEndpoints['PUT /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content']['body'],
    params?: IEndpoints['PUT /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content',
      paramDefs: {
        path: ['company-id', 'salesCreditMemo-id', 'picture-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer/picture/{picture-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['company-id', 'salesCreditMemo-id', 'picture-id'],
      },
      params,
    };
  },
};
