import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy': Operation<
    '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy',
    'get'
  >;
}

/**
 * `GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy`
 *
 * Represents an identity used to identify who is responsible for the activity.
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy']['response']
> {
  return {
    method: 'get',
    path: '/external/connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalItem-id', in: 'path' },
      { name: 'externalActivity-id', in: 'path' },
    ],
    params,
  };
}
