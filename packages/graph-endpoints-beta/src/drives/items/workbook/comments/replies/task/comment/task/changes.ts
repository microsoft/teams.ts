import type { EndpointRequest, Operation } from './../../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookComment-id', in: 'path' },
      { name: 'workbookCommentReply-id', in: 'path' },
      { name: 'workbookDocumentTaskChange-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes`
 *
 * A collection of task change histories.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
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
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}`
 *
 * A collection of task change histories.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookComment-id', in: 'path' },
      { name: 'workbookCommentReply-id', in: 'path' },
      { name: 'workbookDocumentTaskChange-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes/{workbookDocumentTaskChange-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'workbookComment-id', in: 'path' },
      { name: 'workbookCommentReply-id', in: 'path' },
      { name: 'workbookDocumentTaskChange-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}/task/comment/task/changes',
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
