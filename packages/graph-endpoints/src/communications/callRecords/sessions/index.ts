export * as segments from './segments';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}',
    'delete'
  >;
  'GET /communications/callRecords/{callRecord-id}/sessions': Operation<
    '/communications/callRecords/{callRecord-id}/sessions',
    'get'
  >;
  'GET /communications/callRecords/{callRecord-id}/sessions/{session-id}': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}',
    'get'
  >;
  'PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}',
    'patch'
  >;
  'POST /communications/callRecords/{callRecord-id}/sessions': Operation<
    '/communications/callRecords/{callRecord-id}/sessions',
    'post'
  >;
}

/**
 * `DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}']['response']
> {
  return {
    method: 'delete',
    path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'callRecord-id', in: 'path' },
      { name: 'session-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/callRecords/{callRecord-id}/sessions`
 *
 * Retrieve the list of sessions associated with a callRecord object. If the sessions list is truncated, a sessions@odata.nextLink value will be provided to retrieve the next page of sessions. The maximum page size for sessions is 60 entries.
 */
export function list(
  params?: IEndpoints['GET /communications/callRecords/{callRecord-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/callRecords/{callRecord-id}/sessions']['response']
> {
  return {
    method: 'get',
    path: '/communications/callRecords/{callRecord-id}/sessions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'callRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/callRecords/{callRecord-id}/sessions/{session-id}`
 *
 * List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}']['response']
> {
  return {
    method: 'get',
    path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'callRecord-id', in: 'path' },
      { name: 'session-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}']['body'],
  params?: IEndpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}']['response']
> {
  return {
    method: 'patch',
    path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}',
    paramDefs: [
      { name: 'callRecord-id', in: 'path' },
      { name: 'session-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/callRecords/{callRecord-id}/sessions`
 *
 */
export function create(
  body: IEndpoints['POST /communications/callRecords/{callRecord-id}/sessions']['body'],
  params?: IEndpoints['POST /communications/callRecords/{callRecord-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/callRecords/{callRecord-id}/sessions']['response']
> {
  return {
    method: 'post',
    path: '/communications/callRecords/{callRecord-id}/sessions',
    paramDefs: [{ name: 'callRecord-id', in: 'path' }],
    params,
    body,
  };
}
