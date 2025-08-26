import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /connections/{externalConnection-id}/quota': Operation<
    '/connections/{externalConnection-id}/quota',
    'delete'
  >;
  'GET /connections/{externalConnection-id}/quota': Operation<
    '/connections/{externalConnection-id}/quota',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}/quota': Operation<
    '/connections/{externalConnection-id}/quota',
    'patch'
  >;
}

/**
 * `DELETE /connections/{externalConnection-id}/quota`
 *
 */
export function del(
  params?: IEndpoints['DELETE /connections/{externalConnection-id}/quota']['parameters']
): EndpointRequest<IEndpoints['DELETE /connections/{externalConnection-id}/quota']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/connections/{externalConnection-id}/quota',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /connections/{externalConnection-id}/quota`
 *
 */
export function get(
  params?: IEndpoints['GET /connections/{externalConnection-id}/quota']['parameters']
): EndpointRequest<IEndpoints['GET /connections/{externalConnection-id}/quota']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/connections/{externalConnection-id}/quota',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /connections/{externalConnection-id}/quota`
 *
 */
export function update(
  body: IEndpoints['PATCH /connections/{externalConnection-id}/quota']['body'],
  params?: IEndpoints['PATCH /connections/{externalConnection-id}/quota']['parameters']
): EndpointRequest<IEndpoints['PATCH /connections/{externalConnection-id}/quota']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/connections/{externalConnection-id}/quota',
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
    params,
    body,
  };
}
