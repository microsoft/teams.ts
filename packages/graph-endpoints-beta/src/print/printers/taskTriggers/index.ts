import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}': Operation<
    '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}',
    'delete'
  >;
  'GET /print/printers/{printer-id}/taskTriggers': Operation<
    '/print/printers/{printer-id}/taskTriggers',
    'get'
  >;
  'GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}': Operation<
    '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}',
    'get'
  >;
  'PATCH /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}': Operation<
    '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}',
    'patch'
  >;
  'POST /print/printers/{printer-id}/taskTriggers': Operation<
    '/print/printers/{printer-id}/taskTriggers',
    'post'
  >;
  'GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition': Operation<
    '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition',
    'get'
  >;
}

/**
 * `DELETE /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}`
 *
 * Delete a printer&#x27;s task trigger to prevent related print events from triggering tasks on the specified printer.
 */
export function del(
  params?: IEndpoints['DELETE /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printer-id', 'printTaskTrigger-id'],
    },
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}/taskTriggers`
 *
 * Retrieve a list of task triggers associated with the printer. The list of task triggers defines which tasks will be triggered as a result of events that occur during printing. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
 */
export function list(
  params?: IEndpoints['GET /print/printers/{printer-id}/taskTriggers']['parameters']
): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}/taskTriggers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}/taskTriggers',
    paramDefs: {
      path: ['printer-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}`
 *
 * Get a task trigger from a printer. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}',
    paramDefs: {
      path: ['printer-id', 'printTaskTrigger-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}']['body'],
  params?: IEndpoints['PATCH /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}',
    paramDefs: {
      path: ['printer-id', 'printTaskTrigger-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/printers/{printer-id}/taskTriggers`
 *
 * Create a new task trigger on the specified printer. Currently, only one task trigger can be specified per printer, but this limit might be removed in the future.
 */
export function create(
  body: IEndpoints['POST /print/printers/{printer-id}/taskTriggers']['body'],
  params?: IEndpoints['POST /print/printers/{printer-id}/taskTriggers']['parameters']
): EndpointRequest<IEndpoints['POST /print/printers/{printer-id}/taskTriggers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printers/{printer-id}/taskTriggers',
    paramDefs: {
      path: ['printer-id'],
    },
    params,
    body,
  };
}

export const definition = {
  /**
   * `GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition`
   *
   * An abstract definition that is used to create a printTask when triggered by a print event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printer-id', 'printTaskTrigger-id'],
      },
      params,
    };
  },
};
