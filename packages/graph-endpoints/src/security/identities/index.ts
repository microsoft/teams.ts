export * as sensors from './sensors';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/identities': Operation<'/security/identities', 'delete'>;
  'GET /security/identities': Operation<'/security/identities', 'get'>;
  'PATCH /security/identities': Operation<'/security/identities', 'patch'>;
  'GET /security/identities/healthIssues': Operation<'/security/identities/healthIssues', 'get'>;
  'POST /security/identities/healthIssues': Operation<'/security/identities/healthIssues', 'post'>;
  'GET /security/identities/healthIssues/{healthIssue-id}': Operation<
    '/security/identities/healthIssues/{healthIssue-id}',
    'get'
  >;
  'PATCH /security/identities/healthIssues/{healthIssue-id}': Operation<
    '/security/identities/healthIssues/{healthIssue-id}',
    'patch'
  >;
  'DELETE /security/identities/healthIssues/{healthIssue-id}': Operation<
    '/security/identities/healthIssues/{healthIssue-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/identities`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/identities']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/identities']['response']> {
  return {
    method: 'delete',
    path: '/security/identities',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/identities`
 *
 * A container for security identities APIs.
 */
export function list(
  params?: IEndpoints['GET /security/identities']['parameters']
): EndpointRequest<IEndpoints['GET /security/identities']['response']> {
  return {
    method: 'get',
    path: '/security/identities',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/identities`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/identities']['body']
): EndpointRequest<IEndpoints['PATCH /security/identities']['response']> {
  return {
    method: 'patch',
    path: '/security/identities',
    body,
  };
}

export const healthIssues = {
  /**
   * `GET /security/identities/healthIssues`
   *
   * Get a list of healthIssue objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /security/identities/healthIssues']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/identities/healthIssues']['response']> {
    return {
      method: 'get',
      path: '/security/identities/healthIssues',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/identities/healthIssues`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/identities/healthIssues']['body']
  ): EndpointRequest<IEndpoints['POST /security/identities/healthIssues']['response']> {
    return {
      method: 'post',
      path: '/security/identities/healthIssues',
      body,
    };
  },
  /**
   * `GET /security/identities/healthIssues/{healthIssue-id}`
   *
   * Read the properties and relationships of a healthIssue object.
   */
  get: function get(
    params?: IEndpoints['GET /security/identities/healthIssues/{healthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/identities/healthIssues/{healthIssue-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/identities/healthIssues/{healthIssue-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['healthIssue-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/identities/healthIssues/{healthIssue-id}`
   *
   * Update the properties of a healthIssue object.
   */
  update: function update(
    body: IEndpoints['PATCH /security/identities/healthIssues/{healthIssue-id}']['body'],
    params?: IEndpoints['PATCH /security/identities/healthIssues/{healthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/identities/healthIssues/{healthIssue-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/security/identities/healthIssues/{healthIssue-id}',
      paramDefs: {
        path: ['healthIssue-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/identities/healthIssues/{healthIssue-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/identities/healthIssues/{healthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/identities/healthIssues/{healthIssue-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/security/identities/healthIssues/{healthIssue-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['healthIssue-id'],
      },
      params,
    };
  },
};
