export * as host from './host';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}': Operation<
    '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/whoisHistoryRecords': Operation<
    '/security/threatIntelligence/whoisHistoryRecords',
    'get'
  >;
  'GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}': Operation<
    '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}': Operation<
    '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/whoisHistoryRecords': Operation<
    '/security/threatIntelligence/whoisHistoryRecords',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'whoisHistoryRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/whoisHistoryRecords`
 *
 * Retrieve details about whoisHistoryRecord objects.Note: List retrieval is not yet supported.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/whoisHistoryRecords']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/whoisHistoryRecords']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/whoisHistoryRecords',
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
 * `GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}`
 *
 * Retrieve details about whoisHistoryRecord objects.Note: List retrieval is not yet supported.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'whoisHistoryRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/whoisHistoryRecords/{whoisHistoryRecord-id}',
    paramDefs: [{ name: 'whoisHistoryRecord-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/whoisHistoryRecords`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/whoisHistoryRecords']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/whoisHistoryRecords']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/threatIntelligence/whoisHistoryRecords']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/whoisHistoryRecords',
    paramDefs: [],
    params,
    body,
  };
}
