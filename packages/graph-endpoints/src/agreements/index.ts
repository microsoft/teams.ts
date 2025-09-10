export * as file from './file';
export * as files from './files';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /agreements/{agreement-id}': Operation<'/agreements/{agreement-id}', 'delete'>;
  'GET /agreements': Operation<'/agreements', 'get'>;
  'GET /agreements/{agreement-id}': Operation<'/agreements/{agreement-id}', 'get'>;
  'PATCH /agreements/{agreement-id}': Operation<'/agreements/{agreement-id}', 'patch'>;
  'POST /agreements': Operation<'/agreements', 'post'>;
  'GET /agreements/{agreement-id}/acceptances': Operation<
    '/agreements/{agreement-id}/acceptances',
    'get'
  >;
  'POST /agreements/{agreement-id}/acceptances': Operation<
    '/agreements/{agreement-id}/acceptances',
    'post'
  >;
  'GET /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}': Operation<
    '/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
    'get'
  >;
  'PATCH /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}': Operation<
    '/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
    'patch'
  >;
  'DELETE /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}': Operation<
    '/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
    'delete'
  >;
}

/**
 * `DELETE /agreements/{agreement-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /agreements/{agreement-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /agreements/{agreement-id}']['response']> {
  return {
    method: 'delete',
    path: '/agreements/{agreement-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['agreement-id'],
    },
    params,
  };
}

/**
 * `GET /agreements`
 *
 */
export function list(
  params?: IEndpoints['GET /agreements']['parameters']
): EndpointRequest<IEndpoints['GET /agreements']['response']> {
  return {
    method: 'get',
    path: '/agreements',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /agreements/{agreement-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /agreements/{agreement-id}']['parameters']
): EndpointRequest<IEndpoints['GET /agreements/{agreement-id}']['response']> {
  return {
    method: 'get',
    path: '/agreements/{agreement-id}',
    paramDefs: {
      path: ['agreement-id'],
      query: ['$select'],
    },
    params,
  };
}

/**
 * `PATCH /agreements/{agreement-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /agreements/{agreement-id}']['body'],
  params?: IEndpoints['PATCH /agreements/{agreement-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /agreements/{agreement-id}']['response']> {
  return {
    method: 'patch',
    path: '/agreements/{agreement-id}',
    paramDefs: {
      path: ['agreement-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /agreements`
 *
 */
export function create(
  body: IEndpoints['POST /agreements']['body']
): EndpointRequest<IEndpoints['POST /agreements']['response']> {
  return {
    method: 'post',
    path: '/agreements',
    body,
  };
}

export const acceptances = {
  /**
   * `GET /agreements/{agreement-id}/acceptances`
   *
   * Read-only. Information about acceptances of this agreement.
   */
  list: function list(
    params?: IEndpoints['GET /agreements/{agreement-id}/acceptances']['parameters']
  ): EndpointRequest<IEndpoints['GET /agreements/{agreement-id}/acceptances']['response']> {
    return {
      method: 'get',
      path: '/agreements/{agreement-id}/acceptances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['agreement-id'],
      },
      params,
    };
  },
  /**
   * `POST /agreements/{agreement-id}/acceptances`
   *
   */
  create: function create(
    body: IEndpoints['POST /agreements/{agreement-id}/acceptances']['body'],
    params?: IEndpoints['POST /agreements/{agreement-id}/acceptances']['parameters']
  ): EndpointRequest<IEndpoints['POST /agreements/{agreement-id}/acceptances']['response']> {
    return {
      method: 'post',
      path: '/agreements/{agreement-id}/acceptances',
      paramDefs: {
        path: ['agreement-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}`
   *
   * Read-only. Information about acceptances of this agreement.
   */
  get: function get(
    params?: IEndpoints['GET /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      method: 'get',
      path: '/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['agreement-id', 'agreementAcceptance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['body'],
    params?: IEndpoints['PATCH /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
      paramDefs: {
        path: ['agreement-id', 'agreementAcceptance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /agreements/{agreement-id}/acceptances/{agreementAcceptance-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/agreements/{agreement-id}/acceptances/{agreementAcceptance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['agreement-id', 'agreementAcceptance-id'],
      },
      params,
    };
  },
};
