import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}',
    'delete'
  >;
  'GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages',
    'get'
  >;
  'GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}',
    'get'
  >;
  'PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}',
    'patch'
  >;
  'POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}`
 *
 * Deletes a localizedNotificationMessage.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'notificationMessageTemplate-id', in: 'path' },
      { name: 'localizedNotificationMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages`
 *
 * List properties and relationships of the localizedNotificationMessage objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'notificationMessageTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}`
 *
 * Read properties and relationships of the localizedNotificationMessage object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'notificationMessageTemplate-id', in: 'path' },
      { name: 'localizedNotificationMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}`
 *
 * Update the properties of a localizedNotificationMessage object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}',
    paramDefs: [
      { name: 'notificationMessageTemplate-id', in: 'path' },
      { name: 'localizedNotificationMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages`
 *
 * Create a new localizedNotificationMessage object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages']['body'],
  params?: IEndpoints['POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages',
    paramDefs: [{ name: 'notificationMessageTemplate-id', in: 'path' }],
    params,
    body,
  };
}
