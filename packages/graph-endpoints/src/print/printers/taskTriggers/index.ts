export * as definition from './definition';

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
}

/**
 * `DELETE /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}`
 *
 * Delete the task trigger of a printer to prevent related print events from triggering tasks on the specified printer.
 */
export function del(
  params?: IEndpoints['DELETE /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}']['response']
> {
  return {
    method: 'delete',
    path: '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printer-id', in: 'path' },
      { name: 'printTaskTrigger-id', in: 'path' },
    ],
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
    method: 'get',
    path: '/print/printers/{printer-id}/taskTriggers',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printer-id', in: 'path' },
    ],
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
    method: 'get',
    path: '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printer-id', in: 'path' },
      { name: 'printTaskTrigger-id', in: 'path' },
    ],
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
    method: 'patch',
    path: '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}',
    paramDefs: [
      { name: 'printer-id', in: 'path' },
      { name: 'printTaskTrigger-id', in: 'path' },
    ],
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
    method: 'post',
    path: '/print/printers/{printer-id}/taskTriggers',
    paramDefs: [{ name: 'printer-id', in: 'path' }],
    params,
    body,
  };
}
