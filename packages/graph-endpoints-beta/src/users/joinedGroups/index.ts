import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/joinedGroups': Operation<'/users/{user-id}/joinedGroups', 'get'>;
  'POST /users/{user-id}/joinedGroups/evaluateDynamicMembership': Operation<
    '/users/{user-id}/joinedGroups/evaluateDynamicMembership',
    'post'
  >;
}

/**
 * `GET /users/{user-id}/joinedGroups`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedGroups']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/joinedGroups',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

export const evaluateDynamicMembership = {
  /**
   * `POST /users/{user-id}/joinedGroups/evaluateDynamicMembership`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedGroups/evaluateDynamicMembership']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedGroups/evaluateDynamicMembership']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedGroups/evaluateDynamicMembership']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/joinedGroups/evaluateDynamicMembership',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
