import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/joinedGroups': Operation<'/me/joinedGroups', 'get'>;
  'POST /me/joinedGroups/evaluateDynamicMembership': Operation<
    '/me/joinedGroups/evaluateDynamicMembership',
    'post'
  >;
}

/**
 * `GET /me/joinedGroups`
 *
 */
export function list(
  params?: IEndpoints['GET /me/joinedGroups']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/joinedGroups',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

export const evaluateDynamicMembership = {
  /**
   * `POST /me/joinedGroups/evaluateDynamicMembership`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedGroups/evaluateDynamicMembership']['body']
  ): EndpointRequest<IEndpoints['POST /me/joinedGroups/evaluateDynamicMembership']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/joinedGroups/evaluateDynamicMembership',
      body,
    };
  },
};
