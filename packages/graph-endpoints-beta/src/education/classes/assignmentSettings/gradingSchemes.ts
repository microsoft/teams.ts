import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}',
    'patch'
  >;
  'POST /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes',
    'post'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}`
 *
 * Delete an educationGradingScheme object.
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationGradingScheme-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes`
 *
 * Read the properties and relationships of an educationGradingScheme object.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}`
 *
 * Read the properties and relationships of an educationGradingScheme object.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationGradingScheme-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes/{educationGradingScheme-id}',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationGradingScheme-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes`
 *
 * Create a new educationGradingScheme object.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignmentSettings/gradingSchemes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignmentSettings/gradingSchemes',
    paramDefs: [{ name: 'educationClass-id', in: 'path' }],
    params,
    body,
  };
}
