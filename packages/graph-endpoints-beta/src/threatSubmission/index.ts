export * as emailThreatSubmissionPolicies from './emailThreatSubmissionPolicies';
export * as emailThreats from './emailThreats';
export * as fileThreats from './fileThreats';
export * as urlThreats from './urlThreats';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /threatSubmission': Operation<'/threatSubmission', 'get'>;
  'PATCH /threatSubmission': Operation<'/threatSubmission', 'patch'>;
}

/**
 * `GET /threatSubmission`
 *
 */
export function get(
  params?: IEndpoints['GET /threatSubmission']['parameters']
): EndpointRequest<IEndpoints['GET /threatSubmission']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/threatSubmission',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /threatSubmission`
 *
 */
export function update(
  body: IEndpoints['PATCH /threatSubmission']['body'],
  params?: IEndpoints['PATCH /threatSubmission']['parameters']
): EndpointRequest<IEndpoints['PATCH /threatSubmission']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/threatSubmission',
    paramDefs: [],
    params,
    body,
  };
}
