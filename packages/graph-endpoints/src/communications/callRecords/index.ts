export * as sessions from './sessions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/callRecords/{callRecord-id}': Operation<
    '/communications/callRecords/{callRecord-id}',
    'delete'
  >;
  'GET /communications/callRecords': Operation<'/communications/callRecords', 'get'>;
  'GET /communications/callRecords/{callRecord-id}': Operation<
    '/communications/callRecords/{callRecord-id}',
    'get'
  >;
  'PATCH /communications/callRecords/{callRecord-id}': Operation<
    '/communications/callRecords/{callRecord-id}',
    'patch'
  >;
  'POST /communications/callRecords': Operation<'/communications/callRecords', 'post'>;
}

/**
 * `DELETE /communications/callRecords/{callRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/callRecords/{callRecord-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /communications/callRecords/{callRecord-id}']['response']> {
  return {
    method: 'delete',
    path: '/communications/callRecords/{callRecord-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'callRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/callRecords`
 *
 * Get the list of callRecord objects and their properties. The results can be optionally filtered using the $filter query parameter on the startDateTime and participant id properties. Note that the listed call records don&#x27;t include expandable relationships such as sessions and participants_v2. You can expand these relationships using Get callRecord for a specific record.
 */
export function list(
  params?: IEndpoints['GET /communications/callRecords']['parameters']
): EndpointRequest<IEndpoints['GET /communications/callRecords']['response']> {
  return {
    method: 'get',
    path: '/communications/callRecords',
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
 * `GET /communications/callRecords/{callRecord-id}`
 *
 * Retrieve the properties and relationships of a callRecord object. You can get the id of a callRecord in two ways:
 * Subscribe to change notifications to the /communications/callRecords endpoint.
 * Use the callChainId property of a call. The call record is available only after the associated call is completed.
 */
export function get(
  params?: IEndpoints['GET /communications/callRecords/{callRecord-id}']['parameters']
): EndpointRequest<IEndpoints['GET /communications/callRecords/{callRecord-id}']['response']> {
  return {
    method: 'get',
    path: '/communications/callRecords/{callRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'callRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/callRecords/{callRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/callRecords/{callRecord-id}']['body'],
  params?: IEndpoints['PATCH /communications/callRecords/{callRecord-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /communications/callRecords/{callRecord-id}']['response']> {
  return {
    method: 'patch',
    path: '/communications/callRecords/{callRecord-id}',
    paramDefs: [{ name: 'callRecord-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /communications/callRecords`
 *
 */
export function create(
  body: IEndpoints['POST /communications/callRecords']['body'],
  params?: IEndpoints['POST /communications/callRecords']['parameters']
): EndpointRequest<IEndpoints['POST /communications/callRecords']['response']> {
  return {
    method: 'post',
    path: '/communications/callRecords',
    paramDefs: [],
    params,
    body,
  };
}
