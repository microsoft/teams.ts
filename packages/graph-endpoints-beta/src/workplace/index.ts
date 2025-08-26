export * as sensorDevices from './sensorDevices';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /workplace': Operation<'/workplace', 'get'>;
  'PATCH /workplace': Operation<'/workplace', 'patch'>;
}

/**
 * `GET /workplace`
 *
 */
export function get(
  params?: IEndpoints['GET /workplace']['parameters']
): EndpointRequest<IEndpoints['GET /workplace']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/workplace',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /workplace`
 *
 */
export function update(
  body: IEndpoints['PATCH /workplace']['body'],
  params?: IEndpoints['PATCH /workplace']['parameters']
): EndpointRequest<IEndpoints['PATCH /workplace']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/workplace',
    paramDefs: [],
    params,
    body,
  };
}
