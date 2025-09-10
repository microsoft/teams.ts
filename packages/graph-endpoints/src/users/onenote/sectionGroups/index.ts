export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}',
    'delete'
  >;
  'GET /users/{user-id}/onenote/sectionGroups': Operation<
    '/users/{user-id}/onenote/sectionGroups',
    'get'
  >;
  'GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}': Operation<
    '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}',
    'patch'
  >;
  'POST /users/{user-id}/onenote/sectionGroups': Operation<
    '/users/{user-id}/onenote/sectionGroups',
    'post'
  >;
  'GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook': Operation<
    '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook',
    'get'
  >;
  'GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup': Operation<
    '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup',
    'get'
  >;
  'GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups': Operation<
    '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups',
    'get'
  >;
  'GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}': Operation<
    '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'sectionGroup-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/sectionGroups`
 *
 * The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onenote/sectionGroups']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/sectionGroups']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/onenote/sectionGroups',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}`
 *
 * The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: {
      path: ['user-id', 'sectionGroup-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}',
    paramDefs: {
      path: ['user-id', 'sectionGroup-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onenote/sectionGroups`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onenote/sectionGroups']['body'],
  params?: IEndpoints['POST /users/{user-id}/onenote/sectionGroups']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/onenote/sectionGroups']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/onenote/sectionGroups',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const parentNotebook = {
  /**
   * `GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook`
   *
   * The notebook that contains the section group. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'sectionGroup-id'],
      },
      params,
    };
  },
};

export const parentSectionGroup = {
  /**
   * `GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup`
   *
   * The section group that contains the section group. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'sectionGroup-id'],
      },
      params,
    };
  },
};

export const sectionGroupsSectionGroups = {
  /**
   * `GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups`
   *
   * The section groups in the section. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'sectionGroup-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}`
   *
   * The section groups in the section. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'sectionGroup-id', 'sectionGroup-id1'],
      },
      params,
    };
  },
};
