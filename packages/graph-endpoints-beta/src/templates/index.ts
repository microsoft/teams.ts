export * as deviceTemplates from './deviceTemplates';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /templates': Operation<'/templates', 'get'>;
  'PATCH /templates': Operation<'/templates', 'patch'>;
}

/**
 * `GET /templates`
 *
 */
export function list(
  params?: IEndpoints['GET /templates']['parameters']
): EndpointRequest<IEndpoints['GET /templates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/templates',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /templates`
 *
 */
export function update(
  body: IEndpoints['PATCH /templates']['body'],
  params?: IEndpoints['PATCH /templates']['parameters']
): EndpointRequest<IEndpoints['PATCH /templates']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/templates',
    paramDefs: [],
    params,
    body,
  };
}
