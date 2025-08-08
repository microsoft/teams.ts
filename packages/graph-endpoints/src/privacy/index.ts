export * as subjectRightsRequests from './subjectRightsRequests';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /privacy': Operation<'/privacy', 'get'>;
  'PATCH /privacy': Operation<'/privacy', 'patch'>;
}

/**
 * `GET /privacy`
 *
 */
export function get(
  params?: IEndpoints['GET /privacy']['parameters']
): EndpointRequest<IEndpoints['GET /privacy']['response']> {
  return {
    method: 'get',
    path: '/privacy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /privacy`
 *
 */
export function update(
  body: IEndpoints['PATCH /privacy']['body'],
  params?: IEndpoints['PATCH /privacy']['parameters']
): EndpointRequest<IEndpoints['PATCH /privacy']['response']> {
  return {
    method: 'patch',
    path: '/privacy',
    paramDefs: [],
    params,
    body,
  };
}
