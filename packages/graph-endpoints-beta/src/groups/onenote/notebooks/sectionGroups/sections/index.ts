export * as pages from './pages';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'delete'
  >;
  'GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
    'get'
  >;
  'GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'patch'
  >;
  'POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
    'post'
  >;
  'POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook',
    'post'
  >;
  'POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup',
    'post'
  >;
  'GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook',
    'get'
  >;
  'GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections`
 *
 * The sections in the section group. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
    paramDefs: {
      path: ['group-id', 'notebook-id', 'sectionGroup-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 * The sections in the section group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: {
      path: ['group-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: {
      path: ['group-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['body'],
  params?: IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
    paramDefs: {
      path: ['group-id', 'notebook-id', 'sectionGroup-id'],
    },
    params,
    body,
  };
}

export const copyToNotebook = {
  /**
   * `POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook`
   *
   * Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook']['body'],
    params?: IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook',
      paramDefs: {
        path: ['group-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      },
      params,
      body,
    };
  },
};

export const copyToSectionGroup = {
  /**
   * `POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup`
   *
   * Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup']['body'],
    params?: IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup',
      paramDefs: {
        path: ['group-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      },
      params,
      body,
    };
  },
};

export const parentNotebook = {
  /**
   * `GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook`
   *
   * The notebook that contains the section.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      },
      params,
    };
  },
};

export const parentSectionGroup = {
  /**
   * `GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup`
   *
   * The section group that contains the section.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      },
      params,
    };
  },
};
