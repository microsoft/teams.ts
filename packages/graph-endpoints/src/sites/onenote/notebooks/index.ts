export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}',
    'delete'
  >;
  'GET /sites/{site-id}/onenote/notebooks': Operation<'/sites/{site-id}/onenote/notebooks', 'get'>;
  'GET /sites/{site-id}/onenote/notebooks/{notebook-id}': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}',
    'patch'
  >;
  'POST /sites/{site-id}/onenote/notebooks': Operation<
    '/sites/{site-id}/onenote/notebooks',
    'post'
  >;
  'POST /sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook',
    'post'
  >;
  'POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl': Operation<
    '/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'notebook-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/notebooks`
 *
 * The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/notebooks']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/notebooks',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/notebooks/{notebook-id}`
 *
 * The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}',
    paramDefs: {
      path: ['site-id', 'notebook-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}',
    paramDefs: {
      path: ['site-id', 'notebook-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/onenote/notebooks`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/notebooks']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/notebooks']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/onenote/notebooks']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/onenote/notebooks',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const copyNotebook = {
  /**
   * `POST /sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook`
   *
   * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook']['body'],
    params?: IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook']['response']
  > {
    return {
      method: 'post',
      path: '/sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook',
      paramDefs: {
        path: ['site-id', 'notebook-id'],
      },
      params,
      body,
    };
  },
};

export const getNotebookFromWebUrl = {
  /**
   * `POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl`
   *
   * Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl']['body'],
    params?: IEndpoints['POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl']['response']
  > {
    return {
      method: 'post',
      path: '/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};
