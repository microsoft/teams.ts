import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/sharepoint/settings': Operation<'/admin/sharepoint/settings', 'delete'>;
  'GET /admin/sharepoint/settings': Operation<'/admin/sharepoint/settings', 'get'>;
  'PATCH /admin/sharepoint/settings': Operation<'/admin/sharepoint/settings', 'patch'>;
}

/**
 * `DELETE /admin/sharepoint/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/sharepoint/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/sharepoint/settings']['response']> {
  return {
    method: 'delete',
    path: '/admin/sharepoint/settings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/sharepoint/settings`
 *
 * Get the tenant-level settings for SharePoint and OneDrive.
 */
export function list(
  params?: IEndpoints['GET /admin/sharepoint/settings']['parameters']
): EndpointRequest<IEndpoints['GET /admin/sharepoint/settings']['response']> {
  return {
    method: 'get',
    path: '/admin/sharepoint/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/sharepoint/settings`
 *
 * Update one or more tenant-level settings for SharePoint and OneDrive.
 */
export function update(
  body: IEndpoints['PATCH /admin/sharepoint/settings']['body'],
  params?: IEndpoints['PATCH /admin/sharepoint/settings']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/sharepoint/settings']['response']> {
  return {
    method: 'patch',
    path: '/admin/sharepoint/settings',
    paramDefs: [],
    params,
    body,
  };
}
