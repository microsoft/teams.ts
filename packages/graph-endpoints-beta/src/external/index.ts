export * as authorizationSystems from './authorizationSystems';
export * as connections from './connections';
export * as industryData from './industryData';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /external': Operation<'/external', 'get'>;
  'PATCH /external': Operation<'/external', 'patch'>;
}

/**
 * `GET /external`
 *
 */
export function get(
  params?: IEndpoints['GET /external']['parameters']
): EndpointRequest<IEndpoints['GET /external']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /external`
 *
 */
export function update(
  body: IEndpoints['PATCH /external']['body']
): EndpointRequest<IEndpoints['PATCH /external']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external',
    body,
  };
}
