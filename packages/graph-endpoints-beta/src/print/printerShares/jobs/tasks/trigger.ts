import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger',
    'get'
  >;
}

/**
 * `GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger`
 *
 * The printTaskTrigger that triggered this task&#x27;s execution. Read-only.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/trigger',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
      { name: 'printTask-id', in: 'path' },
    ],
    params,
  };
}
