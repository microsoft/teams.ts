export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}',
    'delete'
  >;
  'GET /groups/{group-id}/onenote/notebooks': Operation<
    '/groups/{group-id}/onenote/notebooks',
    'get'
  >;
  'GET /groups/{group-id}/onenote/notebooks/{notebook-id}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}',
    'patch'
  >;
  'POST /groups/{group-id}/onenote/notebooks': Operation<
    '/groups/{group-id}/onenote/notebooks',
    'post'
  >;
  'POST /groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook',
    'post'
  >;
  'POST /groups/{group-id}/onenote/notebooks/getNotebookFromWebUrl': Operation<
    '/groups/{group-id}/onenote/notebooks/getNotebookFromWebUrl',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'notebook-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/notebooks`
 *
 * The collection of OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/onenote/notebooks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/notebooks',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/notebooks/{notebook-id}`
 *
 * The collection of OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}',
    paramDefs: {
      path: ['group-id', 'notebook-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}',
    paramDefs: {
      path: ['group-id', 'notebook-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/onenote/notebooks`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/onenote/notebooks']['body'],
  params?: IEndpoints['POST /groups/{group-id}/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/onenote/notebooks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/onenote/notebooks',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const copyNotebook = {
  /**
   * `POST /groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook`
   *
   * Copies a notebook to the Notebooks folder in the destination Documents library. The folder is created if it doesn&#x27;t exist. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook']['body'],
    params?: IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/copyNotebook',
      paramDefs: {
        path: ['group-id', 'notebook-id'],
      },
      params,
      body,
    };
  },
};

export const getNotebookFromWebUrl = {
  /**
   * `POST /groups/{group-id}/onenote/notebooks/getNotebookFromWebUrl`
   *
   * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/onenote/notebooks/getNotebookFromWebUrl']['body'],
    params?: IEndpoints['POST /groups/{group-id}/onenote/notebooks/getNotebookFromWebUrl']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/onenote/notebooks/getNotebookFromWebUrl']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/onenote/notebooks/getNotebookFromWebUrl',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};
