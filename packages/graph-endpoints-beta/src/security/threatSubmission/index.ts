export * as emailThreatSubmissionPolicies from './emailThreatSubmissionPolicies';
export * as emailThreats from './emailThreats';
export * as fileThreats from './fileThreats';
export * as urlThreats from './urlThreats';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatSubmission': Operation<'/security/threatSubmission', 'delete'>;
  'GET /security/threatSubmission': Operation<'/security/threatSubmission', 'get'>;
  'PATCH /security/threatSubmission': Operation<'/security/threatSubmission', 'patch'>;
}

/**
 * `DELETE /security/threatSubmission`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatSubmission']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/threatSubmission']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatSubmission',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/threatSubmission`
 *
 * A threat submission sent to Microsoft; for example, a suspicious email threat, URL threat, or file threat.
 */
export function get(
  params?: IEndpoints['GET /security/threatSubmission']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatSubmission']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatSubmission',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatSubmission`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatSubmission']['body'],
  params?: IEndpoints['PATCH /security/threatSubmission']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/threatSubmission']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatSubmission',
    paramDefs: [],
    params,
    body,
  };
}
