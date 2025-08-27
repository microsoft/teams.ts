export * as activate from './activate';
export * as categories from './categories';
export * as deactivate from './deactivate';
export * as gradingCategory from './gradingCategory';
export * as gradingScheme from './gradingScheme';
export * as publish from './publish';
export * as resources from './resources';
export * as rubric from './rubric';
export * as setUpFeedbackResourcesFolder from './setUpFeedbackResourcesFolder';
export * as setUpResourcesFolder from './setUpResourcesFolder';
export * as submissions from './submissions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}',
    'delete'
  >;
  'GET /education/users/{educationUser-id}/assignments': Operation<
    '/education/users/{educationUser-id}/assignments',
    'get'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}',
    'patch'
  >;
  'POST /education/users/{educationUser-id}/assignments': Operation<
    '/education/users/{educationUser-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/assignments`
 *
 * Returns a list of assignments assigned to a user for all classes. Only teachers, students, and applications with application permissions can perform this operation. This utility namespace allows a caller to find all of a student&#x27;s or teacher&#x27;s assignments in a single call, rather than having to request assignments from each class. The assignment list contains what is needed to get the detailed information for the assignment from within the class namespace. All other operations on the assignment should use the class namespace.
 */
export function list(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments']['parameters']
): EndpointRequest<IEndpoints['GET /education/users/{educationUser-id}/assignments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments',
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
    ],
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}`
 *
 * List of assignments for the user. Nullable.
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['body'],
  params?: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/users/{educationUser-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/assignments']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/assignments']['parameters']
): EndpointRequest<IEndpoints['POST /education/users/{educationUser-id}/assignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/users/{educationUser-id}/assignments',
    paramDefs: [{ name: 'educationUser-id', in: 'path' }],
    params,
    body,
  };
}
