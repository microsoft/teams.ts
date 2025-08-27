import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition': Operation<
    '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition',
    'get'
  >;
}

/**
 * `GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition`
 *
 * The printTaskDefinition that was used to create this task. Read-only.
 */
export function get(
  params?: IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition']['response']
> {
  return {
    method: 'get',
    path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printTaskDefinition-id', in: 'path' },
      { name: 'printTask-id', in: 'path' },
    ],
    params,
  };
}
