export * as siteSources from './siteSources';
export * as unifiedGroupSources from './unifiedGroupSources';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/custodians': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/custodians': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians',
    'post'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/lastIndexOperation': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/lastIndexOperation',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources',
    'get'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources',
    'post'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}',
    'patch'
  >;
  'DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}',
    'delete'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['case-id', 'custodian-id'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/custodians`
 *
 * Get a list of the custodian objects and their properties.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/custodians',
    paramDefs: {
      path: ['case-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}`
 *
 * Read the properties and relationships of a custodian object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}',
    paramDefs: {
      path: ['case-id', 'custodian-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}`
 *
 * Update the properties of a custodian object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}',
    paramDefs: {
      path: ['case-id', 'custodian-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/custodians`
 *
 * Create a new custodian object. After the custodian object is created, you will need to create the custodian&#x27;s userSource to reference their mailbox and OneDrive for Business site.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/custodians',
    paramDefs: {
      path: ['case-id'],
    },
    params,
    body,
  };
}

export const lastIndexOperation = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/lastIndexOperation`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/lastIndexOperation']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/lastIndexOperation']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/lastIndexOperation',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'custodian-id'],
      },
      params,
    };
  },
};

export const userSources = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources`
   *
   * Get a list of the userSource objects and their properties.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['case-id', 'custodian-id'],
      },
      params,
    };
  },
  /**
   * `POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources`
   *
   * Create a new custodian userSource object.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources']['body'],
    params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources',
      paramDefs: {
        path: ['case-id', 'custodian-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}`
   *
   * Read the properties and relationships of a userSource object.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'custodian-id', 'userSource-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['body'],
    params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}',
      paramDefs: {
        path: ['case-id', 'custodian-id', 'userSource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}`
   *
   * Delete a userSource object.
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/userSources/{userSource-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['case-id', 'custodian-id', 'userSource-id'],
      },
      params,
    };
  },
};
