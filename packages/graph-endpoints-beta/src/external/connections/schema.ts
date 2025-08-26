import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /external/connections/{externalConnection-id}/schema': Operation<
    '/external/connections/{externalConnection-id}/schema',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}/schema': Operation<
    '/external/connections/{externalConnection-id}/schema',
    'patch'
  >;
}

/**
 * `GET /external/connections/{externalConnection-id}/schema`
 *
 * Retrieve the properties of a schema for an externalConnection.
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/schema']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/schema',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/connections/{externalConnection-id}/schema`
 *
 * Update the properties of a schema for an externalConnection.
 */
export function update(
  body: IEndpoints['PATCH /external/connections/{externalConnection-id}/schema']['body'],
  params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/connections/{externalConnection-id}/schema']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/connections/{externalConnection-id}/schema',
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
    params,
    body,
  };
}
