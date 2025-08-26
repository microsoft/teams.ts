export * as excuse from './excuse';
export * as outcomes from './outcomes';
export * as reassign from './reassign';
export * as resources from './resources';
export * as return from './return';
export * as setUpResourcesFolder from './setUpResourcesFolder';
export * as submit from './submit';
export * as submittedResources from './submittedResources';
export * as unsubmit from './unsubmit';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    'patch'
  >;
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions',
    'post'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions`
 *
 * List all the submissions associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application with application permissions can get all the submissions while a student can only get submissions that they&#x27;re associated with.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions',
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
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}`
 *
 * Retrieve a particular submission. Only teachers, students, and applications with application permissions can perform this operation. A submission object represents a student&#x27;s work for an assignment. Resources associated with the submission represent this work. Only the assignedTo student can see and modify the submission. A teacher or application with application permissions has full access to all submissions. The grade and feedback from a teacher are part of the educationOutcome associated with this object. Only teachers or applications with application permissions can add or change grades and feedback. Students will not see the grade or feedback until the assignment has been released.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions`
 *
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions']['response']
> {
  return {
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}
