export * as keySets from './keySets';
export * as policies from './policies';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /trustFramework': Operation<'/trustFramework', 'get'>;
  'PATCH /trustFramework': Operation<'/trustFramework', 'patch'>;
}

/**
 * `GET /trustFramework`
 *
 */
export function get(
  params?: IEndpoints['GET /trustFramework']['parameters']
): EndpointRequest<IEndpoints['GET /trustFramework']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/trustFramework',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /trustFramework`
 *
 */
export function update(
  body: IEndpoints['PATCH /trustFramework']['body'],
  params?: IEndpoints['PATCH /trustFramework']['parameters']
): EndpointRequest<IEndpoints['PATCH /trustFramework']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/trustFramework',
    paramDefs: [],
    params,
    body,
  };
}
