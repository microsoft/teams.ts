import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/emailNotificationsSetting': Operation<
    '/solutions/backupRestore/emailNotificationsSetting',
    'delete'
  >;
  'GET /solutions/backupRestore/emailNotificationsSetting': Operation<
    '/solutions/backupRestore/emailNotificationsSetting',
    'get'
  >;
  'PATCH /solutions/backupRestore/emailNotificationsSetting': Operation<
    '/solutions/backupRestore/emailNotificationsSetting',
    'patch'
  >;
}

/**
 * `DELETE /solutions/backupRestore/emailNotificationsSetting`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/emailNotificationsSetting']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/emailNotificationsSetting']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/emailNotificationsSetting',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/emailNotificationsSetting`
 *
 * Read the properties and relationships of an emailNotificationsSetting object.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/emailNotificationsSetting']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/emailNotificationsSetting']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/emailNotificationsSetting',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/emailNotificationsSetting`
 *
 * Update the properties of an emailNotificationsSetting object.
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/emailNotificationsSetting']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/emailNotificationsSetting']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/emailNotificationsSetting']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/emailNotificationsSetting',
    paramDefs: [],
    params,
    body,
  };
}
