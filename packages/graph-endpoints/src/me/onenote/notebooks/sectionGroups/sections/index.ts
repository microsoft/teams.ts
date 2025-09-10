export * as pages from './pages';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'delete'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
    'get'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'get'
  >;
  'PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    'patch'
  >;
  'POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
    'post'
  >;
  'POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook',
    'post'
  >;
  'POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup',
    'post'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook',
    'get'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup',
    'get'
  >;
}

/**
 * `DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections`
 *
 * The sections in the section group. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['response']
> {
  return {
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
    paramDefs: {
      path: ['notebook-id', 'sectionGroup-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 * The sections in the section group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: {
      path: ['notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
    paramDefs: {
      path: ['notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections`
 *
 */
export function create(
  body: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['body'],
  params?: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['response']
> {
  return {
    method: 'post',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
    paramDefs: {
      path: ['notebook-id', 'sectionGroup-id'],
    },
    params,
    body,
  };
}

export const copyToNotebook = {
  /**
   * `POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook`
   *
   * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook']['body'],
    params?: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook']['response']
  > {
    return {
      method: 'post',
      path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook',
      paramDefs: {
        path: ['notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      },
      params,
      body,
    };
  },
};

export const copyToSectionGroup = {
  /**
   * `POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup`
   *
   * For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup']['body'],
    params?: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup']['response']
  > {
    return {
      method: 'post',
      path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup',
      paramDefs: {
        path: ['notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      },
      params,
      body,
    };
  },
};

export const parentNotebook = {
  /**
   * `GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook`
   *
   * The notebook that contains the section.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook']['response']
  > {
    return {
      method: 'get',
      path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      },
      params,
    };
  },
};

export const parentSectionGroup = {
  /**
   * `GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup`
   *
   * The section group that contains the section.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup']['response']
  > {
    return {
      method: 'get',
      path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['notebook-id', 'sectionGroup-id', 'onenoteSection-id'],
      },
      params,
    };
  },
};
