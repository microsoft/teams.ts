export * as pages from './pages';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/sections/{onenoteSection-id}': Operation<
    '/me/onenote/sections/{onenoteSection-id}',
    'delete'
  >;
  'GET /me/onenote/sections': Operation<'/me/onenote/sections', 'get'>;
  'GET /me/onenote/sections/{onenoteSection-id}': Operation<
    '/me/onenote/sections/{onenoteSection-id}',
    'get'
  >;
  'PATCH /me/onenote/sections/{onenoteSection-id}': Operation<
    '/me/onenote/sections/{onenoteSection-id}',
    'patch'
  >;
  'POST /me/onenote/sections': Operation<'/me/onenote/sections', 'post'>;
  'POST /me/onenote/sections/{onenoteSection-id}/copyToNotebook': Operation<
    '/me/onenote/sections/{onenoteSection-id}/copyToNotebook',
    'post'
  >;
  'POST /me/onenote/sections/{onenoteSection-id}/copyToSectionGroup': Operation<
    '/me/onenote/sections/{onenoteSection-id}/copyToSectionGroup',
    'post'
  >;
  'GET /me/onenote/sections/{onenoteSection-id}/parentNotebook': Operation<
    '/me/onenote/sections/{onenoteSection-id}/parentNotebook',
    'get'
  >;
  'GET /me/onenote/sections/{onenoteSection-id}/parentSectionGroup': Operation<
    '/me/onenote/sections/{onenoteSection-id}/parentSectionGroup',
    'get'
  >;
}

/**
 * `DELETE /me/onenote/sections/{onenoteSection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote/sections/{onenoteSection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onenote/sections/{onenoteSection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onenoteSection-id'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/sections`
 *
 * Retrieve a list of section objects.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/sections']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/sections']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/sections',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/sections/{onenoteSection-id}`
 *
 * Retrieve the properties and relationships of a section object.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/sections/{onenoteSection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/sections/{onenoteSection-id}',
    paramDefs: {
      path: ['onenoteSection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/onenote/sections/{onenoteSection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/sections/{onenoteSection-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onenote/sections/{onenoteSection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onenote/sections/{onenoteSection-id}',
    paramDefs: {
      path: ['onenoteSection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/onenote/sections`
 *
 */
export function create(
  body: IEndpoints['POST /me/onenote/sections']['body']
): EndpointRequest<IEndpoints['POST /me/onenote/sections']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/sections',
    body,
  };
}

export const copyToNotebook = {
  /**
   * `POST /me/onenote/sections/{onenoteSection-id}/copyToNotebook`
   *
   * Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/copyToNotebook']['body'],
    params?: IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/copyToNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/copyToNotebook']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onenote/sections/{onenoteSection-id}/copyToNotebook',
      paramDefs: {
        path: ['onenoteSection-id'],
      },
      params,
      body,
    };
  },
};

export const copyToSectionGroup = {
  /**
   * `POST /me/onenote/sections/{onenoteSection-id}/copyToSectionGroup`
   *
   * Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.
   */
  create: function create(
    body: IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/copyToSectionGroup']['body'],
    params?: IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/copyToSectionGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/onenote/sections/{onenoteSection-id}/copyToSectionGroup']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/onenote/sections/{onenoteSection-id}/copyToSectionGroup',
      paramDefs: {
        path: ['onenoteSection-id'],
      },
      params,
      body,
    };
  },
};

export const parentNotebook = {
  /**
   * `GET /me/onenote/sections/{onenoteSection-id}/parentNotebook`
   *
   * The notebook that contains the section.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/sections/{onenoteSection-id}/parentNotebook']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/sections/{onenoteSection-id}/parentNotebook']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onenote/sections/{onenoteSection-id}/parentNotebook',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onenoteSection-id'],
      },
      params,
    };
  },
};

export const parentSectionGroup = {
  /**
   * `GET /me/onenote/sections/{onenoteSection-id}/parentSectionGroup`
   *
   * The section group that contains the section.  Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/sections/{onenoteSection-id}/parentSectionGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/sections/{onenoteSection-id}/parentSectionGroup']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onenote/sections/{onenoteSection-id}/parentSectionGroup',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onenoteSection-id'],
      },
      params,
    };
  },
};
