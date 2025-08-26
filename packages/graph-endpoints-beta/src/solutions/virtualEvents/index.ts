export * as events from './events';
export * as townhalls from './townhalls';
export * as webinars from './webinars';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents': Operation<'/solutions/virtualEvents', 'delete'>;
  'GET /solutions/virtualEvents': Operation<'/solutions/virtualEvents', 'get'>;
  'PATCH /solutions/virtualEvents': Operation<'/solutions/virtualEvents', 'patch'>;
}

/**
 * `DELETE /solutions/virtualEvents`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['DELETE /solutions/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/virtualEvents',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /solutions/virtualEvents`
 *
 * A collection of virtual events.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['PATCH /solutions/virtualEvents']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/virtualEvents',
    paramDefs: [],
    params,
    body,
  };
}
