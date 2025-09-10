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
  'GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments',
    'get'
  >;
  'POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments',
    'post'
  >;
  'GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
    'get'
  >;
  'PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
    'patch'
  >;
  'DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}': Operation<
    '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
    'delete'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['callRecord-id', 'session-id'],
    },
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
    paramDefs: {
      path: ['callRecord-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['callRecord-id', 'session-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['callRecord-id', 'session-id'],
    },
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
    paramDefs: {
      path: ['callRecord-id'],
    },
    params,
    body,
  };
}

export const segments = {
  /**
   * `GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments`
   *
   * The list of segments involved in the session. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['response']
  > {
    return {
      method: 'get',
      path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['callRecord-id', 'session-id'],
      },
      params,
    };
  },
  /**
   * `POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments`
   *
   */
  create: function create(
    body: IEndpoints['POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['body'],
    params?: IEndpoints['POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments']['response']
  > {
    return {
      method: 'post',
      path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments',
      paramDefs: {
        path: ['callRecord-id', 'session-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}`
   *
   * The list of segments involved in the session. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['callRecord-id', 'session-id', 'segment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['body'],
    params?: IEndpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
      paramDefs: {
        path: ['callRecord-id', 'session-id', 'segment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['callRecord-id', 'session-id', 'segment-id'],
      },
      params,
    };
  },
};
