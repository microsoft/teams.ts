import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hostComponents/{hostComponent-id}': Operation<
    '/security/threatIntelligence/hostComponents/{hostComponent-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hostComponents': Operation<
    '/security/threatIntelligence/hostComponents',
    'get'
  >;
  'GET /security/threatIntelligence/hostComponents/{hostComponent-id}': Operation<
    '/security/threatIntelligence/hostComponents/{hostComponent-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hostComponents/{hostComponent-id}': Operation<
    '/security/threatIntelligence/hostComponents/{hostComponent-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hostComponents': Operation<
    '/security/threatIntelligence/hostComponents',
    'post'
  >;
  'GET /security/threatIntelligence/hostComponents/{hostComponent-id}/host': Operation<
    '/security/threatIntelligence/hostComponents/{hostComponent-id}/host',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hostComponents/{hostComponent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hostComponents/{hostComponent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hostComponents/{hostComponent-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/hostComponents/{hostComponent-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['hostComponent-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostComponents`
 *
 * Read the properties and relationships of a hostComponent object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hostComponents']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hostComponents']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostComponents',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostComponents/{hostComponent-id}`
 *
 * Read the properties and relationships of a hostComponent object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostComponents/{hostComponent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostComponents/{hostComponent-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostComponents/{hostComponent-id}',
    paramDefs: {
      path: ['hostComponent-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hostComponents/{hostComponent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hostComponents/{hostComponent-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hostComponents/{hostComponent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hostComponents/{hostComponent-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/hostComponents/{hostComponent-id}',
    paramDefs: {
      path: ['hostComponent-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hostComponents`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hostComponents']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/hostComponents']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/hostComponents',
    body,
  };
}

export const host = {
  /**
   * `GET /security/threatIntelligence/hostComponents/{hostComponent-id}/host`
   *
   * The host related to this component. This is a reverse navigation property. When navigating to components from a host, this should be assumed to be a return reference.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hostComponents/{hostComponent-id}/host']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hostComponents/{hostComponent-id}/host']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hostComponents/{hostComponent-id}/host',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hostComponent-id'],
      },
      params,
    };
  },
};
