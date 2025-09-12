import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'delete'
  >;
  'GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks',
    'get'
  >;
  'GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'get'
  >;
  'PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'patch'
  >;
  'POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks',
    'post'
  >;
  'GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition',
    'get'
  >;
  'GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger',
    'get'
  >;
}

/**
 * `DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printerShare-id', 'printJob-id', 'printTask-id'],
    },
    params,
  };
}

/**
 * `GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks`
 *
 * A list of printTasks that were triggered by this print job.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 * A list of printTasks that were triggered by this print job.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id', 'printTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['body'],
  params?: IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id', 'printTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks']['body'],
  params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id'],
    },
    params,
    body,
  };
}

export const definition = {
  /**
   * `GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition`
   *
   * The printTaskDefinition that was used to create this task. Read-only.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printerShare-id', 'printJob-id', 'printTask-id'],
      },
      params,
    };
  },
};

export const trigger = {
  /**
   * `GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger`
   *
   * The printTaskTrigger that triggered this task&#x27;s execution. Read-only.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printerShare-id', 'printJob-id', 'printTask-id'],
      },
      params,
    };
  },
};
