export * as applicableContent from './applicableContent';
export * as exclusions from './exclusions';
export * as members from './members';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/deployments/{deployment-id}/audience': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience',
    'delete'
  >;
  'GET /admin/windows/updates/deployments/{deployment-id}/audience': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience',
    'get'
  >;
  'PATCH /admin/windows/updates/deployments/{deployment-id}/audience': Operation<
    '/admin/windows/updates/deployments/{deployment-id}/audience',
    'patch'
  >;
}

/**
 * `DELETE /admin/windows/updates/deployments/{deployment-id}/audience`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}/audience']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deployment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/deployments/{deployment-id}/audience`
 *
 * Specifies the audience to which content is deployed.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}/audience']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deployment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/deployments/{deployment-id}/audience`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}/audience']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/deployments/{deployment-id}/audience',
    paramDefs: [{ name: 'deployment-id', in: 'path' }],
    params,
    body,
  };
}
