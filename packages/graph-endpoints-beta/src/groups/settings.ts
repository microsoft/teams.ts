import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/settings/{directorySetting-id}': Operation<
    '/groups/{group-id}/settings/{directorySetting-id}',
    'delete'
  >;
  'GET /groups/{group-id}/settings': Operation<'/groups/{group-id}/settings', 'get'>;
  'GET /groups/{group-id}/settings/{directorySetting-id}': Operation<
    '/groups/{group-id}/settings/{directorySetting-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/settings/{directorySetting-id}': Operation<
    '/groups/{group-id}/settings/{directorySetting-id}',
    'patch'
  >;
  'POST /groups/{group-id}/settings': Operation<'/groups/{group-id}/settings', 'post'>;
}

/**
 * `DELETE /groups/{group-id}/settings/{directorySetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/settings/{directorySetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/settings/{directorySetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/settings/{directorySetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'directorySetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/settings`
 *
 * Settings that can govern this group&#x27;s behavior, like whether members can invite guest users to the group. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/settings']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/settings']['response']> {
  return {
    ver: 'beta',
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
 * `GET /groups/{group-id}/settings/{directorySetting-id}`
 *
 * Settings that can govern this group&#x27;s behavior, like whether members can invite guest users to the group. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/settings/{directorySetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/settings/{directorySetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/settings/{directorySetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'directorySetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/settings/{directorySetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/settings/{directorySetting-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/settings/{directorySetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/settings/{directorySetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/settings/{directorySetting-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'directorySetting-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/settings`
 *
 * Create a new directory setting based on the templates available in directorySettingTemplates. These settings can be at the tenant-level or at the group level. Group settings apply to only Microsoft 365 groups. The template named Group.Unified can be used to configure tenant-wide Microsoft 365 group settings, while the template named Group.Unified.Guest can be used to configure group-specific settings.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/settings']['body'],
  params?: IEndpoints['POST /groups/{group-id}/settings']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/settings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/settings',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
