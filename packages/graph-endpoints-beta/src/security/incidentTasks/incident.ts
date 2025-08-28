import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /security/incidentTasks/{incidentTask-id}/incident': Operation<
    '/security/incidentTasks/{incidentTask-id}/incident',
    'get'
  >;
}

/**
 * `GET /security/incidentTasks/{incidentTask-id}/incident`
 *
 * Required. The incident that contains this task. Must contain a valid incident ID.
 */
export function get(
  params?: IEndpoints['GET /security/incidentTasks/{incidentTask-id}/incident']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/incidentTasks/{incidentTask-id}/incident']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/incidentTasks/{incidentTask-id}/incident',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'incidentTask-id', in: 'path' },
    ],
    params,
  };
}
