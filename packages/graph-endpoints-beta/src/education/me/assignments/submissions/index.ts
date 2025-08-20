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
  'DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    'delete'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions',
    'get'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    'get'
  >;
  'PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    'patch'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/submissions': Operation<
    '/education/me/assignments/{educationAssignment-id}/submissions',
    'post'
  >;
}

/**
 * `DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/submissions`
 *
 * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/submissions',
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
    ],
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}`
 *
 * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['body'],
  params?: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}',
    paramDefs: [
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationSubmission-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/me/assignments/{educationAssignment-id}/submissions`
 *
 */
export function create(
  body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions']['body'],
  params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/me/assignments/{educationAssignment-id}/submissions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/me/assignments/{educationAssignment-id}/submissions',
    paramDefs: [{ name: 'educationAssignment-id', in: 'path' }],
    params,
    body,
  };
}
