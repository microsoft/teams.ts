export * as siteSources from './siteSources';
export * as unifiedGroupSources from './unifiedGroupSources';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/legalHolds': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds',
    'post'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources',
    'get'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources',
    'post'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}',
    'patch'
  >;
  'DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}',
    'delete'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}`
 *
 * Delete a legalHold object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['case-id', 'legalHold-id'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/legalHolds`
 *
 * Read the properties and relationships of a legalHold object.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds',
    paramDefs: {
      path: ['case-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}`
 *
 * Read the properties and relationships of a legalHold object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}',
    paramDefs: {
      path: ['case-id', 'legalHold-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}`
 *
 * Update the properties of a legalHold object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}',
    paramDefs: {
      path: ['case-id', 'legalHold-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/legalHolds`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/legalHolds',
    paramDefs: {
      path: ['case-id'],
    },
    params,
    body,
  };
}

export const userSources = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources`
   *
   * Get the list of userSource objects associated with a legal hold.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['case-id', 'legalHold-id'],
      },
      params,
    };
  },
  /**
   * `POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources`
   *
   * Adds a userSource to a legalHold object.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources']['body'],
    params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources',
      paramDefs: {
        path: ['case-id', 'legalHold-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}`
   *
   * Data source entity for a the legal hold. This is the container for a mailbox and OneDrive for Business site.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'legalHold-id', 'userSource-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['body'],
    params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}',
      paramDefs: {
        path: ['case-id', 'legalHold-id', 'userSource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/compliance/ediscovery/cases/{case-id}/legalHolds/{legalHold-id}/userSources/{userSource-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['case-id', 'legalHold-id', 'userSource-id'],
      },
      params,
    };
  },
};
