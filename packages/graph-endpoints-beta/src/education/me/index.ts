export * as assignments from './assignments';
export * as classes from './classes';
export * as rubrics from './rubrics';
export * as schools from './schools';
export * as taughtClasses from './taughtClasses';
export * as user from './user';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/me': Operation<'/education/me', 'delete'>;
  'GET /education/me': Operation<'/education/me', 'get'>;
  'PATCH /education/me': Operation<'/education/me', 'patch'>;
}

/**
 * `DELETE /education/me`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/me']['parameters']
): EndpointRequest<IEndpoints['DELETE /education/me']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/me',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /education/me`
 *
 */
export function get(
  params?: IEndpoints['GET /education/me']['parameters']
): EndpointRequest<IEndpoints['GET /education/me']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /education/me`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/me']['body'],
  params?: IEndpoints['PATCH /education/me']['parameters']
): EndpointRequest<IEndpoints['PATCH /education/me']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/me',
    paramDefs: [],
    params,
    body,
  };
}
