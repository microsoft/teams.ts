export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onenote/notebooks/{notebook-id}': Operation<
    '/users/{user-id}/onenote/notebooks/{notebook-id}',
    'delete'
  >;
  'GET /users/{user-id}/onenote/notebooks': Operation<'/users/{user-id}/onenote/notebooks', 'get'>;
  'GET /users/{user-id}/onenote/notebooks/{notebook-id}': Operation<
    '/users/{user-id}/onenote/notebooks/{notebook-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onenote/notebooks/{notebook-id}': Operation<
    '/users/{user-id}/onenote/notebooks/{notebook-id}',
    'patch'
  >;
  'POST /users/{user-id}/onenote/notebooks': Operation<
    '/users/{user-id}/onenote/notebooks',
    'post'
  >;
  'POST /users/{user-id}/onenote/notebooks/{notebook-id}/copyNotebook': Operation<
    '/users/{user-id}/onenote/notebooks/{notebook-id}/copyNotebook',
    'post'
  >;
  'POST /users/{user-id}/onenote/notebooks/getNotebookFromWebUrl': Operation<
    '/users/{user-id}/onenote/notebooks/getNotebookFromWebUrl',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/onenote/notebooks/{notebook-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/onenote/notebooks/{notebook-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'notebook-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/notebooks`
 *
 * The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/notebooks']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/onenote/notebooks',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/notebooks/{notebook-id}`
 *
 * The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/notebooks/{notebook-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/onenote/notebooks/{notebook-id}',
    paramDefs: {
      path: ['user-id', 'notebook-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onenote/notebooks/{notebook-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onenote/notebooks/{notebook-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/onenote/notebooks/{notebook-id}',
    paramDefs: {
      path: ['user-id', 'notebook-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onenote/notebooks`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onenote/notebooks']['body'],
  params?: IEndpoints['POST /users/{user-id}/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/onenote/notebooks']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/onenote/notebooks',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const copyNotebook = {
  /**
   * `POST /users/{user-id}/onenote/notebooks/{notebook-id}/copyNotebook`
   *
   * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onenote/notebooks/{notebook-id}/copyNotebook']['body'],
    params?: IEndpoints['POST /users/{user-id}/onenote/notebooks/{notebook-id}/copyNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/onenote/notebooks/{notebook-id}/copyNotebook']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/onenote/notebooks/{notebook-id}/copyNotebook',
      paramDefs: {
        path: ['user-id', 'notebook-id'],
      },
      params,
      body,
    };
  },
};

export const getNotebookFromWebUrl = {
  /**
   * `POST /users/{user-id}/onenote/notebooks/getNotebookFromWebUrl`
   *
   * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/onenote/notebooks/getNotebookFromWebUrl']['body'],
    params?: IEndpoints['POST /users/{user-id}/onenote/notebooks/getNotebookFromWebUrl']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/onenote/notebooks/getNotebookFromWebUrl']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/onenote/notebooks/getNotebookFromWebUrl',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
