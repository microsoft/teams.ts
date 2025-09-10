import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/rules': Operation<'/security/rules', 'delete'>;
  'GET /security/rules': Operation<'/security/rules', 'get'>;
  'PATCH /security/rules': Operation<'/security/rules', 'patch'>;
  'GET /security/rules/detectionRules': Operation<'/security/rules/detectionRules', 'get'>;
  'POST /security/rules/detectionRules': Operation<'/security/rules/detectionRules', 'post'>;
  'GET /security/rules/detectionRules/{detectionRule-id}': Operation<
    '/security/rules/detectionRules/{detectionRule-id}',
    'get'
  >;
  'PATCH /security/rules/detectionRules/{detectionRule-id}': Operation<
    '/security/rules/detectionRules/{detectionRule-id}',
    'patch'
  >;
  'DELETE /security/rules/detectionRules/{detectionRule-id}': Operation<
    '/security/rules/detectionRules/{detectionRule-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/rules`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/rules']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/rules']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/rules',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/rules`
 *
 */
export function list(
  params?: IEndpoints['GET /security/rules']['parameters']
): EndpointRequest<IEndpoints['GET /security/rules']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/rules',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/rules`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/rules']['body']
): EndpointRequest<IEndpoints['PATCH /security/rules']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/rules',
    body,
  };
}

export const detectionRules = {
  /**
  * `GET /security/rules/detectionRules`
  *
  * Get a list of custom detection rules.
With custom detections, you can proactively monitor for and respond to various events and system states, including suspected breach activity and misconfigured assets in their organization network.
Custom detection rules, which are written in Kusto query language (KQL), automatically trigger alerts and response actions once there are events matching their KQL queries.
  */
  list: function list(
    params?: IEndpoints['GET /security/rules/detectionRules']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/rules/detectionRules']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/rules/detectionRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/rules/detectionRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/rules/detectionRules']['body']
  ): EndpointRequest<IEndpoints['POST /security/rules/detectionRules']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/rules/detectionRules',
      body,
    };
  },
  /**
   * `GET /security/rules/detectionRules/{detectionRule-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /security/rules/detectionRules/{detectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/rules/detectionRules/{detectionRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/rules/detectionRules/{detectionRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['detectionRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/rules/detectionRules/{detectionRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/rules/detectionRules/{detectionRule-id}']['body'],
    params?: IEndpoints['PATCH /security/rules/detectionRules/{detectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/rules/detectionRules/{detectionRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/rules/detectionRules/{detectionRule-id}',
      paramDefs: {
        path: ['detectionRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/rules/detectionRules/{detectionRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/rules/detectionRules/{detectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/rules/detectionRules/{detectionRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/rules/detectionRules/{detectionRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['detectionRule-id'],
      },
      params,
    };
  },
};
