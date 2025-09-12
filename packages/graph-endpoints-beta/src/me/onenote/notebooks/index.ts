export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/notebooks/{notebook-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}',
    'delete'
  >;
  'GET /me/onenote/notebooks': Operation<'/me/onenote/notebooks', 'get'>;
  'GET /me/onenote/notebooks/{notebook-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}',
    'get'
  >;
  'PATCH /me/onenote/notebooks/{notebook-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}',
    'patch'
  >;
  'POST /me/onenote/notebooks': Operation<'/me/onenote/notebooks', 'post'>;
  'POST /me/onenote/notebooks/{notebook-id}/copyNotebook': Operation<
    '/me/onenote/notebooks/{notebook-id}/copyNotebook',
    'post'
  >;
  'POST /me/onenote/notebooks/getNotebookFromWebUrl': Operation<
    '/me/onenote/notebooks/getNotebookFromWebUrl',
    'post'
  >;
}

/**
 * `DELETE /me/onenote/notebooks/{notebook-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onenote/notebooks/{notebook-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['notebook-id'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/notebooks`
 *
 * Retrieve a list of notebook objects.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/notebooks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/notebooks',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/notebooks/{notebook-id}`
 *
 * Retrieve the properties and relationships of a notebook object.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/notebooks/{notebook-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}',
    paramDefs: {
      path: ['notebook-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/onenote/notebooks/{notebook-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onenote/notebooks/{notebook-id}',
    paramDefs: {
      path: ['notebook-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/onenote/notebooks`
 *
 * Create a new OneNote notebook.
 */
export function create(
  body: IEndpoints['POST /me/onenote/notebooks']['body']
): EndpointRequest<IEndpoints['POST /me/onenote/notebooks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/notebooks',
    body,
  };
}

export const copyNotebook = {
  /**
   * `POST /me/onenote/notebooks/{notebook-id}/copyNotebook`
   *
   * Copies a notebook to the Notebooks folder in the destination Documents library. The folder is created if it doesn&#x27;t exist. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/copyNotebook']['body'],
    params?: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/copyNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onenote/notebooks/{notebook-id}/copyNotebook']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onenote/notebooks/{notebook-id}/copyNotebook',
      paramDefs: {
        path: ['notebook-id'],
      },
      params,
      body,
    };
  },
};

export const getNotebookFromWebUrl = {
  /**
   * `POST /me/onenote/notebooks/getNotebookFromWebUrl`
   *
   * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
   */
  create: function create(
    body: IEndpoints['POST /me/onenote/notebooks/getNotebookFromWebUrl']['body']
  ): EndpointRequest<IEndpoints['POST /me/onenote/notebooks/getNotebookFromWebUrl']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onenote/notebooks/getNotebookFromWebUrl',
      body,
    };
  },
};
