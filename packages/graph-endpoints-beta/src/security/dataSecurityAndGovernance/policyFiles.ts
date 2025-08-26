import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}': Operation<
    '/security/dataSecurityAndGovernance/policyFiles/{policyFile-id}',
    'delete'
  >;
  'GET /security/dataSecurityAndGovernance/policyFiles': Operation<
    '/security/dataSecurityAndGovernance/policyFiles',
    'get'
  >;
  'GET /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}': Operation<
    '/security/dataSecurityAndGovernance/policyFiles/{policyFile-id}',
    'get'
  >;
  'PATCH /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}': Operation<
    '/security/dataSecurityAndGovernance/policyFiles/{policyFile-id}',
    'patch'
  >;
  'POST /security/dataSecurityAndGovernance/policyFiles': Operation<
    '/security/dataSecurityAndGovernance/policyFiles',
    'post'
  >;
}

/**
 * `DELETE /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/dataSecurityAndGovernance/policyFiles/{policyFile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'policyFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/dataSecurityAndGovernance/policyFiles`
 *
 */
export function list(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance/policyFiles']['parameters']
): EndpointRequest<IEndpoints['GET /security/dataSecurityAndGovernance/policyFiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/dataSecurityAndGovernance/policyFiles',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/dataSecurityAndGovernance/policyFiles/{policyFile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'policyFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['body'],
  params?: IEndpoints['PATCH /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/dataSecurityAndGovernance/policyFiles/{policyFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/dataSecurityAndGovernance/policyFiles/{policyFile-id}',
    paramDefs: [{ name: 'policyFile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/dataSecurityAndGovernance/policyFiles`
 *
 */
export function create(
  body: IEndpoints['POST /security/dataSecurityAndGovernance/policyFiles']['body'],
  params?: IEndpoints['POST /security/dataSecurityAndGovernance/policyFiles']['parameters']
): EndpointRequest<IEndpoints['POST /security/dataSecurityAndGovernance/policyFiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/dataSecurityAndGovernance/policyFiles',
    paramDefs: [],
    params,
    body,
  };
}
