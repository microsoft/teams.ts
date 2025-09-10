export * as file from './file';
export * as files from './files';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}',
    'delete'
  >;
  'GET /identityGovernance/termsOfUse/agreements': Operation<
    '/identityGovernance/termsOfUse/agreements',
    'get'
  >;
  'GET /identityGovernance/termsOfUse/agreements/{agreement-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}',
    'get'
  >;
  'PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}',
    'patch'
  >;
  'POST /identityGovernance/termsOfUse/agreements': Operation<
    '/identityGovernance/termsOfUse/agreements',
    'post'
  >;
  'GET /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances',
    'get'
  >;
  'POST /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances',
    'post'
  >;
  'GET /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
    'get'
  >;
  'PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
    'patch'
  >;
  'DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}': Operation<
    '/identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}`
 *
 * Delete an agreement object.
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['agreement-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/termsOfUse/agreements`
 *
 * Retrieve a list of agreement objects.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/termsOfUse/agreements']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/termsOfUse/agreements']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/termsOfUse/agreements',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/termsOfUse/agreements/{agreement-id}`
 *
 * Retrieve the properties and relationships of an agreement object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}',
    paramDefs: {
      path: ['agreement-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}`
 *
 * Update the properties of an agreement object.
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/termsOfUse/agreements/{agreement-id}',
    paramDefs: {
      path: ['agreement-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/termsOfUse/agreements`
 *
 * Create a new agreement object.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/termsOfUse/agreements']['body']
): EndpointRequest<IEndpoints['POST /identityGovernance/termsOfUse/agreements']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/termsOfUse/agreements',
    body,
  };
}

export const acceptances = {
  /**
   * `GET /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances`
   *
   * Get the details about the acceptance records for a specific agreement.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['agreement-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances']['body'],
    params?: IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances',
      paramDefs: {
        path: ['agreement-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}`
   *
   * Read-only. Information about acceptances of this agreement.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['agreement-id', 'agreementAcceptance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
      paramDefs: {
        path: ['agreement-id', 'agreementAcceptance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/termsOfUse/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['agreement-id', 'agreementAcceptance-id'],
      },
      params,
    };
  },
};
