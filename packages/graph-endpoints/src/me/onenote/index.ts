export * as notebooks from './notebooks';
export * as pages from './pages';
export * as resources from './resources';
export * as sectionGroups from './sectionGroups';
export * as sections from './sections';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote': Operation<'/me/onenote', 'delete'>;
  'GET /me/onenote': Operation<'/me/onenote', 'get'>;
  'PATCH /me/onenote': Operation<'/me/onenote', 'patch'>;
  'GET /me/onenote/operations': Operation<'/me/onenote/operations', 'get'>;
  'POST /me/onenote/operations': Operation<'/me/onenote/operations', 'post'>;
  'GET /me/onenote/operations/{onenoteOperation-id}': Operation<
    '/me/onenote/operations/{onenoteOperation-id}',
    'get'
  >;
  'PATCH /me/onenote/operations/{onenoteOperation-id}': Operation<
    '/me/onenote/operations/{onenoteOperation-id}',
    'patch'
  >;
  'DELETE /me/onenote/operations/{onenoteOperation-id}': Operation<
    '/me/onenote/operations/{onenoteOperation-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/onenote`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote']['response']> {
  return {
    method: 'delete',
    path: '/me/onenote',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/onenote`
 *
 */
export function get(
  params?: IEndpoints['GET /me/onenote']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote']['response']> {
  return {
    method: 'get',
    path: '/me/onenote',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/onenote`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote']['body']
): EndpointRequest<IEndpoints['PATCH /me/onenote']['response']> {
  return {
    method: 'patch',
    path: '/me/onenote',
    body,
  };
}

export const operations = {
  /**
   * `GET /me/onenote/operations`
   *
   * Get the status of a long-running OneNote operation. This applies to operations that return the Operation-Location header in the response, such as CopyNotebook, CopyToNotebook, CopyToSectionGroup, and CopyToSection.    You can poll the Operation-Location endpoint until the status property returns completed or failed.  If the status is completed, the resourceLocation property contains the resource endpoint URI.  If the status is failed, the error and @api.diagnostics properties provide error information.
   */
  list: function list(
    params?: IEndpoints['GET /me/onenote/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/onenote/operations']['response']> {
    return {
      method: 'get',
      path: '/me/onenote/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/onenote/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/onenote/operations']['body']
  ): EndpointRequest<IEndpoints['POST /me/onenote/operations']['response']> {
    return {
      method: 'post',
      path: '/me/onenote/operations',
      body,
    };
  },
  /**
   * `GET /me/onenote/operations/{onenoteOperation-id}`
   *
   * Get the status of a long-running OneNote operation. This applies to operations that return the Operation-Location header in the response, such as CopyNotebook, CopyToNotebook, CopyToSectionGroup, and CopyToSection.    You can poll the Operation-Location endpoint until the status property returns completed or failed.  If the status is completed, the resourceLocation property contains the resource endpoint URI.  If the status is failed, the error and @api.diagnostics properties provide error information.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/operations/{onenoteOperation-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/onenote/operations/{onenoteOperation-id}']['response']> {
    return {
      method: 'get',
      path: '/me/onenote/operations/{onenoteOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onenoteOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/onenote/operations/{onenoteOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/onenote/operations/{onenoteOperation-id}']['body'],
    params?: IEndpoints['PATCH /me/onenote/operations/{onenoteOperation-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/onenote/operations/{onenoteOperation-id}']['response']> {
    return {
      method: 'patch',
      path: '/me/onenote/operations/{onenoteOperation-id}',
      paramDefs: {
        path: ['onenoteOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onenote/operations/{onenoteOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onenote/operations/{onenoteOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onenote/operations/{onenoteOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/onenote/operations/{onenoteOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['onenoteOperation-id'],
      },
      params,
    };
  },
};
