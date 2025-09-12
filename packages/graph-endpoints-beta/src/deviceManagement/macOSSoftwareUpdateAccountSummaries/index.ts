export * as categorySummaries from './categorySummaries';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/macOSSoftwareUpdateAccountSummaries': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries',
    'get'
  >;
  'GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}',
    'patch'
  >;
  'POST /deviceManagement/macOSSoftwareUpdateAccountSummaries': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['macOSSoftwareUpdateAccountSummary-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/macOSSoftwareUpdateAccountSummaries`
 *
 * The MacOS software update account summaries for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}`
 *
 * The MacOS software update account summaries for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}',
    paramDefs: {
      path: ['macOSSoftwareUpdateAccountSummary-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}',
    paramDefs: {
      path: ['macOSSoftwareUpdateAccountSummary-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/macOSSoftwareUpdateAccountSummaries`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries',
    body,
  };
}
