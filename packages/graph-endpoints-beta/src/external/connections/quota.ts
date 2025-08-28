import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/connections/{externalConnection-id}/quota': Operation<
    '/external/connections/{externalConnection-id}/quota',
    'delete'
  >;
  'GET /external/connections/{externalConnection-id}/quota': Operation<
    '/external/connections/{externalConnection-id}/quota',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}/quota': Operation<
    '/external/connections/{externalConnection-id}/quota',
    'patch'
  >;
}

/**
 * `DELETE /external/connections/{externalConnection-id}/quota`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/connections/{externalConnection-id}/quota']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/connections/{externalConnection-id}/quota']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/connections/{externalConnection-id}/quota',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}/quota`
 *
 * Retrieve the properties and relationships of a connectionQuota object.
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/quota']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/quota']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/quota',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/connections/{externalConnection-id}/quota`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/connections/{externalConnection-id}/quota']['body'],
  params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/quota']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/connections/{externalConnection-id}/quota']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/connections/{externalConnection-id}/quota',
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
    params,
    body,
  };
}
