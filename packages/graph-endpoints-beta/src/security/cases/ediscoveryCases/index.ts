export * as custodians from './custodians';
export * as legalHolds from './legalHolds';
export * as noncustodialDataSources from './noncustodialDataSources';
export * as reviewSets from './reviewSets';
export * as searches from './searches';
export * as tags from './tags';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases': Operation<'/security/cases/ediscoveryCases', 'get'>;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}',
    'patch'
  >;
  'POST /security/cases/ediscoveryCases': Operation<'/security/cases/ediscoveryCases', 'post'>;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers',
    'get'
  >;
  'POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers',
    'post'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}',
    'patch'
  >;
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/operations',
    'get'
  >;
  'POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/operations',
    'post'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}',
    'patch'
  >;
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/settings',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/settings',
    'patch'
  >;
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/settings',
    'delete'
  >;
}

/**
 * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}`
 *
 * Delete an ediscoveryCase object.
 */
export function del(
  params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['ediscoveryCase-id'],
    },
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases`
 *
 * Get a list of the ediscoveryCase objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/cases/ediscoveryCases']['parameters']
): EndpointRequest<IEndpoints['GET /security/cases/ediscoveryCases']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}`
 *
 * Read the properties and relationships of an ediscoveryCase object.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}',
    paramDefs: {
      path: ['ediscoveryCase-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}`
 *
 * Update the properties of an ediscoveryCase object.
 */
export function update(
  body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}']['body'],
  params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}',
    paramDefs: {
      path: ['ediscoveryCase-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/cases/ediscoveryCases`
 *
 * Create a new ediscoveryCase object.
 */
export function create(
  body: IEndpoints['POST /security/cases/ediscoveryCases']['body']
): EndpointRequest<IEndpoints['POST /security/cases/ediscoveryCases']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/cases/ediscoveryCases',
    body,
  };
}

export const caseMembers = {
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers`
   *
   * Get a list of ediscoveryCaseMember objects for an ediscoveryCase.
   */
  list: function list(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['ediscoveryCase-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers`
   *
   * Add an ediscoveryCaseMember to an ediscoveryCase. The ediscoveryCaseMember can be one of two types: a user or a role group.
   */
  create: function create(
    body: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers']['body'],
    params?: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers',
      paramDefs: {
        path: ['ediscoveryCase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}`
   *
   * Returns a list of ediscoveryCaseMember objects associated to this case.
   */
  get: function get(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['ediscoveryCase-id', 'ediscoveryCaseMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}']['body'],
    params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}',
      paramDefs: {
        path: ['ediscoveryCase-id', 'ediscoveryCaseMember-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}`
   *
   * Remove an ediscoveryCaseMember from an ediscoveryCase.
   */
  del: function del(
    params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/caseMembers/{ediscoveryCaseMember-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['ediscoveryCase-id', 'ediscoveryCaseMember-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations`
   *
   * Get a list of the caseOperation objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['ediscoveryCase-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations']['body'],
    params?: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/operations',
      paramDefs: {
        path: ['ediscoveryCase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}`
   *
   * Read the properties and relationships of a caseOperation object.
   */
  get: function get(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['ediscoveryCase-id', 'caseOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}']['body'],
    params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}',
      paramDefs: {
        path: ['ediscoveryCase-id', 'caseOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/operations/{caseOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['ediscoveryCase-id', 'caseOperation-id'],
      },
      params,
    };
  },
};

export const settings = {
  /**
   * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings`
   *
   * Read the properties and relationships of an ediscoveryCaseSettings object.
   */
  list: function list(
    params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/settings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['ediscoveryCase-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings`
   *
   * Update the properties of an ediscoveryCaseSettings object.
   */
  update: function update(
    body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings']['body'],
    params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/settings',
      paramDefs: {
        path: ['ediscoveryCase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/settings',
      paramDefs: {
        header: ['If-Match'],
        path: ['ediscoveryCase-id'],
      },
      params,
    };
  },
};
