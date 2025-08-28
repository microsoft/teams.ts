import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}',
    'delete'
  >;
  'GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members',
    'get'
  >;
  'GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}',
    'patch'
  >;
  'POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members': Operation<
    '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'updatePolicy-id', in: 'path' },
      { name: 'updatableAsset-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members`
 *
 * Specifies the assets to include in the audience.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'updatePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}`
 *
 * Specifies the assets to include in the audience.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'updatePolicy-id', in: 'path' },
      { name: 'updatableAsset-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members/{updatableAsset-id}',
    paramDefs: [
      { name: 'updatePolicy-id', in: 'path' },
      { name: 'updatableAsset-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members']['body'],
  params?: IEndpoints['POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/updatePolicies/{updatePolicy-id}/audience/members',
    paramDefs: [{ name: 'updatePolicy-id', in: 'path' }],
    params,
    body,
  };
}
