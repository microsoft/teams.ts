export * as activities from './activities';
export * as protectionScopes from './protectionScopes';
export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/dataSecurityAndGovernance': Operation<'/me/dataSecurityAndGovernance', 'delete'>;
  'GET /me/dataSecurityAndGovernance': Operation<'/me/dataSecurityAndGovernance', 'get'>;
  'PATCH /me/dataSecurityAndGovernance': Operation<'/me/dataSecurityAndGovernance', 'patch'>;
  'POST /me/dataSecurityAndGovernance/processContent': Operation<
    '/me/dataSecurityAndGovernance/processContent',
    'post'
  >;
}

/**
 * `DELETE /me/dataSecurityAndGovernance`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/dataSecurityAndGovernance']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/dataSecurityAndGovernance',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/dataSecurityAndGovernance`
 *
 * The data security and governance settings for the user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['GET /me/dataSecurityAndGovernance']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/dataSecurityAndGovernance',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/dataSecurityAndGovernance`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/dataSecurityAndGovernance']['body']
): EndpointRequest<IEndpoints['PATCH /me/dataSecurityAndGovernance']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/dataSecurityAndGovernance',
    body,
  };
}

export const processContent = {
  /**
   * `POST /me/dataSecurityAndGovernance/processContent`
   *
   * Process content against data protection policies in the context of the current, or specified, user.
   */
  create: function create(
    body: IEndpoints['POST /me/dataSecurityAndGovernance/processContent']['body']
  ): EndpointRequest<IEndpoints['POST /me/dataSecurityAndGovernance/processContent']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/dataSecurityAndGovernance/processContent',
      body,
    };
  },
};
