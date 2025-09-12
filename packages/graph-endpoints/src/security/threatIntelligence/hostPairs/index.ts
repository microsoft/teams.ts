import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hostPairs/{hostPair-id}': Operation<
    '/security/threatIntelligence/hostPairs/{hostPair-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hostPairs': Operation<
    '/security/threatIntelligence/hostPairs',
    'get'
  >;
  'GET /security/threatIntelligence/hostPairs/{hostPair-id}': Operation<
    '/security/threatIntelligence/hostPairs/{hostPair-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hostPairs/{hostPair-id}': Operation<
    '/security/threatIntelligence/hostPairs/{hostPair-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hostPairs': Operation<
    '/security/threatIntelligence/hostPairs',
    'post'
  >;
  'GET /security/threatIntelligence/hostPairs/{hostPair-id}/childHost': Operation<
    '/security/threatIntelligence/hostPairs/{hostPair-id}/childHost',
    'get'
  >;
  'GET /security/threatIntelligence/hostPairs/{hostPair-id}/parentHost': Operation<
    '/security/threatIntelligence/hostPairs/{hostPair-id}/parentHost',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hostPairs/{hostPair-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hostPairs/{hostPair-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hostPairs/{hostPair-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/hostPairs/{hostPair-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['hostPair-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostPairs`
 *
 * Read the properties and relationships of a hostPair object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hostPairs']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hostPairs']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostPairs',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostPairs/{hostPair-id}`
 *
 * Read the properties and relationships of a hostPair object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostPairs/{hostPair-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostPairs/{hostPair-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostPairs/{hostPair-id}',
    paramDefs: {
      path: ['hostPair-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hostPairs/{hostPair-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hostPairs/{hostPair-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hostPairs/{hostPair-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hostPairs/{hostPair-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/hostPairs/{hostPair-id}',
    paramDefs: {
      path: ['hostPair-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hostPairs`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hostPairs']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/hostPairs']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/hostPairs',
    body,
  };
}

export const childHost = {
  /**
   * `GET /security/threatIntelligence/hostPairs/{hostPair-id}/childHost`
   *
   * Host reached via the parentHost.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hostPairs/{hostPair-id}/childHost']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hostPairs/{hostPair-id}/childHost']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hostPairs/{hostPair-id}/childHost',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hostPair-id'],
      },
      params,
    };
  },
};

export const parentHost = {
  /**
   * `GET /security/threatIntelligence/hostPairs/{hostPair-id}/parentHost`
   *
   * Host used to reach the childHost.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hostPairs/{hostPair-id}/parentHost']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hostPairs/{hostPair-id}/parentHost']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hostPairs/{hostPair-id}/parentHost',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hostPair-id'],
      },
      params,
    };
  },
};
