export * as classes from './classes';
export * as me from './me';
export * as reports from './reports';
export * as schools from './schools';
export * as users from './users';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /education': Operation<'/education', 'get'>;
  'PATCH /education': Operation<'/education', 'patch'>;
}

/**
 * `GET /education`
 *
 */
export function get(
  params?: IEndpoints['GET /education']['parameters']
): EndpointRequest<IEndpoints['GET /education']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /education`
 *
 */
export function update(
  body: IEndpoints['PATCH /education']['body'],
  params?: IEndpoints['PATCH /education']['parameters']
): EndpointRequest<IEndpoints['PATCH /education']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education',
    paramDefs: [],
    params,
    body,
  };
}
