export * as calculate from './calculate';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/application': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/application',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/application': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/application',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/application': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/application',
    'patch'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/application`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/application']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/application']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/application',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/application`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/application']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/application']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/application',
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
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/application`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/application']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/application']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/application']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/application',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
