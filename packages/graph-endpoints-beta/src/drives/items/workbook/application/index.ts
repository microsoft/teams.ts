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
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/application/calculate': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/application/calculate',
    'post'
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
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/application',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/application',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/application',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
    },
    params,
    body,
  };
}

export const calculate = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/application/calculate`
   *
   * Recalculate all currently opened workbooks in Excel.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/application/calculate']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/application/calculate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/application/calculate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/application/calculate',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};
