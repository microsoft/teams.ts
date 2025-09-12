export * as alerts from './alerts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/incidents/{incident-id}': Operation<
    '/security/incidents/{incident-id}',
    'delete'
  >;
  'GET /security/incidents': Operation<'/security/incidents', 'get'>;
  'GET /security/incidents/{incident-id}': Operation<'/security/incidents/{incident-id}', 'get'>;
  'PATCH /security/incidents/{incident-id}': Operation<
    '/security/incidents/{incident-id}',
    'patch'
  >;
  'POST /security/incidents': Operation<'/security/incidents', 'post'>;
}

/**
 * `DELETE /security/incidents/{incident-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/incidents/{incident-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/incidents/{incident-id}']['response']> {
  return {
    method: 'delete',
    path: '/security/incidents/{incident-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['incident-id'],
    },
    params,
  };
}

/**
 * `GET /security/incidents`
 *
 * Get a list of incident objects that Microsoft 365 Defender created to track attacks in an organization. Attacks are typically inflicted on different types of entities, such as devices, users, and mailboxes, resulting in multiple alert objects. Microsoft 365 Defender correlates alerts with the same attack techniques or the same attacker into an incident. This operation allows you to filter and sort through incidents to create an informed cyber security response. It exposes a collection of incidents that were flagged in your network, within the time range you specified in your environment retention policy. The most recent incidents are displayed at the top of the list.
 */
export function list(
  params?: IEndpoints['GET /security/incidents']['parameters']
): EndpointRequest<IEndpoints['GET /security/incidents']['response']> {
  return {
    method: 'get',
    path: '/security/incidents',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/incidents/{incident-id}`
 *
 * Retrieve the properties and relationships of an incident object. Attacks are typically inflicted on different types of entities, such as devices, users, and mailboxes, resulting in multiple alert objects. Microsoft 365 Defender correlates alerts with the same attack techniques or the same attacker into an incident.
 */
export function get(
  params?: IEndpoints['GET /security/incidents/{incident-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/incidents/{incident-id}']['response']> {
  return {
    method: 'get',
    path: '/security/incidents/{incident-id}',
    paramDefs: {
      path: ['incident-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/incidents/{incident-id}`
 *
 * Update the properties of an incident object.
 */
export function update(
  body: IEndpoints['PATCH /security/incidents/{incident-id}']['body'],
  params?: IEndpoints['PATCH /security/incidents/{incident-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/incidents/{incident-id}']['response']> {
  return {
    method: 'patch',
    path: '/security/incidents/{incident-id}',
    paramDefs: {
      path: ['incident-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/incidents`
 *
 */
export function create(
  body: IEndpoints['POST /security/incidents']['body']
): EndpointRequest<IEndpoints['POST /security/incidents']['response']> {
  return {
    method: 'post',
    path: '/security/incidents',
    body,
  };
}
