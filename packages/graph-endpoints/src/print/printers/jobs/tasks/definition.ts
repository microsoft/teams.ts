import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition',
    'get'
  >;
}

/**
 * `GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition`
 *
 * The printTaskDefinition that was used to create this task. Read-only.
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition']['response']
> {
  return {
    method: 'get',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printer-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
      { name: 'printTask-id', in: 'path' },
    ],
    params,
  };
}
