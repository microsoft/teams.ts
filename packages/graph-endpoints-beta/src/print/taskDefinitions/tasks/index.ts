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
  'GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition': Operation<
    '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition',
    'get'
  >;
  'GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger': Operation<
    '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger',
    'get'
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
    ver: 'beta',
    method: 'delete',
    path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['printTaskDefinition-id', 'printTask-id'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks',
    paramDefs: {
      path: ['printTaskDefinition-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}',
    paramDefs: {
      path: ['printTaskDefinition-id', 'printTask-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}',
    paramDefs: {
      path: ['printTaskDefinition-id', 'printTask-id'],
    },
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
    ver: 'beta',
    method: 'post',
    path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks',
    paramDefs: {
      path: ['printTaskDefinition-id'],
    },
    params,
    body,
  };
}

export const definition = {
  /**
   * `GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition`
   *
   * The printTaskDefinition that was used to create this task. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/definition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printTaskDefinition-id', 'printTask-id'],
      },
      params,
    };
  },
};

export const trigger = {
  /**
   * `GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger`
   *
   * The printTaskTrigger that triggered this task&#x27;s execution. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/print/taskDefinitions/{printTaskDefinition-id}/tasks/{printTask-id}/trigger',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printTaskDefinition-id', 'printTask-id'],
      },
      params,
    };
  },
};
