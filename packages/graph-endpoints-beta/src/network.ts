import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'GET /network': Operation<'/network', 'get'>;
  'PATCH /network': Operation<'/network', 'patch'>;
}

/**
 * `GET /network`
 *
 */
export function get(
  params?: IEndpoints['GET /network']['parameters']
): EndpointRequest<IEndpoints['GET /network']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/network',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /network`
 *
 */
export function update(
  body: IEndpoints['PATCH /network']['body'],
  params?: IEndpoints['PATCH /network']['parameters']
): EndpointRequest<IEndpoints['PATCH /network']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/network',
    paramDefs: [],
    params,
    body,
  };
}
