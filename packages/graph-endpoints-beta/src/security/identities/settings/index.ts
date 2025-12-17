import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/identities/settings': Operation<'/security/identities/settings', 'delete'>;
  'GET /security/identities/settings': Operation<'/security/identities/settings', 'get'>;
  'PATCH /security/identities/settings': Operation<'/security/identities/settings', 'patch'>;
  'GET /security/identities/settings/autoAuditingConfiguration': Operation<
    '/security/identities/settings/autoAuditingConfiguration',
    'get'
  >;
  'PATCH /security/identities/settings/autoAuditingConfiguration': Operation<
    '/security/identities/settings/autoAuditingConfiguration',
    'patch'
  >;
  'DELETE /security/identities/settings/autoAuditingConfiguration': Operation<
    '/security/identities/settings/autoAuditingConfiguration',
    'delete'
  >;
}

/**
 * `DELETE /security/identities/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/identities/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/identities/settings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/identities/settings',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/identities/settings`
 *
 * Represents a container for security identities settings APIs.
 */
export function list(
  params?: IEndpoints['GET /security/identities/settings']['parameters']
): EndpointRequest<IEndpoints['GET /security/identities/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/identities/settings',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/identities/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/identities/settings']['body']
): EndpointRequest<IEndpoints['PATCH /security/identities/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/identities/settings',
    body,
  };
}

export const autoAuditingConfiguration = {
  /**
   * `GET /security/identities/settings/autoAuditingConfiguration`
   *
   * Get the properties and relationships of an microsoft.graph.security.autoAuditingConfiguration object.
   */
  get: function get(
    params?: IEndpoints['GET /security/identities/settings/autoAuditingConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/identities/settings/autoAuditingConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/identities/settings/autoAuditingConfiguration',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/identities/settings/autoAuditingConfiguration`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/identities/settings/autoAuditingConfiguration']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /security/identities/settings/autoAuditingConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/identities/settings/autoAuditingConfiguration',
      body,
    };
  },
  /**
   * `DELETE /security/identities/settings/autoAuditingConfiguration`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/identities/settings/autoAuditingConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/identities/settings/autoAuditingConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/identities/settings/autoAuditingConfiguration',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
