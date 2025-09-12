export * as activities from './activities';
export * as protectionScopes from './protectionScopes';
export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/dataSecurityAndGovernance': Operation<
    '/users/{user-id}/dataSecurityAndGovernance',
    'delete'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance': Operation<
    '/users/{user-id}/dataSecurityAndGovernance',
    'get'
  >;
  'PATCH /users/{user-id}/dataSecurityAndGovernance': Operation<
    '/users/{user-id}/dataSecurityAndGovernance',
    'patch'
  >;
  'POST /users/{user-id}/dataSecurityAndGovernance/processContent': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/processContent',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/dataSecurityAndGovernance`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/dataSecurityAndGovernance',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance`
 *
 * The data security and governance settings for the user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/dataSecurityAndGovernance`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/dataSecurityAndGovernance',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const processContent = {
  /**
   * `POST /users/{user-id}/dataSecurityAndGovernance/processContent`
   *
   * Process content against data protection policies in the context of the current, or specified, user.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/processContent']['body'],
    params?: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/processContent']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/processContent']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/dataSecurityAndGovernance/processContent',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
