export * as protectionScopes from './protectionScopes';
export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataSecurityAndGovernance': Operation<
    '/security/dataSecurityAndGovernance',
    'delete'
  >;
  'GET /security/dataSecurityAndGovernance': Operation<
    '/security/dataSecurityAndGovernance',
    'get'
  >;
  'PATCH /security/dataSecurityAndGovernance': Operation<
    '/security/dataSecurityAndGovernance',
    'patch'
  >;
  'GET /security/dataSecurityAndGovernance/policyFiles': Operation<
    '/security/dataSecurityAndGovernance/policyFiles',
    'get'
  >;
  'POST /security/dataSecurityAndGovernance/policyFiles': Operation<
    '/security/dataSecurityAndGovernance/policyFiles',
    'post'
  >;
  'GET /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}': Operation<
    '/security/dataSecurityAndGovernance/policyFiles/{policyFile-id}',
    'get'
  >;
  'PATCH /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}': Operation<
    '/security/dataSecurityAndGovernance/policyFiles/{policyFile-id}',
    'patch'
  >;
  'DELETE /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}': Operation<
    '/security/dataSecurityAndGovernance/policyFiles/{policyFile-id}',
    'delete'
  >;
  'POST /security/dataSecurityAndGovernance/processContentAsync': Operation<
    '/security/dataSecurityAndGovernance/processContentAsync',
    'post'
  >;
}

/**
 * `DELETE /security/dataSecurityAndGovernance`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/dataSecurityAndGovernance']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/dataSecurityAndGovernance',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/dataSecurityAndGovernance`
 *
 */
export function get(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['GET /security/dataSecurityAndGovernance']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/dataSecurityAndGovernance',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/dataSecurityAndGovernance`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataSecurityAndGovernance']['body']
): EndpointRequest<IEndpoints['PATCH /security/dataSecurityAndGovernance']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/dataSecurityAndGovernance',
    body,
  };
}

export const policyFiles = {
  /**
   * `GET /security/dataSecurityAndGovernance/policyFiles`
   *
   */
  list: function list(
    params?: IEndpoints['GET /security/dataSecurityAndGovernance/policyFiles']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/dataSecurityAndGovernance/policyFiles']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/dataSecurityAndGovernance/policyFiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/dataSecurityAndGovernance/policyFiles`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/dataSecurityAndGovernance/policyFiles']['body']
  ): EndpointRequest<
    IEndpoints['POST /security/dataSecurityAndGovernance/policyFiles']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/dataSecurityAndGovernance/policyFiles',
      body,
    };
  },
  /**
   * `GET /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/dataSecurityAndGovernance/policyFiles/{policyFile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['policyFile-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['body'],
    params?: IEndpoints['PATCH /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/dataSecurityAndGovernance/policyFiles/{policyFile-id}',
      paramDefs: {
        path: ['policyFile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/dataSecurityAndGovernance/policyFiles/{policyFile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['policyFile-id'],
      },
      params,
    };
  },
};

export const processContentAsync = {
  /**
   * `POST /security/dataSecurityAndGovernance/processContentAsync`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/dataSecurityAndGovernance/processContentAsync']['body']
  ): EndpointRequest<
    IEndpoints['POST /security/dataSecurityAndGovernance/processContentAsync']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/dataSecurityAndGovernance/processContentAsync',
      body,
    };
  },
};
