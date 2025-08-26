import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}': Operation<
    '/me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    'delete'
  >;
  'GET /me/settings/windows/{windowsSetting-id}/instances': Operation<
    '/me/settings/windows/{windowsSetting-id}/instances',
    'get'
  >;
  'GET /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}': Operation<
    '/me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    'get'
  >;
  'PATCH /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}': Operation<
    '/me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    'patch'
  >;
  'POST /me/settings/windows/{windowsSetting-id}/instances': Operation<
    '/me/settings/windows/{windowsSetting-id}/instances',
    'post'
  >;
}

/**
 * `DELETE /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsSetting-id', in: 'path' },
      { name: 'windowsSettingInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/settings/windows/{windowsSetting-id}/instances`
 *
 * Get a list of windowsSettingInstance objects and their properties for a user.
 */
export function list(
  params?: IEndpoints['GET /me/settings/windows/{windowsSetting-id}/instances']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/settings/windows/{windowsSetting-id}/instances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/settings/windows/{windowsSetting-id}/instances',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}`
 *
 * Read the properties and relationships of a windowsSettingInstance object by passing the Windows setting ID and Windows setting instance ID in the URL. This method gets a windowsSettingInstance for a user.
 */
export function get(
  params?: IEndpoints['GET /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsSetting-id', in: 'path' },
      { name: 'windowsSettingInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['body'],
  params?: IEndpoints['PATCH /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    paramDefs: [
      { name: 'windowsSetting-id', in: 'path' },
      { name: 'windowsSettingInstance-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/settings/windows/{windowsSetting-id}/instances`
 *
 */
export function create(
  body: IEndpoints['POST /me/settings/windows/{windowsSetting-id}/instances']['body'],
  params?: IEndpoints['POST /me/settings/windows/{windowsSetting-id}/instances']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/settings/windows/{windowsSetting-id}/instances']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/settings/windows/{windowsSetting-id}/instances',
    paramDefs: [{ name: 'windowsSetting-id', in: 'path' }],
    params,
    body,
  };
}
