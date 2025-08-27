import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger': Operation<
    '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger',
    'get'
  >;
}

/**
 * `GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger`
 *
 * The printTaskTrigger that triggered this task&#x27;s execution. Read-only.
 */
export function get(
  params?: IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger']['response']
> {
  return {
    method: 'get',
    path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printTaskDefinition-id', in: 'path' },
      { name: 'printTask-id', in: 'path' },
    ],
    params,
  };
}
