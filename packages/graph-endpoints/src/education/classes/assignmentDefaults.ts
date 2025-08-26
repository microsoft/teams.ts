import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/assignmentDefaults': Operation<
    '/education/classes/{educationClass-id}/assignmentDefaults',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/assignmentDefaults': Operation<
    '/education/classes/{educationClass-id}/assignmentDefaults',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/assignmentDefaults': Operation<
    '/education/classes/{educationClass-id}/assignmentDefaults',
    'patch'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/assignmentDefaults`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentDefaults']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/assignmentDefaults']['response']
> {
  return {
    method: 'delete',
    path: '/education/classes/{educationClass-id}/assignmentDefaults',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/assignmentDefaults`
 *
 * Read the properties and relationships of an educationAssignmentDefaults object.  These are the class-level assignment defaults respected by new assignments created in the class. Callers can continue to specify custom values on each assignment creation if they don&#x27;t want the default behaviors. Only teachers can perform this operation.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/assignmentDefaults']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/assignmentDefaults']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/assignmentDefaults',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/assignmentDefaults`
 *
 * Update the properties of an educationAssignmentDefaults object. Only teachers can update these settings.
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentDefaults']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentDefaults']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/assignmentDefaults']['response']
> {
  return {
    method: 'patch',
    path: '/education/classes/{educationClass-id}/assignmentDefaults',
    paramDefs: [{ name: 'educationClass-id', in: 'path' }],
    params,
    body,
  };
}
