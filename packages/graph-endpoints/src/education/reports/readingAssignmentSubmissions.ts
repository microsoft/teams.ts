import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}': Operation<
    '/education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}',
    'delete'
  >;
  'GET /education/reports/readingAssignmentSubmissions': Operation<
    '/education/reports/readingAssignmentSubmissions',
    'get'
  >;
  'GET /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}': Operation<
    '/education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}',
    'get'
  >;
  'PATCH /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}': Operation<
    '/education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}',
    'patch'
  >;
  'POST /education/reports/readingAssignmentSubmissions': Operation<
    '/education/reports/readingAssignmentSubmissions',
    'post'
  >;
}

/**
 * `DELETE /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'readingAssignmentSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/reports/readingAssignmentSubmissions`
 *
 * Get a list of reading assignments that were submitted by a student.
 */
export function list(
  params?: IEndpoints['GET /education/reports/readingAssignmentSubmissions']['parameters']
): EndpointRequest<IEndpoints['GET /education/reports/readingAssignmentSubmissions']['response']> {
  return {
    method: 'get',
    path: '/education/reports/readingAssignmentSubmissions',
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
 * `GET /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'readingAssignmentSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['body'],
  params?: IEndpoints['PATCH /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/reports/readingAssignmentSubmissions/{readingAssignmentSubmission-id}',
    paramDefs: [{ name: 'readingAssignmentSubmission-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /education/reports/readingAssignmentSubmissions`
 *
 */
export function create(
  body: IEndpoints['POST /education/reports/readingAssignmentSubmissions']['body'],
  params?: IEndpoints['POST /education/reports/readingAssignmentSubmissions']['parameters']
): EndpointRequest<IEndpoints['POST /education/reports/readingAssignmentSubmissions']['response']> {
  return {
    method: 'post',
    path: '/education/reports/readingAssignmentSubmissions',
    paramDefs: [],
    params,
    body,
  };
}
