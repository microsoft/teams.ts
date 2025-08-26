export * as abort from './abort';
export * as cancel from './cancel';
export * as cancelPrintJob from './cancelPrintJob';
export * as documents from './documents';
export * as redirect from './redirect';
export * as start from './start';
export * as startPrintJob from './startPrintJob';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printers/{printer-id}/jobs/{printJob-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}',
    'delete'
  >;
  'GET /print/printers/{printer-id}/jobs': Operation<'/print/printers/{printer-id}/jobs', 'get'>;
  'GET /print/printers/{printer-id}/jobs/{printJob-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}',
    'get'
  >;
  'PATCH /print/printers/{printer-id}/jobs/{printJob-id}': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}',
    'patch'
  >;
  'POST /print/printers/{printer-id}/jobs': Operation<'/print/printers/{printer-id}/jobs', 'post'>;
}

/**
 * `DELETE /print/printers/{printer-id}/jobs/{printJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/printers/{printer-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/printers/{printer-id}/jobs/{printJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/printers/{printer-id}/jobs`
 *
 * Retrieve a list of print jobs associated with the printer.
 */
export function list(
  params?: IEndpoints['GET /print/printers/{printer-id}/jobs']['parameters']
): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}/jobs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}/jobs',
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
 * `GET /print/printers/{printer-id}/jobs/{printJob-id}`
 *
 * Retrieve the properties and relationships of a print job.
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/printers/{printer-id}/jobs/{printJob-id}`
 *
 * Update a print job. Only the configuration property can be updated. Updating a print job will only succeed if a printTask in a processing state, started by a trigger that the requesting app created, is associated with the print job. For details about how to register a task trigger, see Extending Universal Print to support pull printing.
 */
export function update(
  body: IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}']['body'],
  params?: IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/printers/{printer-id}/jobs/{printJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}',
    paramDefs: [
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /print/printers/{printer-id}/jobs`
 *
 * Create a new printJob for a printer.
 */
export function create(
  body: IEndpoints['POST /print/printers/{printer-id}/jobs']['body'],
  params?: IEndpoints['POST /print/printers/{printer-id}/jobs']['parameters']
): EndpointRequest<IEndpoints['POST /print/printers/{printer-id}/jobs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printers/{printer-id}/jobs',
    paramDefs: [{ name: 'printer-id', in: 'path' }],
    params,
    body,
  };
}
