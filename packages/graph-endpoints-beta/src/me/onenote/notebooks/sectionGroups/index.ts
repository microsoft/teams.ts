export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    'delete'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sectionGroups': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups',
    'get'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    'get'
  >;
  'PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    'patch'
  >;
  'POST /me/onenote/notebooks/{notebook-id}/sectionGroups': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups',
    'post'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook',
    'get'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup',
    'get'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups',
    'get'
  >;
  'GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}': Operation<
    '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}',
    'get'
  >;
}

/**
 * `DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['notebook-id', 'sectionGroup-id'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/notebooks/{notebook-id}/sectionGroups`
 *
 * Retrieve a list of section groups from the specified notebook.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups',
    paramDefs: {
      path: ['notebook-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}`
 *
 * The section groups in the notebook. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    paramDefs: {
      path: ['notebook-id', 'sectionGroup-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    paramDefs: {
      path: ['notebook-id', 'sectionGroup-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/onenote/notebooks/{notebook-id}/sectionGroups`
 *
 * Create a new section group in the specified notebook.
 */
export function create(
  body: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups']['body'],
  params?: IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onenote/notebooks/{notebook-id}/sectionGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/notebooks/{notebook-id}/sectionGroups',
    paramDefs: {
      path: ['notebook-id'],
    },
    params,
    body,
  };
}

export const parentNotebook = {
  /**
   * `GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook`
   *
   * The notebook that contains the section group. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['notebook-id', 'sectionGroup-id'],
      },
      params,
    };
  },
};

export const parentSectionGroup = {
  /**
   * `GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup`
   *
   * The section group that contains the section group. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['notebook-id', 'sectionGroup-id'],
      },
      params,
    };
  },
};

export const sectionGroupsSectionGroups = {
  /**
   * `GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups`
   *
   * The section groups in the section. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['notebook-id', 'sectionGroup-id'],
      },
      params,
    };
  },
  /**
   * `GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}`
   *
   * The section groups in the section. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['notebook-id', 'sectionGroup-id', 'sectionGroup-id1'],
      },
      params,
    };
  },
};
