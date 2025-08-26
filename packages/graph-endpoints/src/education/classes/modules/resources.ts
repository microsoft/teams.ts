import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}',
    'patch'
  >;
  'POST /education/classes/{educationClass-id}/modules/{educationModule-id}/resources': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources',
    'post'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}`
 *
 * Delete a specific educationModuleResource attached to a module. Only teachers in the class can remove a resource.
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['response']
> {
  return {
    method: 'delete',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationModule-id', in: 'path' },
      { name: 'educationModuleResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources`
 *
 * Get all the educationModuleResource objects associated with a module. Only teachers, students, and applications with application permissions can perform this operation.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources',
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
      { name: 'educationModule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}`
 *
 * Get the properties of a resource associated with a module. Only teachers, students, and applications with application permissions can perform this operation.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['response']
> {
  return {
    method: 'get',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationModule-id', in: 'path' },
      { name: 'educationModuleResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}`
 *
 * Update a resource in a module. Only teachers can perform this operation. The only one property that can be updated is displayName, for all resource types.
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}']['response']
> {
  return {
    method: 'patch',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources/{educationModuleResource-id}',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationModule-id', in: 'path' },
      { name: 'educationModuleResource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/modules/{educationModule-id}/resources`
 *
 * Create a resource in a module. Only teachers can perform this operation. You can create the following types of module resources: Every resource has an @odata.type property to indicate which type of resource is being created.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/resources']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/resources']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/modules/{educationModule-id}/resources']['response']
> {
  return {
    method: 'post',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}/resources',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationModule-id', in: 'path' },
    ],
    params,
    body,
  };
}
