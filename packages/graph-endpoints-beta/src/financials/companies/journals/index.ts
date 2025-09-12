export * as journalLines from './journalLines';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/journals/{journal-id}': Operation<
    '/financials/companies/{company-id}/journals/{journal-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/journals': Operation<
    '/financials/companies/{company-id}/journals',
    'get'
  >;
  'GET /financials/companies/{company-id}/journals/{journal-id}': Operation<
    '/financials/companies/{company-id}/journals/{journal-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/journals/{journal-id}': Operation<
    '/financials/companies/{company-id}/journals/{journal-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/journals': Operation<
    '/financials/companies/{company-id}/journals',
    'post'
  >;
  'GET /financials/companies/{company-id}/journals/{journal-id}/account': Operation<
    '/financials/companies/{company-id}/journals/{journal-id}/account',
    'get'
  >;
  'POST /financials/companies/{company-id}/journals/{journal-id}/post': Operation<
    '/financials/companies/{company-id}/journals/{journal-id}/post',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/journals/{journal-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/journals/{journal-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/journals/{journal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/journals/{journal-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'journal-id'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/journals`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/journals']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/journals']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/journals',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/journals/{journal-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/journals/{journal-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/journals/{journal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/journals/{journal-id}',
    paramDefs: {
      path: ['company-id', 'journal-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/journals/{journal-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/journals/{journal-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/journals/{journal-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/journals/{journal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/journals/{journal-id}',
    paramDefs: {
      path: ['company-id', 'journal-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/journals`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/journals']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/journals']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/journals']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/journals',
    paramDefs: {
      path: ['company-id'],
    },
    params,
    body,
  };
}

export const account = {
  /**
   * `GET /financials/companies/{company-id}/journals/{journal-id}/account`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/journals/{journal-id}/account']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/journals/{journal-id}/account']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/journals/{journal-id}/account',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'journal-id'],
      },
      params,
    };
  },
};

export const post = {
  /**
   * `POST /financials/companies/{company-id}/journals/{journal-id}/post`
   *
   */
  create: function create(
    params?: IEndpoints['POST /financials/companies/{company-id}/journals/{journal-id}/post']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /financials/companies/{company-id}/journals/{journal-id}/post']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/financials/companies/{company-id}/journals/{journal-id}/post',
      paramDefs: {
        path: ['company-id', 'journal-id'],
      },
      params,
    };
  },
};
