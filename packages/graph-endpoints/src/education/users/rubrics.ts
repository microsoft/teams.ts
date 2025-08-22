import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/users/{educationUser-id}/rubrics/{educationRubric-id}': Operation<
    '/education/users/{educationUser-id}/rubrics/{educationRubric-id}',
    'delete'
  >;
  'GET /education/users/{educationUser-id}/rubrics': Operation<
    '/education/users/{educationUser-id}/rubrics',
    'get'
  >;
  'GET /education/users/{educationUser-id}/rubrics/{educationRubric-id}': Operation<
    '/education/users/{educationUser-id}/rubrics/{educationRubric-id}',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/rubrics/{educationRubric-id}': Operation<
    '/education/users/{educationUser-id}/rubrics/{educationRubric-id}',
    'patch'
  >;
  'POST /education/users/{educationUser-id}/rubrics': Operation<
    '/education/users/{educationUser-id}/rubrics',
    'post'
  >;
}

/**
 * `DELETE /education/users/{educationUser-id}/rubrics/{educationRubric-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/users/{educationUser-id}/rubrics/{educationRubric-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationRubric-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/rubrics`
 *
 * When set, the grading rubric attached to the assignment.
 */
export function list(
  params?: IEndpoints['GET /education/users/{educationUser-id}/rubrics']['parameters']
): EndpointRequest<IEndpoints['GET /education/users/{educationUser-id}/rubrics']['response']> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/rubrics',
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
 * `GET /education/users/{educationUser-id}/rubrics/{educationRubric-id}`
 *
 * When set, the grading rubric attached to the assignment.
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/users/{educationUser-id}/rubrics/{educationRubric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationRubric-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/users/{educationUser-id}/rubrics/{educationRubric-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['body'],
  params?: IEndpoints['PATCH /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/users/{educationUser-id}/rubrics/{educationRubric-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/users/{educationUser-id}/rubrics/{educationRubric-id}',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationRubric-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/users/{educationUser-id}/rubrics`
 *
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/rubrics']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/rubrics']['parameters']
): EndpointRequest<IEndpoints['POST /education/users/{educationUser-id}/rubrics']['response']> {
  return {
    method: 'post',
    path: '/education/users/{educationUser-id}/rubrics',
    paramDefs: [{ name: 'educationUser-id', in: 'path' }],
    params,
    body,
  };
}
