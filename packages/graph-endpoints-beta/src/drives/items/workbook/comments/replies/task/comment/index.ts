export * as task from './task';

import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment',
    'patch'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id', 'workbookComment-id', 'workbookCommentReply-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment`
 *
 * The comment that the task is associated with.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookComment-id', 'workbookCommentReply-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookComment-id', 'workbookCommentReply-id'],
    },
    params,
    body,
  };
}
