import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'delete'
  >;
  'GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks',
    'get'
  >;
  'GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'get'
  >;
  'PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'patch'
  >;
  'POST /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks',
    'post'
  >;
  'GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition',
    'get'
  >;
  'GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger': Operation<
    '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger',
    'get'
  >;
}

/**
 * `DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    method: 'delete',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printerShare-id', 'printJob-id', 'printTask-id'],
    },
    params,
  };
}

/**
 * `GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks`
 *
 * A list of printTasks that were triggered by this print job.
 */
export function list(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks']['response']
> {
  return {
    method: 'get',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 * A list of printTasks that were triggered by this print job.
 */
export function get(
  params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    method: 'get',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id', 'printTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['body'],
  params?: IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    method: 'patch',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id', 'printTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks']['body'],
  params?: IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks']['response']
> {
  return {
    method: 'post',
    path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks',
    paramDefs: {
      path: ['printerShare-id', 'printJob-id'],
    },
    params,
    body,
  };
}

export const definition = {
  /**
   * `GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition`
   *
   * The printTaskDefinition that was used to create this task. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition']['response']
  > {
    return {
      method: 'get',
      path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition',
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
   * `GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger`
   *
   * The printTaskTrigger that triggered this task&#x27;s execution. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger']['response']
  > {
    return {
      method: 'get',
      path: '/print/shares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printerShare-id', 'printJob-id', 'printTask-id'],
      },
      params,
    };
  },
};
