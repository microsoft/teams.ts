import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/industryData/operations/{longRunningOperation-id}': Operation<
    '/external/industryData/operations/{longRunningOperation-id}',
    'delete'
  >;
  'GET /external/industryData/operations': Operation<'/external/industryData/operations', 'get'>;
  'GET /external/industryData/operations/{longRunningOperation-id}': Operation<
    '/external/industryData/operations/{longRunningOperation-id}',
    'get'
  >;
  'PATCH /external/industryData/operations/{longRunningOperation-id}': Operation<
    '/external/industryData/operations/{longRunningOperation-id}',
    'patch'
  >;
  'POST /external/industryData/operations': Operation<'/external/industryData/operations', 'post'>;
}

/**
 * `DELETE /external/industryData/operations/{longRunningOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/industryData/operations/{longRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/industryData/operations/{longRunningOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/industryData/operations/{longRunningOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'longRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/industryData/operations`
 *
 * Get a list of long-running file validation operations and their statuses.
 */
export function list(
  params?: IEndpoints['GET /external/industryData/operations']['parameters']
): EndpointRequest<IEndpoints['GET /external/industryData/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/operations',
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
 * `GET /external/industryData/operations/{longRunningOperation-id}`
 *
 * Read the properties and relationships of a fileValidateOperation object.
 */
export function get(
  params?: IEndpoints['GET /external/industryData/operations/{longRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/industryData/operations/{longRunningOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/industryData/operations/{longRunningOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'longRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/industryData/operations/{longRunningOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/industryData/operations/{longRunningOperation-id}']['body'],
  params?: IEndpoints['PATCH /external/industryData/operations/{longRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/industryData/operations/{longRunningOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/industryData/operations/{longRunningOperation-id}',
    paramDefs: [{ name: 'longRunningOperation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /external/industryData/operations`
 *
 */
export function create(
  body: IEndpoints['POST /external/industryData/operations']['body'],
  params?: IEndpoints['POST /external/industryData/operations']['parameters']
): EndpointRequest<IEndpoints['POST /external/industryData/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/industryData/operations',
    paramDefs: [],
    params,
    body,
  };
}
