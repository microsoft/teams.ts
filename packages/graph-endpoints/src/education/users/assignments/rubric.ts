import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric',
    'delete'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric',
    'patch'
  >;
}

/**
 * `DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['response']
> {
  return {
    method: 'delete',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric`
 *
 * When set, the grading rubric attached to this assignment.
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['response']
> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric',
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
 * `PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['body'],
  params?: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric']['response']
> {
  return {
    method: 'patch',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/rubric',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}
