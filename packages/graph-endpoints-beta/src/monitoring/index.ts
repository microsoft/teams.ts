export * as alertRecords from './alertRecords';
export * as alertRules from './alertRules';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /monitoring': Operation<'/monitoring', 'get'>;
  'PATCH /monitoring': Operation<'/monitoring', 'patch'>;
}

/**
 * `GET /monitoring`
 *
 */
export function get(
  params?: IEndpoints['GET /monitoring']['parameters']
): EndpointRequest<IEndpoints['GET /monitoring']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/monitoring',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /monitoring`
 *
 */
export function update(
  body: IEndpoints['PATCH /monitoring']['body'],
  params?: IEndpoints['PATCH /monitoring']['parameters']
): EndpointRequest<IEndpoints['PATCH /monitoring']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/monitoring',
    paramDefs: [],
    params,
    body,
  };
}
