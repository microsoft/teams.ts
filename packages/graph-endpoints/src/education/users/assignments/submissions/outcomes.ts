import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    'delete'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
    'get'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    'patch'
  >;
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
    'post'
  >;
}

/**
 * `DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationOutcome-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes`
 *
 */
export function list(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['response']
> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
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
 * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationOutcome-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['body'],
  params?: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationOutcome-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes`
 *
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['response']
> {
  return {
    method: 'post',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
    body,
  };
}
