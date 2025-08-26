import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/me/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/me/assignments/{educationAssignment-id}/rubric',
    'delete'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/me/assignments/{educationAssignment-id}/rubric',
    'get'
  >;
  'PATCH /education/me/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/me/assignments/{educationAssignment-id}/rubric',
    'patch'
  >;
}

/**
 * `DELETE /education/me/assignments/{educationAssignment-id}/rubric`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/rubric']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/rubric']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/me/assignments/{educationAssignment-id}/rubric',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/rubric`
 *
 * When set, the grading rubric attached to this assignment.
 */
export function get(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/rubric']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/rubric']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/rubric',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/me/assignments/{educationAssignment-id}/rubric`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/rubric']['body'],
  params?: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/rubric']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/rubric']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/me/assignments/{educationAssignment-id}/rubric',
    paramDefs: [{ name: 'educationAssignment-id', in: 'path' }],
    params,
    body,
  };
}
