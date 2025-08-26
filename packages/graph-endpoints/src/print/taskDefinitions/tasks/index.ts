export * as definition from './definition';
export * as trigger from './trigger';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}': Operation<
    '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}',
    'delete'
  >;
  'GET /print/taskDefinitions/{printTaskDefinition-id}/tasks': Operation<
    '/print/taskDefinitions/{printTaskDefinition-id}/tasks',
    'get'
  >;
  'GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}': Operation<
    '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}',
    'get'
  >;
  'PATCH /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}': Operation<
    '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}',
    'patch'
  >;
  'POST /print/taskDefinitions/{printTaskDefinition-id}/tasks': Operation<
    '/print/taskDefinitions/{printTaskDefinition-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}']['response']
> {
  return {
    method: 'delete',
    path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printTaskDefinition-id', in: 'path' },
      { name: 'printTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/taskDefinitions/{printTaskDefinition-id}/tasks`
 *
 * Retrieve a list of tasks associated with a task definition. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
 */
export function list(
  params?: IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}/tasks']['response']
> {
  return {
    method: 'get',
    path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printTaskDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}`
 *
 * Get details about a print task. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
 */
export function get(
  params?: IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}']['response']
> {
  return {
    method: 'get',
    path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printTaskDefinition-id', in: 'path' },
      { name: 'printTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}`
 *
 * Update a print task. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.
 */
export function update(
  body: IEndpoints['PATCH /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}']['body'],
  params?: IEndpoints['PATCH /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}']['response']
> {
  return {
    method: 'patch',
    path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}',
    paramDefs: [
      { name: 'printTaskDefinition-id', in: 'path' },
      { name: 'printTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /print/taskDefinitions/{printTaskDefinition-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /print/taskDefinitions/{printTaskDefinition-id}/tasks']['body'],
  params?: IEndpoints['POST /print/taskDefinitions/{printTaskDefinition-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/taskDefinitions/{printTaskDefinition-id}/tasks']['response']
> {
  return {
    method: 'post',
    path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks',
    paramDefs: [{ name: 'printTaskDefinition-id', in: 'path' }],
    params,
    body,
  };
}
