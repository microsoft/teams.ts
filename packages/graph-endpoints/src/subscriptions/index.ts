export * as reauthorize from './reauthorize';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /subscriptions/{subscription-id}': Operation<
    '/subscriptions/{subscription-id}',
    'delete'
  >;
  'GET /subscriptions': Operation<'/subscriptions', 'get'>;
  'GET /subscriptions/{subscription-id}': Operation<'/subscriptions/{subscription-id}', 'get'>;
  'PATCH /subscriptions/{subscription-id}': Operation<'/subscriptions/{subscription-id}', 'patch'>;
  'POST /subscriptions': Operation<'/subscriptions', 'post'>;
}

/**
 * `DELETE /subscriptions/{subscription-id}`
 *
 * Delete a subscription. For the list of resources that support subscribing to change notifications, see the table in the Permissions section.
 */
export function del(
  params?: IEndpoints['DELETE /subscriptions/{subscription-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /subscriptions/{subscription-id}']['response']> {
  return {
    method: 'delete',
    path: '/subscriptions/{subscription-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /subscriptions`
 *
 * Retrieve the properties and relationships of webhook subscriptions, based on the app ID, the user, and the user&#x27;s role with a tenant. The content of the response depends on the context in which the app is calling; for details, see the scenarios in the Permissions section.
 */
export function list(
  params?: IEndpoints['GET /subscriptions']['parameters']
): EndpointRequest<IEndpoints['GET /subscriptions']['response']> {
  return {
    method: 'get',
    path: '/subscriptions',
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
 * `GET /subscriptions/{subscription-id}`
 *
 * Retrieve the properties and relationships of a subscription. See the table in the Permissions section for the list of resources that support subscribing to change notifications.
 */
export function get(
  params?: IEndpoints['GET /subscriptions/{subscription-id}']['parameters']
): EndpointRequest<IEndpoints['GET /subscriptions/{subscription-id}']['response']> {
  return {
    method: 'get',
    path: '/subscriptions/{subscription-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /subscriptions/{subscription-id}`
 *
 * Renew a subscription by extending its expiry time. The table in the Permissions section lists the resources that support subscribing to change notifications. Subscriptions expire after a length of time that varies by resource type. In order to avoid missing change notifications, an app should renew its subscriptions well in advance of their expiry date. See subscription for maximum length of a subscription for each resource type.
 */
export function update(
  body: IEndpoints['PATCH /subscriptions/{subscription-id}']['body'],
  params?: IEndpoints['PATCH /subscriptions/{subscription-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /subscriptions/{subscription-id}']['response']> {
  return {
    method: 'patch',
    path: '/subscriptions/{subscription-id}',
    paramDefs: [{ name: 'subscription-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /subscriptions`
 *
 * Subscribes a listener application to receive change notifications when the requested type of changes occur to the specified resource in Microsoft Graph. To identify the resources for which you can create subscriptions and the limitations on subscriptions, see Set up notifications for changes in resource data: Supported resources. Some resources support rich notifications, that is, notifications that include resource data. For more information about these resources, see Set up change notifications that include resource data: Supported resources.
 */
export function create(
  body: IEndpoints['POST /subscriptions']['body'],
  params?: IEndpoints['POST /subscriptions']['parameters']
): EndpointRequest<IEndpoints['POST /subscriptions']['response']> {
  return {
    method: 'post',
    path: '/subscriptions',
    paramDefs: [],
    params,
    body,
  };
}
