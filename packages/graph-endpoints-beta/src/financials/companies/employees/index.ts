export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/employees/{employee-id}': Operation<
    '/financials/companies/{company-id}/employees/{employee-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/employees': Operation<
    '/financials/companies/{company-id}/employees',
    'get'
  >;
  'GET /financials/companies/{company-id}/employees/{employee-id}': Operation<
    '/financials/companies/{company-id}/employees/{employee-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/employees/{employee-id}': Operation<
    '/financials/companies/{company-id}/employees/{employee-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/employees': Operation<
    '/financials/companies/{company-id}/employees',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/employees/{employee-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/employees/{employee-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/employees/{employee-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/employees/{employee-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'employee-id'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/employees`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/employees']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/employees']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/employees',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/employees/{employee-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/employees/{employee-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/employees/{employee-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/employees/{employee-id}',
    paramDefs: {
      path: ['company-id', 'employee-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/employees/{employee-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/employees/{employee-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/employees/{employee-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/employees/{employee-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/employees/{employee-id}',
    paramDefs: {
      path: ['company-id', 'employee-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/employees`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/employees']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/employees']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/employees']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/employees',
    paramDefs: {
      path: ['company-id'],
    },
    params,
    body,
  };
}
