export * as pin from './pin';
export * as publish from './publish';
export * as resources from './resources';
export * as setUpResourcesFolder from './setUpResourcesFolder';
export * as unpin from './unpin';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}',
    'delete'
  >;
  'GET /education/classes/{educationClass-id}/modules': Operation<
    '/education/classes/{educationClass-id}/modules',
    'get'
  >;
  'GET /education/classes/{educationClass-id}/modules/{educationModule-id}': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}',
    'get'
  >;
  'PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}': Operation<
    '/education/classes/{educationClass-id}/modules/{educationModule-id}',
    'patch'
  >;
  'POST /education/classes/{educationClass-id}/modules': Operation<
    '/education/classes/{educationClass-id}/modules',
    'post'
  >;
}

/**
 * `DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}`
 *
 * Delete an existing module in a class. Only teachers within a class can delete modules.
 */
export function del(
  params?: IEndpoints['DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/classes/{educationClass-id}/modules/{educationModule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationModule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /education/classes/{educationClass-id}/modules`
 *
 * Retrieve a list of module objects. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application with application permissions can see all module objects for the class. Students can only see published modules.
 */
export function list(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/modules']['parameters']
): EndpointRequest<IEndpoints['GET /education/classes/{educationClass-id}/modules']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/modules',
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
 * `GET /education/classes/{educationClass-id}/modules/{educationModule-id}`
 *
 * Get the properties and relationships of a module. Only teachers, students, and applications with application permissions can perform this operation. Students can only see published modules; teachers and applications with application permissions can see all modules in a class.
 */
export function get(
  params?: IEndpoints['GET /education/classes/{educationClass-id}/modules/{educationModule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/classes/{educationClass-id}/modules/{educationModule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationModule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}`
 *
 * Update an educationModule object in a class. Only teachers in the class can perform this operation. Note that you can&#x27;t use a PATCH request to change the status of a module. Use the publish action to change the module status.
 */
export function update(
  body: IEndpoints['PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}']['body'],
  params?: IEndpoints['PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/classes/{educationClass-id}/modules/{educationModule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/classes/{educationClass-id}/modules/{educationModule-id}',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationModule-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /education/classes/{educationClass-id}/modules`
 *
 * Create a new module in a class. Only teachers in a class can create a module. Modules start in the draft state, which means that students won&#x27;t see the modules until publication.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/modules']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/modules']['parameters']
): EndpointRequest<IEndpoints['POST /education/classes/{educationClass-id}/modules']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes/{educationClass-id}/modules',
    paramDefs: [{ name: 'educationClass-id', in: 'path' }],
    params,
    body,
  };
}
