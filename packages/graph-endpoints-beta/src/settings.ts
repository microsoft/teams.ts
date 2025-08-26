import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /settings/{directorySetting-id}': Operation<'/settings/{directorySetting-id}', 'delete'>;
  'GET /settings': Operation<'/settings', 'get'>;
  'GET /settings/{directorySetting-id}': Operation<'/settings/{directorySetting-id}', 'get'>;
  'PATCH /settings/{directorySetting-id}': Operation<'/settings/{directorySetting-id}', 'patch'>;
  'POST /settings': Operation<'/settings', 'post'>;
}

/**
 * `DELETE /settings/{directorySetting-id}`
 *
 * Delete a directory setting.
 */
export function del(
  params?: IEndpoints['DELETE /settings/{directorySetting-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /settings/{directorySetting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/settings/{directorySetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'directorySetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /settings`
 *
 * Retrieve a list of tenant-level or group-specific directory settings objects.
 */
export function list(
  params?: IEndpoints['GET /settings']['parameters']
): EndpointRequest<IEndpoints['GET /settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/settings',
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
 * `GET /settings/{directorySetting-id}`
 *
 * Retrieve the properties of a specific directory setting object.
 */
export function get(
  params?: IEndpoints['GET /settings/{directorySetting-id}']['parameters']
): EndpointRequest<IEndpoints['GET /settings/{directorySetting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/settings/{directorySetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directorySetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /settings/{directorySetting-id}`
 *
 * Update the properties of a specific directory setting object.
 */
export function update(
  body: IEndpoints['PATCH /settings/{directorySetting-id}']['body'],
  params?: IEndpoints['PATCH /settings/{directorySetting-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /settings/{directorySetting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/settings/{directorySetting-id}',
    paramDefs: [{ name: 'directorySetting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /settings`
 *
 * Create a new directory setting based on the templates available in directorySettingTemplates. These settings can be at the tenant-level or at the group level. Group settings apply to only Microsoft 365 groups. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.
 */
export function create(
  body: IEndpoints['POST /settings']['body'],
  params?: IEndpoints['POST /settings']['parameters']
): EndpointRequest<IEndpoints['POST /settings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/settings',
    paramDefs: [],
    params,
    body,
  };
}
