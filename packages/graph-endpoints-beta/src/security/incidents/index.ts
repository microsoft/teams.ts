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
    ver: 'beta',
    method: 'delete',
    path: '/security/incidents/{incident-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'incident-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'get',
    path: '/security/incidents',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    ver: 'beta',
    method: 'get',
    path: '/security/incidents/{incident-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'incident-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'patch',
    path: '/security/incidents/{incident-id}',
    paramDefs: [{ name: 'incident-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/incidents`
 *
 */
export function create(
  body: IEndpoints['POST /security/incidents']['body'],
  params?: IEndpoints['POST /security/incidents']['parameters']
): EndpointRequest<IEndpoints['POST /security/incidents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/incidents',
    paramDefs: [],
    params,
    body,
  };
}
