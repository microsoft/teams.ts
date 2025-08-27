import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/settings/{groupSetting-id}': Operation<
    '/groups/{group-id}/settings/{groupSetting-id}',
    'delete'
  >;
  'GET /groups/{group-id}/settings': Operation<'/groups/{group-id}/settings', 'get'>;
  'GET /groups/{group-id}/settings/{groupSetting-id}': Operation<
    '/groups/{group-id}/settings/{groupSetting-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/settings/{groupSetting-id}': Operation<
    '/groups/{group-id}/settings/{groupSetting-id}',
    'patch'
  >;
  'POST /groups/{group-id}/settings': Operation<'/groups/{group-id}/settings', 'post'>;
}

/**
 * `DELETE /groups/{group-id}/settings/{groupSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/settings/{groupSetting-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/settings/{groupSetting-id}']['response']> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/settings/{groupSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'groupSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/settings`
 *
 * Retrieve a list of tenant-level or group-specific group settings objects.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/settings']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/settings']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/settings',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/settings/{groupSetting-id}`
 *
 * Retrieve the properties of a specific group setting object. The setting can be a tenant-level or group-specific setting.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/settings/{groupSetting-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/settings/{groupSetting-id}']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/settings/{groupSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'groupSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/settings/{groupSetting-id}`
 *
 * Update the properties of a groupSetting object for tenant-wide group settings or a specific group setting.
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/settings/{groupSetting-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/settings/{groupSetting-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/settings/{groupSetting-id}']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/settings/{groupSetting-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'groupSetting-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/settings`
 *
 * Create a new group setting based on the templates available in groupSettingTemplates. These settings can be at the tenant-level or at the group level. Group settings apply to only Microsoft 365 groups. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/settings']['body'],
  params?: IEndpoints['POST /groups/{group-id}/settings']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/settings']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/settings',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
