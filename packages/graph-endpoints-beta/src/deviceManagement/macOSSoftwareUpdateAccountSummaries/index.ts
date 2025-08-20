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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'macOSSoftwareUpdateAccountSummary-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'macOSSoftwareUpdateAccountSummary-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'macOSSoftwareUpdateAccountSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/macOSSoftwareUpdateAccountSummaries`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries']['body'],
  params?: IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries',
    paramDefs: [],
    params,
    body,
  };
}
