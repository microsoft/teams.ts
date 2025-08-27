import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    'delete'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
    'get'
  >;
  'GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    'get'
  >;
  'PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    'patch'
  >;
  'POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources': Operation<
    '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
    'post'
  >;
}

/**
 * `DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationAssignmentResource-id', in: 'path' },
      { name: 'educationAssignmentResource-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources`
 *
 */
export function list(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
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
      { name: 'educationAssignmentResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}`
 *
 */
export function get(
  params?: IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationAssignmentResource-id', in: 'path' },
      { name: 'educationAssignmentResource-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['body'],
  params?: IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources/{educationAssignmentResource-id1}',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationAssignmentResource-id', in: 'path' },
      { name: 'educationAssignmentResource-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources`
 *
 */
export function create(
  body: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['body'],
  params?: IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/users/{educationUser-id}/assignments/{educationAssignment-id}/resources/{educationAssignmentResource-id}/dependentResources',
    paramDefs: [
      { name: 'educationUser-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
      { name: 'educationAssignmentResource-id', in: 'path' },
    ],
    params,
    body,
  };
}
