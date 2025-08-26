import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
    'delete'
  >;
  'GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments',
    'get'
  >;
  'GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
    'get'
  >;
  'PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
    'patch'
  >;
  'POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments',
    'post'
  >;
}

/**
 * `DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'callRecord-id', in: 'path' },
      { name: 'session-id', in: 'path' },
      { name: 'segment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments`
 *
 * The list of segments involved in the session. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['response']
> {
  return {
    method: 'get',
    path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments',
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
      { name: 'session-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}`
 *
 * The list of segments involved in the session. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['response']
> {
  return {
    method: 'get',
    path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'callRecord-id', in: 'path' },
      { name: 'session-id', in: 'path' },
      { name: 'segment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['body'],
  params?: IEndpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
    paramDefs: [
      { name: 'callRecord-id', in: 'path' },
      { name: 'session-id', in: 'path' },
      { name: 'segment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments`
 *
 */
export function create(
  body: IEndpoints['POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['body'],
  params?: IEndpoints['POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['response']
> {
  return {
    method: 'post',
    path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments',
    paramDefs: [
      { name: 'callRecord-id', in: 'path' },
      { name: 'session-id', in: 'path' },
    ],
    params,
    body,
  };
}
