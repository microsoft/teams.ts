import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    'delete'
  >;
  'GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}/instances',
    'get'
  >;
  'GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    'get'
  >;
  'PATCH /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    'patch'
  >;
  'POST /users/{user-id}/settings/windows/{windowsSetting-id}/instances': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}/instances',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'windowsSetting-id', in: 'path' },
      { name: 'windowsSettingInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances`
 *
 * A collection of setting values for a given windowsSetting.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/settings/windows/{windowsSetting-id}/instances',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'windowsSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}`
 *
 * A collection of setting values for a given windowsSetting.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'windowsSetting-id', in: 'path' },
      { name: 'windowsSettingInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'windowsSetting-id', in: 'path' },
      { name: 'windowsSettingInstance-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/settings/windows/{windowsSetting-id}/instances`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/settings/windows/{windowsSetting-id}/instances']['body'],
  params?: IEndpoints['POST /users/{user-id}/settings/windows/{windowsSetting-id}/instances']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/settings/windows/{windowsSetting-id}/instances']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/settings/windows/{windowsSetting-id}/instances',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'windowsSetting-id', in: 'path' },
    ],
    params,
    body,
  };
}
