export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/messages/{message-id}/attachments/{attachment-id}': Operation<
    '/me/messages/{message-id}/attachments/{attachment-id}',
    'delete'
  >;
  'GET /me/messages/{message-id}/attachments': Operation<
    '/me/messages/{message-id}/attachments',
    'get'
  >;
  'GET /me/messages/{message-id}/attachments/{attachment-id}': Operation<
    '/me/messages/{message-id}/attachments/{attachment-id}',
    'get'
  >;
  'POST /me/messages/{message-id}/attachments': Operation<
    '/me/messages/{message-id}/attachments',
    'post'
  >;
}

/**
 * `DELETE /me/messages/{message-id}/attachments/{attachment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/messages/{message-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/messages/{message-id}/attachments/{attachment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/messages/{message-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'message-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/messages/{message-id}/attachments`
 *
 * Retrieve a list of attachment objects.
 */
export function list(
  params?: IEndpoints['GET /me/messages/{message-id}/attachments']['parameters']
): EndpointRequest<IEndpoints['GET /me/messages/{message-id}/attachments']['response']> {
  return {
    method: 'get',
    path: '/me/messages/{message-id}/attachments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'message-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/messages/{message-id}/attachments/{attachment-id}`
 *
 * Read the properties, relationships, or raw contents of an attachment that is attached to a user event, message, or group post. An attachment can be one of the following types: All these types of attachments are derived from the attachment resource.
 */
export function get(
  params?: IEndpoints['GET /me/messages/{message-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/messages/{message-id}/attachments/{attachment-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/messages/{message-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'message-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `POST /me/messages/{message-id}/attachments`
  *
  * Use this API to add an attachment to a message. An attachment can be one of the following types: All these types of attachment resources are derived from the attachment
resource. You can add an attachment to an existing message by posting to its attachments collection, or you can
add an attachment to a message that is being created and sent on the fly. This operation limits the size of the attachment you can add to under 3 MB.
  */
export function create(
  body: IEndpoints['POST /me/messages/{message-id}/attachments']['body'],
  params?: IEndpoints['POST /me/messages/{message-id}/attachments']['parameters']
): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/attachments']['response']> {
  return {
    method: 'post',
    path: '/me/messages/{message-id}/attachments',
    paramDefs: [{ name: 'message-id', in: 'path' }],
    params,
    body,
  };
}
