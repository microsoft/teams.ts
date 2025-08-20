export * as admin from './admin';
export * as communications from './communications';
export * as interactionHistory from './interactionHistory';
export * as retrieval from './retrieval';
export * as settings from './settings';
export * as users from './users';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /copilot': Operation<'/copilot', 'get'>;
  'PATCH /copilot': Operation<'/copilot', 'patch'>;
}

/**
 * `GET /copilot`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot']['parameters']
): EndpointRequest<IEndpoints['GET /copilot']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot']['body'],
  params?: IEndpoints['PATCH /copilot']['parameters']
): EndpointRequest<IEndpoints['PATCH /copilot']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot',
    paramDefs: [],
    params,
    body,
  };
}
