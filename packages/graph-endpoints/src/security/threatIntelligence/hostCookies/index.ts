import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hostCookies/{hostCookie-id}': Operation<
    '/security/threatIntelligence/hostCookies/{hostCookie-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hostCookies': Operation<
    '/security/threatIntelligence/hostCookies',
    'get'
  >;
  'GET /security/threatIntelligence/hostCookies/{hostCookie-id}': Operation<
    '/security/threatIntelligence/hostCookies/{hostCookie-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hostCookies/{hostCookie-id}': Operation<
    '/security/threatIntelligence/hostCookies/{hostCookie-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hostCookies': Operation<
    '/security/threatIntelligence/hostCookies',
    'post'
  >;
  'GET /security/threatIntelligence/hostCookies/{hostCookie-id}/host': Operation<
    '/security/threatIntelligence/hostCookies/{hostCookie-id}/host',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hostCookies/{hostCookie-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hostCookies/{hostCookie-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hostCookies/{hostCookie-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/hostCookies/{hostCookie-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['hostCookie-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostCookies`
 *
 * Read the properties and relationships of a hostCookie object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hostCookies']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hostCookies']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostCookies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostCookies/{hostCookie-id}`
 *
 * Read the properties and relationships of a hostCookie object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostCookies/{hostCookie-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostCookies/{hostCookie-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostCookies/{hostCookie-id}',
    paramDefs: {
      path: ['hostCookie-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hostCookies/{hostCookie-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hostCookies/{hostCookie-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hostCookies/{hostCookie-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hostCookies/{hostCookie-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/hostCookies/{hostCookie-id}',
    paramDefs: {
      path: ['hostCookie-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hostCookies`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hostCookies']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/hostCookies']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/hostCookies',
    body,
  };
}

export const host = {
  /**
   * `GET /security/threatIntelligence/hostCookies/{hostCookie-id}/host`
   *
   * Indicates that a cookie of this name and domain was found related to this host.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hostCookies/{hostCookie-id}/host']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hostCookies/{hostCookie-id}/host']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hostCookies/{hostCookie-id}/host',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hostCookie-id'],
      },
      params,
    };
  },
};
