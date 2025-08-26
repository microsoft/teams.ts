import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}': Operation<
    '/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}',
    'delete'
  >;
  'GET /education/reports/speakerAssignmentSubmissions': Operation<
    '/education/reports/speakerAssignmentSubmissions',
    'get'
  >;
  'GET /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}': Operation<
    '/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}',
    'get'
  >;
  'PATCH /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}': Operation<
    '/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}',
    'patch'
  >;
  'POST /education/reports/speakerAssignmentSubmissions': Operation<
    '/education/reports/speakerAssignmentSubmissions',
    'post'
  >;
}

/**
 * `DELETE /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'speakerAssignmentSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/reports/speakerAssignmentSubmissions`
 *
 * Get a list of speaker assignments that were submitted by a student.
 */
export function list(
  params?: IEndpoints['GET /education/reports/speakerAssignmentSubmissions']['parameters']
): EndpointRequest<IEndpoints['GET /education/reports/speakerAssignmentSubmissions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/reports/speakerAssignmentSubmissions',
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
 * `GET /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}`
 *
 * Details of submitted speaker assignments.
 */
export function get(
  params?: IEndpoints['GET /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'speakerAssignmentSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['body'],
  params?: IEndpoints['PATCH /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission-id}',
    paramDefs: [{ name: 'speakerAssignmentSubmission-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /education/reports/speakerAssignmentSubmissions`
 *
 */
export function create(
  body: IEndpoints['POST /education/reports/speakerAssignmentSubmissions']['body'],
  params?: IEndpoints['POST /education/reports/speakerAssignmentSubmissions']['parameters']
): EndpointRequest<IEndpoints['POST /education/reports/speakerAssignmentSubmissions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/reports/speakerAssignmentSubmissions',
    paramDefs: [],
    params,
    body,
  };
}
