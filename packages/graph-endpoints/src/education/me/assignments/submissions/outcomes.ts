import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    'delete'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
    'get'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    'get'
  >;
  'PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    'patch'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
    'post'
  >;
}

/**
 * `DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationOutcome-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes`
 *
 */
export function list(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['response']
> {
  return {
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationOutcome-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['body'],
  params?: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes/{educationOutcome-id}',
    paramDefs: [
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
      { name: 'educationOutcome-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes`
 *
 */
export function create(
  body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['body'],
  params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes']['response']
> {
  return {
    method: 'post',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/outcomes',
    paramDefs: [
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
    body,
  };
}
