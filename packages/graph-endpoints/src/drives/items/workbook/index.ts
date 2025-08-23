export * as application from './application';
export * as closeSession from './closeSession';
export * as comments from './comments';
export * as createSession from './createSession';
export * as functions from './functions';
export * as names from './names';
export * as operations from './operations';
export * as refreshSession from './refreshSession';
export * as tables from './tables';
export * as worksheets from './worksheets';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook',
    'patch'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook`
 *
 * For files that are Excel spreadsheets, access to the workbook API to work with the spreadsheet&#x27;s contents. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
