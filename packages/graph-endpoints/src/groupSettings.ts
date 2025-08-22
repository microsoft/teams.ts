import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /groupSettings/{groupSetting-id}': Operation<
    '/groupSettings/{groupSetting-id}',
    'delete'
  >;
  'GET /groupSettings': Operation<'/groupSettings', 'get'>;
  'GET /groupSettings/{groupSetting-id}': Operation<'/groupSettings/{groupSetting-id}', 'get'>;
  'PATCH /groupSettings/{groupSetting-id}': Operation<'/groupSettings/{groupSetting-id}', 'patch'>;
  'POST /groupSettings': Operation<'/groupSettings', 'post'>;
}

/**
 * `DELETE /groupSettings/{groupSetting-id}`
 *
 * Delete a tenant-level or group-specific groupSetting object.
 */
export function del(
  params?: IEndpoints['DELETE /groupSettings/{groupSetting-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /groupSettings/{groupSetting-id}']['response']> {
  return {
    method: 'delete',
    path: '/groupSettings/{groupSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groupSettings`
 *
 * Retrieve a list of tenant-level or group-specific group settings objects.
 */
export function list(
  params?: IEndpoints['GET /groupSettings']['parameters']
): EndpointRequest<IEndpoints['GET /groupSettings']['response']> {
  return {
    method: 'get',
    path: '/groupSettings',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /groupSettings/{groupSetting-id}`
 *
 * Retrieve the properties of a specific group setting object. The setting can be a tenant-level or group-specific setting.
 */
export function get(
  params?: IEndpoints['GET /groupSettings/{groupSetting-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groupSettings/{groupSetting-id}']['response']> {
  return {
    method: 'get',
    path: '/groupSettings/{groupSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groupSettings/{groupSetting-id}`
 *
 * Update the properties of a groupSetting object for tenant-wide group settings or a specific group setting.
 */
export function update(
  body: IEndpoints['PATCH /groupSettings/{groupSetting-id}']['body'],
  params?: IEndpoints['PATCH /groupSettings/{groupSetting-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /groupSettings/{groupSetting-id}']['response']> {
  return {
    method: 'patch',
    path: '/groupSettings/{groupSetting-id}',
    paramDefs: [{ name: 'groupSetting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /groupSettings`
 *
 * Create a new group setting based on the templates available in groupSettingTemplates. These settings can be at the tenant-level or at the group level. Group settings apply to only Microsoft 365 groups. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.
 */
export function create(
  body: IEndpoints['POST /groupSettings']['body'],
  params?: IEndpoints['POST /groupSettings']['parameters']
): EndpointRequest<IEndpoints['POST /groupSettings']['response']> {
  return {
    method: 'post',
    path: '/groupSettings',
    paramDefs: [],
    params,
    body,
  };
}
