import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentModels': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentModels': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive': Operation<
    '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'contentModel-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/contentModels`
 *
 * The collection of content models applied to this site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentModels']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentModels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/contentModels',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}`
 *
 * The collection of content models applied to this site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'contentModel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'contentModel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/contentModels`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/contentModels',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const addToDrive = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive`
   *
   * Apply a contentModel to SharePoint document libraries. For an existing model that&#x27;s already trained, this action automatically processes new documents that are added to the SharePoint libraries.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/addToDrive',
      paramDefs: {
        path: ['group-id', 'site-id', 'contentModel-id'],
      },
      params,
      body,
    };
  },
};

export const removeFromDrive = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive`
   *
   * Remove a contentModel from a SharePoint document library.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive',
      paramDefs: {
        path: ['group-id', 'site-id', 'contentModel-id'],
      },
      params,
      body,
    };
  },
};
