import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/identities/sensors/{sensor-id}': Operation<
    '/security/identities/sensors/{sensor-id}',
    'delete'
  >;
  'GET /security/identities/sensors': Operation<'/security/identities/sensors', 'get'>;
  'GET /security/identities/sensors/{sensor-id}': Operation<
    '/security/identities/sensors/{sensor-id}',
    'get'
  >;
  'PATCH /security/identities/sensors/{sensor-id}': Operation<
    '/security/identities/sensors/{sensor-id}',
    'patch'
  >;
  'POST /security/identities/sensors': Operation<'/security/identities/sensors', 'post'>;
  'GET /security/identities/sensors/{sensor-id}/healthIssues': Operation<
    '/security/identities/sensors/{sensor-id}/healthIssues',
    'get'
  >;
  'GET /security/identities/sensors/{sensor-id}/healthIssues/{healthIssue-id}': Operation<
    '/security/identities/sensors/{sensor-id}/healthIssues/{healthIssue-id}',
    'get'
  >;
}

/**
 * `DELETE /security/identities/sensors/{sensor-id}`
 *
 * Delete a sensor object.
 */
export function del(
  params?: IEndpoints['DELETE /security/identities/sensors/{sensor-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/identities/sensors/{sensor-id}']['response']> {
  return {
    method: 'delete',
    path: '/security/identities/sensors/{sensor-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sensor-id'],
    },
    params,
  };
}

/**
 * `GET /security/identities/sensors`
 *
 * Get a list of sensor objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/identities/sensors']['parameters']
): EndpointRequest<IEndpoints['GET /security/identities/sensors']['response']> {
  return {
    method: 'get',
    path: '/security/identities/sensors',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/identities/sensors/{sensor-id}`
 *
 * Read the properties and relationships of a sensor object.
 */
export function get(
  params?: IEndpoints['GET /security/identities/sensors/{sensor-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/identities/sensors/{sensor-id}']['response']> {
  return {
    method: 'get',
    path: '/security/identities/sensors/{sensor-id}',
    paramDefs: {
      path: ['sensor-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/identities/sensors/{sensor-id}`
 *
 * Update the properties of a sensor object.
 */
export function update(
  body: IEndpoints['PATCH /security/identities/sensors/{sensor-id}']['body'],
  params?: IEndpoints['PATCH /security/identities/sensors/{sensor-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/identities/sensors/{sensor-id}']['response']> {
  return {
    method: 'patch',
    path: '/security/identities/sensors/{sensor-id}',
    paramDefs: {
      path: ['sensor-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/identities/sensors`
 *
 */
export function create(
  body: IEndpoints['POST /security/identities/sensors']['body']
): EndpointRequest<IEndpoints['POST /security/identities/sensors']['response']> {
  return {
    method: 'post',
    path: '/security/identities/sensors',
    body,
  };
}

export const healthIssues = {
  /**
   * `GET /security/identities/sensors/{sensor-id}/healthIssues`
   *
   * Represents potential issues within a customer&#x27;s Microsoft Defender for Identity configuration that Microsoft Defender for Identity identified related to the sensor.
   */
  list: function list(
    params?: IEndpoints['GET /security/identities/sensors/{sensor-id}/healthIssues']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/identities/sensors/{sensor-id}/healthIssues']['response']
  > {
    return {
      method: 'get',
      path: '/security/identities/sensors/{sensor-id}/healthIssues',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sensor-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/identities/sensors/{sensor-id}/healthIssues/{healthIssue-id}`
   *
   * Represents potential issues within a customer&#x27;s Microsoft Defender for Identity configuration that Microsoft Defender for Identity identified related to the sensor.
   */
  get: function get(
    params?: IEndpoints['GET /security/identities/sensors/{sensor-id}/healthIssues/{healthIssue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/identities/sensors/{sensor-id}/healthIssues/{healthIssue-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/identities/sensors/{sensor-id}/healthIssues/{healthIssue-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sensor-id', 'healthIssue-id'],
      },
      params,
    };
  },
};
