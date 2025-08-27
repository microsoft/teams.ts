export * as defaultGradingScheme from './defaultGradingScheme';
export * as gradingCategories from './gradingCategories';
export * as gradingSchemes from './gradingSchemes';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/assignmentSettings': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignmentSettings': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignmentSettings': Operation<
    '/education/classes/{educationClass-id}/assignmentSettings',
    'patch'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/assignmentSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentSettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/classes/{educationClass-id}/assignmentSettings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignmentSettings`
 *
 * Read the properties and relationships of an educationAssignmentSettings object. Only teachers can perform this operation.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignmentSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignmentSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/assignmentSettings`
 *
 * Update the properties of an educationAssignmentSettings object. Only teachers can update these settings.
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignmentSettings',
    paramDefs: [{ name: 'educationClass-id', in: 'path' }],
    params,
    body,
  };
}
