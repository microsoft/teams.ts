import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/reviewSets': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/reviewSets': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets',
    'post'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries',
    'get'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries',
    'post'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}',
    'patch'
  >;
  'DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}',
    'delete'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['case-id', 'reviewSet-id'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/reviewSets`
 *
 * Retrieve the properties and relationships of a reviewSet object.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets',
    paramDefs: {
      path: ['case-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}`
 *
 * Retrieve the properties and relationships of a reviewSet object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}',
    paramDefs: {
      path: ['case-id', 'reviewSet-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}',
    paramDefs: {
      path: ['case-id', 'reviewSet-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/reviewSets`
 *
 * Create a new reviewSet object. The request body contains the display name of the review set, which is the only writable property.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/reviewSets']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/reviewSets']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/reviewSets']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets',
    paramDefs: {
      path: ['case-id'],
    },
    params,
    body,
  };
}

export const queries = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries`
   *
   * Retrieve a list of eDiscovery reviewSetQuery objects.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['case-id', 'reviewSet-id'],
      },
      params,
    };
  },
  /**
   * `POST /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries`
   *
   * Create a new reviewSetQuery object.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries']['body'],
    params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries',
      paramDefs: {
        path: ['case-id', 'reviewSet-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}`
   *
   * Retrieve the properties and relationships of an eDiscovery reviewSetQuery object.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'reviewSet-id', 'reviewSetQuery-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}`
   *
   * Update the properties of an eDiscovery reviewSetQuery.
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['body'],
    params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}',
      paramDefs: {
        path: ['case-id', 'reviewSet-id', 'reviewSetQuery-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}`
   *
   * Delete a reviewSetQuery object.
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['case-id', 'reviewSet-id', 'reviewSetQuery-id'],
      },
      params,
    };
  },
};
