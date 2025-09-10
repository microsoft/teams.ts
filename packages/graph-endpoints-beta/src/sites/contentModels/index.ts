import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/contentModels/{contentModel-id}': Operation<
    '/sites/{site-id}/contentModels/{contentModel-id}',
    'delete'
  >;
  'GET /sites/{site-id}/contentModels': Operation<'/sites/{site-id}/contentModels', 'get'>;
  'GET /sites/{site-id}/contentModels/{contentModel-id}': Operation<
    '/sites/{site-id}/contentModels/{contentModel-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/contentModels/{contentModel-id}': Operation<
    '/sites/{site-id}/contentModels/{contentModel-id}',
    'patch'
  >;
  'POST /sites/{site-id}/contentModels': Operation<'/sites/{site-id}/contentModels', 'post'>;
  'POST /sites/{site-id}/contentModels/{contentModel-id}/addToDrive': Operation<
    '/sites/{site-id}/contentModels/{contentModel-id}/addToDrive',
    'post'
  >;
  'POST /sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive': Operation<
    '/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/contentModels/{contentModel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/contentModels/{contentModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/contentModels/{contentModel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/contentModels/{contentModel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'contentModel-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/contentModels`
 *
 * Read the properties and relationships of a contentModel object.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/contentModels']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/contentModels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/contentModels',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/contentModels/{contentModel-id}`
 *
 * Read the properties and relationships of a contentModel object.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/contentModels/{contentModel-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/contentModels/{contentModel-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/contentModels/{contentModel-id}',
    paramDefs: {
      path: ['site-id', 'contentModel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/contentModels/{contentModel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/contentModels/{contentModel-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/contentModels/{contentModel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/contentModels/{contentModel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/contentModels/{contentModel-id}',
    paramDefs: {
      path: ['site-id', 'contentModel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/contentModels`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/contentModels']['body'],
  params?: IEndpoints['POST /sites/{site-id}/contentModels']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/contentModels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/contentModels',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const addToDrive = {
  /**
   * `POST /sites/{site-id}/contentModels/{contentModel-id}/addToDrive`
   *
   * Apply a contentModel to SharePoint document libraries. For an existing model that&#x27;s already trained, this action automatically processes new documents that are added to the SharePoint libraries.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/contentModels/{contentModel-id}/addToDrive']['body'],
    params?: IEndpoints['POST /sites/{site-id}/contentModels/{contentModel-id}/addToDrive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/contentModels/{contentModel-id}/addToDrive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/contentModels/{contentModel-id}/addToDrive',
      paramDefs: {
        path: ['site-id', 'contentModel-id'],
      },
      params,
      body,
    };
  },
};

export const removeFromDrive = {
  /**
   * `POST /sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive`
   *
   * Remove a contentModel from a SharePoint document library.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive']['body'],
    params?: IEndpoints['POST /sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/contentModels/{contentModel-id}/removeFromDrive',
      paramDefs: {
        path: ['site-id', 'contentModel-id'],
      },
      params,
      body,
    };
  },
};
