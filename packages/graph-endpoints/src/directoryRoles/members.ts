import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /directoryRoles/{directoryRole-id}/members': Operation<
    '/directoryRoles/{directoryRole-id}/members',
    'get'
  >;
}

/**
 * `GET /directoryRoles/{directoryRole-id}/members`
 *
 * Retrieve the list of principals that are assigned to the directory role.  You can use both the object ID and template ID of the directoryRole with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Microsoft Entra admin center. For details, see Role template IDs.
 */
export function list(
  params?: IEndpoints['GET /directoryRoles/{directoryRole-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /directoryRoles/{directoryRole-id}/members']['response']> {
  return {
    method: 'get',
    path: '/directoryRoles/{directoryRole-id}/members',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryRole-id', in: 'path' },
    ],
    params,
  };
}
