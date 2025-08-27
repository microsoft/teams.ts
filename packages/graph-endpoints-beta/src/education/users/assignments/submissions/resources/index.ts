export * as dependentResources from './dependentResources';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}',
    'delete'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources',
    'get'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}',
    'patch'
  >;
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources',
    'post'
  >;
}

/**
 * `DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationSubmissionResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources`
 *
 */
export function list(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationSubmissionResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['body'],
  params?: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources/{educationSubmissionResource-id}',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationSubmissionResource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources`
 *
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/resources',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
    body,
  };
}
