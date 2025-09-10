import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/subdomains/{subdomain-id}': Operation<
    '/security/threatIntelligence/subdomains/{subdomain-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/subdomains': Operation<
    '/security/threatIntelligence/subdomains',
    'get'
  >;
  'GET /security/threatIntelligence/subdomains/{subdomain-id}': Operation<
    '/security/threatIntelligence/subdomains/{subdomain-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/subdomains/{subdomain-id}': Operation<
    '/security/threatIntelligence/subdomains/{subdomain-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/subdomains': Operation<
    '/security/threatIntelligence/subdomains',
    'post'
  >;
  'GET /security/threatIntelligence/subdomains/{subdomain-id}/host': Operation<
    '/security/threatIntelligence/subdomains/{subdomain-id}/host',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/subdomains/{subdomain-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/subdomains/{subdomain-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/subdomains/{subdomain-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/subdomains/{subdomain-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['subdomain-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/subdomains`
 *
 * Read the properties and relationships of a subdomain object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/subdomains']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/subdomains']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/subdomains',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/subdomains/{subdomain-id}`
 *
 * Read the properties and relationships of a subdomain object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/subdomains/{subdomain-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/subdomains/{subdomain-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/subdomains/{subdomain-id}',
    paramDefs: {
      path: ['subdomain-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/subdomains/{subdomain-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/subdomains/{subdomain-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/subdomains/{subdomain-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/subdomains/{subdomain-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/subdomains/{subdomain-id}',
    paramDefs: {
      path: ['subdomain-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/subdomains`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/subdomains']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/subdomains']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/subdomains',
    body,
  };
}

export const host = {
  /**
   * `GET /security/threatIntelligence/subdomains/{subdomain-id}/host`
   *
   * The host of the subdomain.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/subdomains/{subdomain-id}/host']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/subdomains/{subdomain-id}/host']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatIntelligence/subdomains/{subdomain-id}/host',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['subdomain-id'],
      },
      params,
    };
  },
};
