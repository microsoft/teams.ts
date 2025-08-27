export * as catalog from './catalog';
export * as deploymentAudiences from './deploymentAudiences';
export * as deployments from './deployments';
export * as products from './products';
export * as resourceConnections from './resourceConnections';
export * as updatableAssets from './updatableAssets';
export * as updatePolicies from './updatePolicies';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates': Operation<'/admin/windows/updates', 'delete'>;
  'GET /admin/windows/updates': Operation<'/admin/windows/updates', 'get'>;
  'PATCH /admin/windows/updates': Operation<'/admin/windows/updates', 'patch'>;
}

/**
 * `DELETE /admin/windows/updates`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/windows/updates']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /admin/windows/updates`
 *
 * Entity that acts as a container for all Windows Update for Business deployment service functionalities. Read-only.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/windows/updates']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates',
    paramDefs: [],
    params,
    body,
  };
}
