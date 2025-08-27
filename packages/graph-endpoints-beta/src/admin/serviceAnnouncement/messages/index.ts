export * as archive from './archive';
export * as attachments from './attachments';
export * as attachmentsArchive from './attachmentsArchive';
export * as favorite from './favorite';
export * as markRead from './markRead';
export * as markUnread from './markUnread';
export * as unarchive from './unarchive';
export * as unfavorite from './unfavorite';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}',
    'delete'
  >;
  'GET /admin/serviceAnnouncement/messages': Operation<
    '/admin/serviceAnnouncement/messages',
    'get'
  >;
  'GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}',
    'get'
  >;
  'PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}',
    'patch'
  >;
  'POST /admin/serviceAnnouncement/messages': Operation<
    '/admin/serviceAnnouncement/messages',
    'post'
  >;
}

/**
 * `DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'serviceUpdateMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/messages`
 *
 * Retrieve the serviceUpdateMessage resources from the messages navigation property. This operation retrieves all service update messages that exist for the tenant.
 */
export function list(
  params?: IEndpoints['GET /admin/serviceAnnouncement/messages']['parameters']
): EndpointRequest<IEndpoints['GET /admin/serviceAnnouncement/messages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/serviceAnnouncement/messages',
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
 * `GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}`
 *
 * Retrieve the properties and relationships of a serviceUpdateMessage object. This operation retrieves a specified service update message for the tenant. The operation returns an error if the message does not exist for the tenant.
 */
export function get(
  params?: IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'serviceUpdateMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['body'],
  params?: IEndpoints['PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}',
    paramDefs: [{ name: 'serviceUpdateMessage-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/serviceAnnouncement/messages`
 *
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/messages']['body'],
  params?: IEndpoints['POST /admin/serviceAnnouncement/messages']['parameters']
): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/messages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/serviceAnnouncement/messages',
    paramDefs: [],
    params,
    body,
  };
}
