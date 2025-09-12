import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/incidents/{incident-id}/alerts': Operation<
    '/security/incidents/{incident-id}/alerts',
    'get'
  >;
  'GET /security/incidents/{incident-id}/alerts/{alert-id}': Operation<
    '/security/incidents/{incident-id}/alerts/{alert-id}',
    'get'
  >;
  'POST /security/incidents/{incident-id}/alerts/{alert-id}/comments': Operation<
    '/security/incidents/{incident-id}/alerts/{alert-id}/comments',
    'post'
  >;
}

/**
 * `GET /security/incidents/{incident-id}/alerts`
 *
 * The list of related alerts. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /security/incidents/{incident-id}/alerts']['parameters']
): EndpointRequest<IEndpoints['GET /security/incidents/{incident-id}/alerts']['response']> {
  return {
    method: 'get',
    path: '/security/incidents/{incident-id}/alerts',
    paramDefs: {
      path: ['incident-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/incidents/{incident-id}/alerts/{alert-id}`
 *
 * The list of related alerts. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /security/incidents/{incident-id}/alerts/{alert-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/incidents/{incident-id}/alerts/{alert-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/incidents/{incident-id}/alerts/{alert-id}',
    paramDefs: {
      path: ['incident-id', 'alert-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const comments = {
  /**
   * `POST /security/incidents/{incident-id}/alerts/{alert-id}/comments`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/incidents/{incident-id}/alerts/{alert-id}/comments']['body'],
    params?: IEndpoints['POST /security/incidents/{incident-id}/alerts/{alert-id}/comments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/incidents/{incident-id}/alerts/{alert-id}/comments']['response']
  > {
    return {
      method: 'post',
      path: '/security/incidents/{incident-id}/alerts/{alert-id}/comments',
      paramDefs: {
        header: ['If-Match'],
        path: ['incident-id', 'alert-id'],
      },
      params,
      body,
    };
  },
};
