export * as custodians from './custodians';
export * as legalHolds from './legalHolds';
export * as noncustodialDataSources from './noncustodialDataSources';
export * as reviewSets from './reviewSets';
export * as sourceCollections from './sourceCollections';
export * as tags from './tags';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases': Operation<'/compliance/ediscovery/cases', 'get'>;
  'GET /compliance/ediscovery/cases/{case-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases': Operation<'/compliance/ediscovery/cases', 'post'>;
  'GET /compliance/ediscovery/cases/{case-id}/operations': Operation<
    '/compliance/ediscovery/cases/{case-id}/operations',
    'get'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/operations': Operation<
    '/compliance/ediscovery/cases/{case-id}/operations',
    'post'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}',
    'patch'
  >;
  'DELETE /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/settings': Operation<
    '/compliance/ediscovery/cases/{case-id}/settings',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/settings': Operation<
    '/compliance/ediscovery/cases/{case-id}/settings',
    'patch'
  >;
  'DELETE /compliance/ediscovery/cases/{case-id}/settings': Operation<
    '/compliance/ediscovery/cases/{case-id}/settings',
    'delete'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}`
 *
 * Delete a case object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['case-id'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases`
 *
 * Retrieve a list of case objects.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases']['parameters']
): EndpointRequest<IEndpoints['GET /compliance/ediscovery/cases']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}`
 *
 * Retrieve the properties and relationships of a case object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}']['parameters']
): EndpointRequest<IEndpoints['GET /compliance/ediscovery/cases/{case-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}',
    paramDefs: {
      path: ['case-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}`
 *
 * Update the properties of a case object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}',
    paramDefs: {
      path: ['case-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases`
 *
 * Create a new case object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases']['body']
): EndpointRequest<IEndpoints['POST /compliance/ediscovery/cases']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases',
    body,
  };
}

export const operations = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/operations`
   *
   * Returns a list of case operation objects for this case. Nullable.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['case-id'],
      },
      params,
    };
  },
  /**
   * `POST /compliance/ediscovery/cases/{case-id}/operations`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/operations']['body'],
    params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /compliance/ediscovery/cases/{case-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/compliance/ediscovery/cases/{case-id}/operations',
      paramDefs: {
        path: ['case-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}`
   *
   * Returns a list of case operation objects for this case. Nullable.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id', 'caseOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['body'],
    params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}',
      paramDefs: {
        path: ['case-id', 'caseOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['case-id', 'caseOperation-id'],
      },
      params,
    };
  },
};

export const settings = {
  /**
   * `GET /compliance/ediscovery/cases/{case-id}/settings`
   *
   * Read the properties and relationships of an eDiscovery caseSettings object.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /compliance/ediscovery/cases/{case-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/compliance/ediscovery/cases/{case-id}/settings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['case-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /compliance/ediscovery/cases/{case-id}/settings`
   *
   * Update the properties of a an eDiscovery caseSettings object.
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/settings']['body'],
    params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/compliance/ediscovery/cases/{case-id}/settings',
      paramDefs: {
        path: ['case-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /compliance/ediscovery/cases/{case-id}/settings`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/compliance/ediscovery/cases/{case-id}/settings',
      paramDefs: {
        header: ['If-Match'],
        path: ['case-id'],
      },
      params,
    };
  },
};
