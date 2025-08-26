export * as changes from './changes';
export * as comment from './comment';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task',
    'patch'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookComment-id', in: 'path' },
      { name: 'workbookCommentReply-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task`
 *
 * The task associated with the comment thread.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookComment-id', in: 'path' },
      { name: 'workbookCommentReply-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookComment-id', in: 'path' },
      { name: 'workbookCommentReply-id', in: 'path' },
    ],
    params,
    body,
  };
}
