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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /templates`
 *
 */
export function update(
  body: IEndpoints['PATCH /templates']['body']
): EndpointRequest<IEndpoints['PATCH /templates']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/templates',
    body,
  };
}
