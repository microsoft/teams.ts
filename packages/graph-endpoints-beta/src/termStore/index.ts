export * as groups from './groups';
export * as sets from './sets';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /termStore': Operation<'/termStore', 'get'>;
  'PATCH /termStore': Operation<'/termStore', 'patch'>;
}

/**
 * `GET /termStore`
 *
 * Read the properties and relationships of a store object.
 */
export function get(
  params?: IEndpoints['GET /termStore']['parameters']
): EndpointRequest<IEndpoints['GET /termStore']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /termStore`
 *
 * Update the properties of a store object.
 */
export function update(
  body: IEndpoints['PATCH /termStore']['body'],
  params?: IEndpoints['PATCH /termStore']['parameters']
): EndpointRequest<IEndpoints['PATCH /termStore']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore',
    paramDefs: [],
    params,
    body,
  };
}
