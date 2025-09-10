import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /security/alerts': Operation<'/security/alerts', 'get'>;
  'GET /security/alerts/{alert-id}': Operation<'/security/alerts/{alert-id}', 'get'>;
  'PATCH /security/alerts/{alert-id}': Operation<'/security/alerts/{alert-id}', 'patch'>;
  'POST /security/alerts': Operation<'/security/alerts', 'post'>;
  'POST /security/alerts/updateAlerts': Operation<'/security/alerts/updateAlerts', 'post'>;
}

/**
 * `GET /security/alerts`
 *
 * Retrieve a list of alert objects.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/alerts']['parameters']
): EndpointRequest<IEndpoints['GET /security/alerts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/alerts',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/alerts/{alert-id}`
 *
 * Retrieve the properties and relationships of an alert object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/alerts/{alert-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/alerts/{alert-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/alerts/{alert-id}',
    paramDefs: {
      path: ['alert-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/alerts/{alert-id}`
 *
 * Update an editable alert property within any integrated solution to keep alert status and assignments in sync across solutions. This method updates any solution that has a record of the referenced alert ID.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/alerts/{alert-id}']['body'],
  params?: IEndpoints['PATCH /security/alerts/{alert-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/alerts/{alert-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/alerts/{alert-id}',
    paramDefs: {
      path: ['alert-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/alerts`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/alerts']['body']
): EndpointRequest<IEndpoints['POST /security/alerts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/alerts',
    body,
  };
}

export const updateAlerts = {
  /**
   * `POST /security/alerts/updateAlerts`
   *
   * Update multiple alerts in one request instead of multiple requests.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/alerts/updateAlerts']['body']
  ): EndpointRequest<IEndpoints['POST /security/alerts/updateAlerts']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/alerts/updateAlerts',
      body,
    };
  },
};
