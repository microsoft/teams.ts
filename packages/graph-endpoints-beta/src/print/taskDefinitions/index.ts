export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/taskDefinitions/{printTaskDefinition-id}': Operation<
    '/print/taskDefinitions/{printTaskDefinition-id}',
    'delete'
  >;
  'GET /print/taskDefinitions': Operation<'/print/taskDefinitions', 'get'>;
  'GET /print/taskDefinitions/{printTaskDefinition-id}': Operation<
    '/print/taskDefinitions/{printTaskDefinition-id}',
    'get'
  >;
  'PATCH /print/taskDefinitions/{printTaskDefinition-id}': Operation<
    '/print/taskDefinitions/{printTaskDefinition-id}',
    'patch'
  >;
  'POST /print/taskDefinitions': Operation<'/print/taskDefinitions', 'post'>;
}

/**
 * `DELETE /print/taskDefinitions/{printTaskDefinition-id}`
 *
 * Delete a taskDefinition. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
 */
export function del(
  params?: IEndpoints['DELETE /print/taskDefinitions/{printTaskDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/taskDefinitions/{printTaskDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/taskDefinitions/{printTaskDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printTaskDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /print/taskDefinitions`
 *
 * Retrieve a list of task definitions that the requesting app defined in the tenant. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
 */
export function list(
  params?: IEndpoints['GET /print/taskDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /print/taskDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/taskDefinitions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /print/taskDefinitions/{printTaskDefinition-id}`
 *
 * Get details about a task definition. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
 */
export function get(
  params?: IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}']['parameters']
): EndpointRequest<IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/taskDefinitions/{printTaskDefinition-id}',
    paramDefs: {
      path: ['printTaskDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /print/taskDefinitions/{printTaskDefinition-id}`
 *
 * Update a task definition. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
 */
export function update(
  body: IEndpoints['PATCH /print/taskDefinitions/{printTaskDefinition-id}']['body'],
  params?: IEndpoints['PATCH /print/taskDefinitions/{printTaskDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/taskDefinitions/{printTaskDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/taskDefinitions/{printTaskDefinition-id}',
    paramDefs: {
      path: ['printTaskDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /print/taskDefinitions`
 *
 * Create a new task definition. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
 */
export function create(
  body: IEndpoints['POST /print/taskDefinitions']['body']
): EndpointRequest<IEndpoints['POST /print/taskDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/taskDefinitions',
    body,
  };
}
