export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}': Operation<
    '/me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}',
    'delete'
  >;
  'GET /me/outlook/tasks/{outlookTask-id}/attachments': Operation<
    '/me/outlook/tasks/{outlookTask-id}/attachments',
    'get'
  >;
  'GET /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}': Operation<
    '/me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}',
    'get'
  >;
  'POST /me/outlook/tasks/{outlookTask-id}/attachments': Operation<
    '/me/outlook/tasks/{outlookTask-id}/attachments',
    'post'
  >;
}

/**
 * `DELETE /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'outlookTask-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/outlook/tasks/{outlookTask-id}/attachments`
 *
 * The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the task. Read-only. Nullable.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /me/outlook/tasks/{outlookTask-id}/attachments']['parameters']
): EndpointRequest<IEndpoints['GET /me/outlook/tasks/{outlookTask-id}/attachments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/tasks/{outlookTask-id}/attachments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outlookTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}`
 *
 * The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the task. Read-only. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outlookTask-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /me/outlook/tasks/{outlookTask-id}/attachments`
 *
 * Use this API to add an attachment to an outlookTask. The attachment can be a file (of fileAttachment type) or Outlook item (itemAttachment type).
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/attachments']['body'],
  params?: IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/attachments']['parameters']
): EndpointRequest<IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/attachments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/outlook/tasks/{outlookTask-id}/attachments',
    paramDefs: [{ name: 'outlookTask-id', in: 'path' }],
    params,
    body,
  };
}
