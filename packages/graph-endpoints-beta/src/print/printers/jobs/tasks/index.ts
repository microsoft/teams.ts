import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'delete'
  >;
  'GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/tasks',
    'get'
  >;
  'GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'get'
  >;
  'PATCH /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    'patch'
  >;
  'POST /print/printers/{printer-id}/jobs/{printJob-id}/tasks': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/tasks',
    'post'
  >;
  'GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition',
    'get'
  >;
  'GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger',
    'get'
  >;
}

/**
 * `DELETE /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printer-id', 'printJob-id', 'printTask-id'],
    },
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks`
 *
 * A list of printTasks that were triggered by this print job.
 */
export function list(
  params?: IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/tasks',
    paramDefs: {
      path: ['printer-id', 'printJob-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 * A list of printTasks that were triggered by this print job.
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    paramDefs: {
      path: ['printer-id', 'printJob-id', 'printTask-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}']['body'],
  params?: IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}',
    paramDefs: {
      path: ['printer-id', 'printJob-id', 'printTask-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/printers/{printer-id}/jobs/{printJob-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/tasks']['body'],
  params?: IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printers/{printer-id}/jobs/{printJob-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/tasks',
    paramDefs: {
      path: ['printer-id', 'printJob-id'],
    },
    params,
    body,
  };
}

export const definition = {
  /**
   * `GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition`
   *
   * The printTaskDefinition that was used to create this task. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printer-id', 'printJob-id', 'printTask-id'],
      },
      params,
    };
  },
};

export const trigger = {
  /**
   * `GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger`
   *
   * The printTaskTrigger that triggered this task&#x27;s execution. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printer-id', 'printJob-id', 'printTask-id'],
      },
      params,
    };
  },
};
