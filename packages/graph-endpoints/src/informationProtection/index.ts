export * as bitlocker from './bitlocker';
export * as threatAssessmentRequests from './threatAssessmentRequests';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /informationProtection': Operation<'/informationProtection', 'get'>;
  'PATCH /informationProtection': Operation<'/informationProtection', 'patch'>;
}

/**
 * `GET /informationProtection`
 *
 */
export function get(
  params?: IEndpoints['GET /informationProtection']['parameters']
): EndpointRequest<IEndpoints['GET /informationProtection']['response']> {
  return {
    method: 'get',
    path: '/informationProtection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /informationProtection`
 *
 */
export function update(
  body: IEndpoints['PATCH /informationProtection']['body'],
  params?: IEndpoints['PATCH /informationProtection']['parameters']
): EndpointRequest<IEndpoints['PATCH /informationProtection']['response']> {
  return {
    method: 'patch',
    path: '/informationProtection',
    paramDefs: [],
    params,
    body,
  };
}
