export * as dependentResources from './dependentResources';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    'delete'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources',
    'get'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    'get'
  >;
  'PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    'patch'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources',
    'post'
  >;
}

/**
 * `DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationSubmissionResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources`
 *
 */
export function list(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationSubmissionResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['body'],
  params?: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}',
    paramDefs: [
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationSubmissionResource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources`
 *
 */
export function create(
  body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['body'],
  params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources',
    paramDefs: [
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
    body,
  };
}
