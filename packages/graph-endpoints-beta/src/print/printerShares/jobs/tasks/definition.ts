import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition',
    'get'
  >;
}

/**
 * `GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition`
 *
 * The printTaskDefinition that was used to create this task. Read-only.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/tasks/{printTask-id}/definition',
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
