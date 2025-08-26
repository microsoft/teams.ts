import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}': Operation<
    '/security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    'delete'
  >;
  'GET /security/threatSubmission/emailThreatSubmissionPolicies': Operation<
    '/security/threatSubmission/emailThreatSubmissionPolicies',
    'get'
  >;
  'GET /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}': Operation<
    '/security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    'get'
  >;
  'PATCH /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}': Operation<
    '/security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    'patch'
  >;
  'POST /security/threatSubmission/emailThreatSubmissionPolicies': Operation<
    '/security/threatSubmission/emailThreatSubmissionPolicies',
    'post'
  >;
}

/**
 * `DELETE /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'emailThreatSubmissionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatSubmission/emailThreatSubmissionPolicies`
 *
 * Get a list of the emailThreatSubmissionPolicy objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/threatSubmission/emailThreatSubmissionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatSubmission/emailThreatSubmissionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatSubmission/emailThreatSubmissionPolicies',
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
 * `GET /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}`
 *
 * Read the properties and relationships of an emailThreatSubmissionPolicy object.
 */
export function get(
  params?: IEndpoints['GET /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'emailThreatSubmissionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}',
    paramDefs: [{ name: 'emailThreatSubmissionPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatSubmission/emailThreatSubmissionPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatSubmission/emailThreatSubmissionPolicies']['body'],
  params?: IEndpoints['POST /security/threatSubmission/emailThreatSubmissionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/threatSubmission/emailThreatSubmissionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatSubmission/emailThreatSubmissionPolicies',
    paramDefs: [],
    params,
    body,
  };
}
