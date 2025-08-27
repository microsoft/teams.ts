import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger': Operation<
    '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger',
    'get'
  >;
}

/**
 * `GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger`
 *
 * The printTaskTrigger that triggered this task&#x27;s execution. Read-only.
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printers/{printer-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger',
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
