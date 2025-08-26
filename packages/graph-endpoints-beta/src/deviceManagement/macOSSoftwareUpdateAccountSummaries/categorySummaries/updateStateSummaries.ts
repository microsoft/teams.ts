import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries',
    'get'
  >;
  'GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}',
    'patch'
  >;
  'POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries': Operation<
    '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'macOSSoftwareUpdateAccountSummary-id', in: 'path' },
      { name: 'macOSSoftwareUpdateCategorySummary-id', in: 'path' },
      { name: 'macOSSoftwareUpdateStateSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries`
 *
 * Summary of the update states.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'macOSSoftwareUpdateAccountSummary-id', in: 'path' },
      { name: 'macOSSoftwareUpdateCategorySummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}`
 *
 * Summary of the update states.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'macOSSoftwareUpdateAccountSummary-id', in: 'path' },
      { name: 'macOSSoftwareUpdateCategorySummary-id', in: 'path' },
      { name: 'macOSSoftwareUpdateStateSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries/{macOSSoftwareUpdateStateSummary-id}',
    paramDefs: [
      { name: 'macOSSoftwareUpdateAccountSummary-id', in: 'path' },
      { name: 'macOSSoftwareUpdateCategorySummary-id', in: 'path' },
      { name: 'macOSSoftwareUpdateStateSummary-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries']['body'],
  params?: IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/macOSSoftwareUpdateAccountSummaries/{macOSSoftwareUpdateAccountSummary-id}/categorySummaries/{macOSSoftwareUpdateCategorySummary-id}/updateStateSummaries',
    paramDefs: [
      { name: 'macOSSoftwareUpdateAccountSummary-id', in: 'path' },
      { name: 'macOSSoftwareUpdateCategorySummary-id', in: 'path' },
    ],
    params,
    body,
  };
}
