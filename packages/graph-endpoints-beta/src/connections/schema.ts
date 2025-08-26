import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /connections/{externalConnection-id}/schema': Operation<
    '/connections/{externalConnection-id}/schema',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}/schema': Operation<
    '/connections/{externalConnection-id}/schema',
    'patch'
  >;
}

/**
 * `GET /connections/{externalConnection-id}/schema`
 *
 */
export function get(
  params?: IEndpoints['GET /connections/{externalConnection-id}/schema']['parameters']
): EndpointRequest<IEndpoints['GET /connections/{externalConnection-id}/schema']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/connections/{externalConnection-id}/schema',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /connections/{externalConnection-id}/schema`
 *
 */
export function update(
  body: IEndpoints['PATCH /connections/{externalConnection-id}/schema']['body'],
  params?: IEndpoints['PATCH /connections/{externalConnection-id}/schema']['parameters']
): EndpointRequest<IEndpoints['PATCH /connections/{externalConnection-id}/schema']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/connections/{externalConnection-id}/schema',
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
    params,
    body,
  };
}
