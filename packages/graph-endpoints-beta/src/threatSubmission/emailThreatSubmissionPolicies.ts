import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}': Operation<
    '/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    'delete'
  >;
  'GET /threatSubmission/emailThreatSubmissionPolicies': Operation<
    '/threatSubmission/emailThreatSubmissionPolicies',
    'get'
  >;
  'GET /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}': Operation<
    '/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    'get'
  >;
  'PATCH /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}': Operation<
    '/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    'patch'
  >;
  'POST /threatSubmission/emailThreatSubmissionPolicies': Operation<
    '/threatSubmission/emailThreatSubmissionPolicies',
    'post'
  >;
}

/**
 * `DELETE /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'emailThreatSubmissionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /threatSubmission/emailThreatSubmissionPolicies`
 *
 */
export function list(
  params?: IEndpoints['GET /threatSubmission/emailThreatSubmissionPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /threatSubmission/emailThreatSubmissionPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/threatSubmission/emailThreatSubmissionPolicies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'emailThreatSubmissionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    paramDefs: [{ name: 'emailThreatSubmissionPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /threatSubmission/emailThreatSubmissionPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /threatSubmission/emailThreatSubmissionPolicies']['body'],
  params?: IEndpoints['POST /threatSubmission/emailThreatSubmissionPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /threatSubmission/emailThreatSubmissionPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/threatSubmission/emailThreatSubmissionPolicies',
    paramDefs: [],
    params,
    body,
  };
}
