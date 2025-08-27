export * as catalogEntry from './catalogEntry';
export * as matchedDevices from './matchedDevices';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}',
    'delete'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent',
    'get'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}',
    'get'
  >;
  'PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}',
    'patch'
  >;
  'POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deploymentAudience-id', in: 'path' },
      { name: 'applicableContent-catalogEntryId', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent`
 *
 * Content eligible to deploy to devices in the audience. Not nullable. Read-only.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deploymentAudience-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}`
 *
 * Content eligible to deploy to devices in the audience. Not nullable. Read-only.
 */
export function get$1(
  params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deploymentAudience-id', in: 'path' },
      { name: 'applicableContent-catalogEntryId', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent/{applicableContent-catalogEntryId}',
    paramDefs: [
      { name: 'deploymentAudience-id', in: 'path' },
      { name: 'applicableContent-catalogEntryId', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent']['body'],
  params?: IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/applicableContent',
    paramDefs: [{ name: 'deploymentAudience-id', in: 'path' }],
    params,
    body,
  };
}
