export * as pages from './pages';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'delete'
  >;
  'GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
    'get'
  >;
  'GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'patch'
  >;
  'POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
    'post'
  >;
  'POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook',
    'post'
  >;
  'POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup',
    'post'
  >;
  'GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook',
    'get'
  >;
  'GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup': Operation<
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections`
 *
 * The sections in the section group. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
    paramDefs: {
      path: ['site-id', 'notebook-id', 'sectionGroup-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 * The sections in the section group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: {
      path: ['site-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: {
      path: ['site-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['response']
> {
  return {
    method: 'post',
    path: '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
    paramDefs: {
      path: ['site-id', 'notebook-id', 'sectionGroup-id'],
    },
    params,
    body,
  };
}

export const copyToNotebook = {
  /**
   * `POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook`
   *
   * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook']['body'],
    params?: IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook']['response']
  > {
    return {
      method: 'post',
      path: '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook',
      paramDefs: {
        path: ['site-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      },
      params,
      body,
    };
  },
};

export const copyToSectionGroup = {
  /**
   * `POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup`
   *
   * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup']['body'],
    params?: IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup']['response']
  > {
    return {
      method: 'post',
      path: '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup',
      paramDefs: {
        path: ['site-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      },
      params,
      body,
    };
  },
};

export const parentNotebook = {
  /**
   * `GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook`
   *
   * The notebook that contains the section.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      },
      params,
    };
  },
};

export const parentSectionGroup = {
  /**
   * `GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup`
   *
   * The section group that contains the section.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      },
      params,
    };
  },
};
