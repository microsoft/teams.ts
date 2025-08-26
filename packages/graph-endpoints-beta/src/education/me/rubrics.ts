import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/me/rubrics/{educationRubric-id}': Operation<
    '/education/me/rubrics/{educationRubric-id}',
    'delete'
  >;
  'GET /education/me/rubrics': Operation<'/education/me/rubrics', 'get'>;
  'GET /education/me/rubrics/{educationRubric-id}': Operation<
    '/education/me/rubrics/{educationRubric-id}',
    'get'
  >;
  'PATCH /education/me/rubrics/{educationRubric-id}': Operation<
    '/education/me/rubrics/{educationRubric-id}',
    'patch'
  >;
  'POST /education/me/rubrics': Operation<'/education/me/rubrics', 'post'>;
}

/**
 * `DELETE /education/me/rubrics/{educationRubric-id}`
 *
 * Delete an educationRubric object. Only teachers can perform this operation.
 */
export function del(
  params?: IEndpoints['DELETE /education/me/rubrics/{educationRubric-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /education/me/rubrics/{educationRubric-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/me/rubrics/{educationRubric-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationRubric-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/me/rubrics`
 *
 * Retrieve a list of educationRubric objects.
 */
export function list(
  params?: IEndpoints['GET /education/me/rubrics']['parameters']
): EndpointRequest<IEndpoints['GET /education/me/rubrics']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/rubrics',
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
 * `GET /education/me/rubrics/{educationRubric-id}`
 *
 * Retrieve the properties and relationships of an educationRubric object. Only teachers and students can perform this operation.
 */
export function get(
  params?: IEndpoints['GET /education/me/rubrics/{educationRubric-id}']['parameters']
): EndpointRequest<IEndpoints['GET /education/me/rubrics/{educationRubric-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/rubrics/{educationRubric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationRubric-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/me/rubrics/{educationRubric-id}`
 *
 * Update the properties of an educationRubric object. Only teachers can perform this operation. Updating a rubric attached to an assignment (PATCH /education/classes/{id}/assignments/{id}/rubric) is only possible before the assignment is published, and what is updated is actually the original rubric that exists under /education/users/{id}/rubrics. After the assignment is published, an immutable copy of the rubric is made that is attached to that specific assignment. That rubric can be retrieved using GET /education/classes/{id}/assignments/{id}/rubric, but it can&#x27;t be updated.
 */
export function update(
  body: IEndpoints['PATCH /education/me/rubrics/{educationRubric-id}']['body'],
  params?: IEndpoints['PATCH /education/me/rubrics/{educationRubric-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /education/me/rubrics/{educationRubric-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/me/rubrics/{educationRubric-id}',
    paramDefs: [{ name: 'educationRubric-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /education/me/rubrics`
 *
 * Create a new educationRubric object.
 */
export function create(
  body: IEndpoints['POST /education/me/rubrics']['body'],
  params?: IEndpoints['POST /education/me/rubrics']['parameters']
): EndpointRequest<IEndpoints['POST /education/me/rubrics']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/me/rubrics',
    paramDefs: [],
    params,
    body,
  };
}
