import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}',
    'delete'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions',
    'get'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}',
    'patch'
  >;
  'POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deploymentAudience-id', in: 'path' },
      { name: 'updatableAsset-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions`
 *
 * List the updatableAsset resources that are excluded from a deploymentAudience.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions',
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
 * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}`
 *
 * Specifies the assets to exclude from the audience.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deploymentAudience-id', in: 'path' },
      { name: 'updatableAsset-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}',
    paramDefs: [
      { name: 'deploymentAudience-id', in: 'path' },
      { name: 'updatableAsset-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions']['body'],
  params?: IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions',
    paramDefs: [{ name: 'deploymentAudience-id', in: 'path' }],
    params,
    body,
  };
}
