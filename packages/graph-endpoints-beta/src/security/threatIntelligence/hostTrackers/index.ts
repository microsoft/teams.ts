import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hostTrackers/{hostTracker-id}': Operation<
    '/security/threatIntelligence/hostTrackers/{hostTracker-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hostTrackers': Operation<
    '/security/threatIntelligence/hostTrackers',
    'get'
  >;
  'GET /security/threatIntelligence/hostTrackers/{hostTracker-id}': Operation<
    '/security/threatIntelligence/hostTrackers/{hostTracker-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hostTrackers/{hostTracker-id}': Operation<
    '/security/threatIntelligence/hostTrackers/{hostTracker-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hostTrackers': Operation<
    '/security/threatIntelligence/hostTrackers',
    'post'
  >;
  'GET /security/threatIntelligence/hostTrackers/{hostTracker-id}/host': Operation<
    '/security/threatIntelligence/hostTrackers/{hostTracker-id}/host',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hostTrackers/{hostTracker-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hostTrackers/{hostTracker-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hostTrackers/{hostTracker-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/hostTrackers/{hostTracker-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['hostTracker-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostTrackers`
 *
 * Read the properties and relationships of a hostTracker object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hostTrackers']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hostTrackers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hostTrackers',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostTrackers/{hostTracker-id}`
 *
 * Read the properties and relationships of a hostTracker object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostTrackers/{hostTracker-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostTrackers/{hostTracker-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hostTrackers/{hostTracker-id}',
    paramDefs: {
      path: ['hostTracker-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hostTrackers/{hostTracker-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hostTrackers/{hostTracker-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hostTrackers/{hostTracker-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hostTrackers/{hostTracker-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/hostTrackers/{hostTracker-id}',
    paramDefs: {
      path: ['hostTracker-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hostTrackers`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hostTrackers']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/hostTrackers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/hostTrackers',
    body,
  };
}

export const host = {
  /**
   * `GET /security/threatIntelligence/hostTrackers/{hostTracker-id}/host`
   *
   * The host related to this hostTracker. When navigating to a hostTracker from a host, this should be assumed to be a return reference.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hostTrackers/{hostTracker-id}/host']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hostTrackers/{hostTracker-id}/host']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatIntelligence/hostTrackers/{hostTracker-id}/host',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hostTracker-id'],
      },
      params,
    };
  },
};
