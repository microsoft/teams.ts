export * as computeRightsAndInheritance from './computeRightsAndInheritance';
export * as rights from './rights';
export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /security/dataSecurityAndGovernance/sensitivityLabels': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels',
    'get'
  >;
  'GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /security/dataSecurityAndGovernance/sensitivityLabels': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels',
    'post'
  >;
}

/**
 * `DELETE /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/dataSecurityAndGovernance/sensitivityLabels`
 *
 * List the sensitivity labels available for the entire tenant.
 */
export function list(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels']['response']
> {
  return {
    method: 'get',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels',
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
 * `GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 * Get a sensitivity label available for the entire tenant.
 */
export function get(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/dataSecurityAndGovernance/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels']['body'],
  params?: IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels']['response']
> {
  return {
    method: 'post',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels',
    paramDefs: [],
    params,
    body,
  };
}
