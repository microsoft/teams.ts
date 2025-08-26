export * as localizedNotificationMessages from './localizedNotificationMessages';
export * as sendTestMessage from './sendTestMessage';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}',
    'delete'
  >;
  'GET /deviceManagement/notificationMessageTemplates': Operation<
    '/deviceManagement/notificationMessageTemplates',
    'get'
  >;
  'GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}',
    'get'
  >;
  'PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}',
    'patch'
  >;
  'POST /deviceManagement/notificationMessageTemplates': Operation<
    '/deviceManagement/notificationMessageTemplates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}`
 *
 * Deletes a notificationMessageTemplate.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'notificationMessageTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/notificationMessageTemplates`
 *
 * List properties and relationships of the notificationMessageTemplate objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/notificationMessageTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/notificationMessageTemplates']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/notificationMessageTemplates',
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
 * `GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}`
 *
 * Read properties and relationships of the notificationMessageTemplate object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'notificationMessageTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}`
 *
 * Update the properties of a notificationMessageTemplate object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}',
    paramDefs: [{ name: 'notificationMessageTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/notificationMessageTemplates`
 *
 * Create a new notificationMessageTemplate object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/notificationMessageTemplates']['body'],
  params?: IEndpoints['POST /deviceManagement/notificationMessageTemplates']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/notificationMessageTemplates']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/notificationMessageTemplates',
    paramDefs: [],
    params,
    body,
  };
}
