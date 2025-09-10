export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    'delete'
  >;
  'GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups',
    'get'
  >;
  'GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    'patch'
  >;
  'POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups',
    'post'
  >;
  'GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook',
    'get'
  >;
  'GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup',
    'get'
  >;
  'GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups',
    'get'
  >;
  'GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}': Operation<
    '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'notebook-id', 'sectionGroup-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups`
 *
 * The section groups in the notebook. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups',
    paramDefs: {
      path: ['group-id', 'notebook-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}`
 *
 * The section groups in the notebook. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    paramDefs: {
      path: ['group-id', 'notebook-id', 'sectionGroup-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
    paramDefs: {
      path: ['group-id', 'notebook-id', 'sectionGroup-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups']['body'],
  params?: IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups',
    paramDefs: {
      path: ['group-id', 'notebook-id'],
    },
    params,
    body,
  };
}

export const parentNotebook = {
  /**
   * `GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook`
   *
   * The notebook that contains the section group. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'notebook-id', 'sectionGroup-id'],
      },
      params,
    };
  },
};

export const parentSectionGroup = {
  /**
   * `GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup`
   *
   * The section group that contains the section group. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'notebook-id', 'sectionGroup-id'],
      },
      params,
    };
  },
};

export const sectionGroupsSectionGroups = {
  /**
   * `GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups`
   *
   * The section groups in the section. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'notebook-id', 'sectionGroup-id'],
      },
      params,
    };
  },
  /**
   * `GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}`
   *
   * The section groups in the section. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'notebook-id', 'sectionGroup-id', 'sectionGroup-id1'],
      },
      params,
    };
  },
};
