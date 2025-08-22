import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition': Operation<
    '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition',
    'get'
  >;
}

/**
 * `GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition`
 *
 * An abstract definition that is used to create a printTask when triggered by a print event. Read-only.
 */
export function get(
  params?: IEndpoints['GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition']['response']
> {
  return {
    method: 'get',
    path: '/print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printer-id', in: 'path' },
      { name: 'printTaskTrigger-id', in: 'path' },
    ],
    params,
  };
}
