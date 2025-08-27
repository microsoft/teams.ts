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
 * Read the properties and relationships of a schema object.
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/schema']['response']
> {
  return {
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
 * Create a new or update an existing schema for a Microsoft Search connection.
 */
export function update(
  body: IEndpoints['PATCH /external/connections/{externalConnection-id}/schema']['body'],
  params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/connections/{externalConnection-id}/schema']['response']
> {
  return {
    method: 'patch',
    path: '/external/connections/{externalConnection-id}/schema',
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
    params,
    body,
  };
}
