import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}',
    'patch'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources',
    'post'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationSubmissionResource-id', in: 'path' },
      { name: 'educationSubmissionResource-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources`
 *
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationSubmissionResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}`
 *
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationSubmissionResource-id', in: 'path' },
      { name: 'educationSubmissionResource-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources/{educationSubmissionResource-id1}',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationSubmissionResource-id', in: 'path' },
      { name: 'educationSubmissionResource-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources`
 *
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/submittedResources/{educationSubmissionResource-id}/dependentResources',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationSubmissionResource-id', in: 'path' },
    ],
    params,
    body,
  };
}
