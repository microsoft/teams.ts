export * as agreements from './agreements';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/termsOfUse': Operation<'/identityGovernance/termsOfUse', 'delete'>;
  'GET /identityGovernance/termsOfUse': Operation<'/identityGovernance/termsOfUse', 'get'>;
  'PATCH /identityGovernance/termsOfUse': Operation<'/identityGovernance/termsOfUse', 'patch'>;
  'GET /identityGovernance/termsOfUse/agreementAcceptances': Operation<
    '/identityGovernance/termsOfUse/agreementAcceptances',
    'get'
  >;
  'POST /identityGovernance/termsOfUse/agreementAcceptances': Operation<
    '/identityGovernance/termsOfUse/agreementAcceptances',
    'post'
  >;
  'GET /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}',
    'get'
  >;
  'PATCH /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}',
    'patch'
  >;
  'DELETE /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}': Operation<
    '/identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/termsOfUse`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/termsOfUse']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/termsOfUse']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/termsOfUse',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/termsOfUse`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/termsOfUse']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/termsOfUse']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/termsOfUse',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/termsOfUse`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/termsOfUse']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/termsOfUse']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/termsOfUse',
    body,
  };
}

export const agreementAcceptances = {
  /**
   * `GET /identityGovernance/termsOfUse/agreementAcceptances`
   *
   * Represents the current status of a user&#x27;s response to a company&#x27;s customizable terms of use agreement.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/termsOfUse/agreementAcceptances']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/termsOfUse/agreementAcceptances']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/termsOfUse/agreementAcceptances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/termsOfUse/agreementAcceptances`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/termsOfUse/agreementAcceptances']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/termsOfUse/agreementAcceptances']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/termsOfUse/agreementAcceptances',
      body,
    };
  },
  /**
   * `GET /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}`
   *
   * Represents the current status of a user&#x27;s response to a company&#x27;s customizable terms of use agreement.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['agreementAcceptance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}',
      paramDefs: {
        path: ['agreementAcceptance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/termsOfUse/agreementAcceptances/{agreementAcceptance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['agreementAcceptance-id'],
      },
      params,
    };
  },
};
