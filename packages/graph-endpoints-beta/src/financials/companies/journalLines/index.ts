import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/journalLines/{journalLine-id}': Operation<
    '/financials/companies/{company-id}/journalLines/{journalLine-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/journalLines': Operation<
    '/financials/companies/{company-id}/journalLines',
    'get'
  >;
  'GET /financials/companies/{company-id}/journalLines/{journalLine-id}': Operation<
    '/financials/companies/{company-id}/journalLines/{journalLine-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/journalLines/{journalLine-id}': Operation<
    '/financials/companies/{company-id}/journalLines/{journalLine-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/journalLines': Operation<
    '/financials/companies/{company-id}/journalLines',
    'post'
  >;
  'GET /financials/companies/{company-id}/journalLines/{journalLine-id}/account': Operation<
    '/financials/companies/{company-id}/journalLines/{journalLine-id}/account',
    'get'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/journalLines/{journalLine-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/journalLines/{journalLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/journalLines/{journalLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/journalLines/{journalLine-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'journalLine-id'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/journalLines`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/journalLines']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/journalLines']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/journalLines',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/journalLines/{journalLine-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/journalLines/{journalLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/journalLines/{journalLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/journalLines/{journalLine-id}',
    paramDefs: {
      path: ['company-id', 'journalLine-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/journalLines/{journalLine-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/journalLines/{journalLine-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/journalLines/{journalLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/journalLines/{journalLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/journalLines/{journalLine-id}',
    paramDefs: {
      path: ['company-id', 'journalLine-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/journalLines`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/journalLines']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/journalLines']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/journalLines']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/journalLines',
    paramDefs: {
      path: ['company-id'],
    },
    params,
    body,
  };
}

export const account = {
  /**
   * `GET /financials/companies/{company-id}/journalLines/{journalLine-id}/account`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/journalLines/{journalLine-id}/account']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/journalLines/{journalLine-id}/account']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/journalLines/{journalLine-id}/account',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'journalLine-id'],
      },
      params,
    };
  },
};
