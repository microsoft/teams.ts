export * as protectionScopes from './protectionScopes';
export * as sensitivityLabels from './sensitivityLabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataSecurityAndGovernance': Operation<
    '/security/dataSecurityAndGovernance',
    'delete'
  >;
  'GET /security/dataSecurityAndGovernance': Operation<
    '/security/dataSecurityAndGovernance',
    'get'
  >;
  'PATCH /security/dataSecurityAndGovernance': Operation<
    '/security/dataSecurityAndGovernance',
    'patch'
  >;
  'POST /security/dataSecurityAndGovernance/processContentAsync': Operation<
    '/security/dataSecurityAndGovernance/processContentAsync',
    'post'
  >;
}

/**
 * `DELETE /security/dataSecurityAndGovernance`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/dataSecurityAndGovernance']['response']> {
  return {
    method: 'delete',
    path: '/security/dataSecurityAndGovernance',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/dataSecurityAndGovernance`
 *
 */
export function get(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance']['parameters']
): EndpointRequest<IEndpoints['GET /security/dataSecurityAndGovernance']['response']> {
  return {
    method: 'get',
    path: '/security/dataSecurityAndGovernance',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/dataSecurityAndGovernance`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataSecurityAndGovernance']['body']
): EndpointRequest<IEndpoints['PATCH /security/dataSecurityAndGovernance']['response']> {
  return {
    method: 'patch',
    path: '/security/dataSecurityAndGovernance',
    body,
  };
}

export const processContentAsync = {
  /**
   * `POST /security/dataSecurityAndGovernance/processContentAsync`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/dataSecurityAndGovernance/processContentAsync']['body']
  ): EndpointRequest<
    IEndpoints['POST /security/dataSecurityAndGovernance/processContentAsync']['response']
  > {
    return {
      method: 'post',
      path: '/security/dataSecurityAndGovernance/processContentAsync',
      body,
    };
  },
};
