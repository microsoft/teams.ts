export * as policy from './policy';
export * as telephoneNumberManagement from './telephoneNumberManagement';
export * as userConfigurations from './userConfigurations';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/teams': Operation<'/admin/teams', 'delete'>;
  'GET /admin/teams': Operation<'/admin/teams', 'get'>;
  'PATCH /admin/teams': Operation<'/admin/teams', 'patch'>;
}

/**
 * `DELETE /admin/teams`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/teams']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/teams']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/teams',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/teams`
 *
 * A container for Teams administration functionalities, such as user configurations, telephone number management, and policy assignments.
 */
export function list(
  params?: IEndpoints['GET /admin/teams']['parameters']
): EndpointRequest<IEndpoints['GET /admin/teams']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/teams',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/teams`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/teams']['body']
): EndpointRequest<IEndpoints['PATCH /admin/teams']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/teams',
    body,
  };
}
