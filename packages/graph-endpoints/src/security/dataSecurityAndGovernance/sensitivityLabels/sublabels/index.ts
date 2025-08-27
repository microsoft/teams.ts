export * as computeRightsAndInheritance from './computeRightsAndInheritance';
export * as rights from './rights';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'delete'
  >;
  'GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'get'
  >;
  'GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'get'
  >;
  'PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'patch'
  >;
  'POST /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'post'
  >;
}

/**
 * `DELETE /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sensitivityLabel-id', in: 'path' },
      { name: 'sensitivityLabel-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function list(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    method: 'get',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function get(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    method: 'get',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
      { name: 'sensitivityLabel-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['body'],
  params?: IEndpoints['PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: [
      { name: 'sensitivityLabel-id', in: 'path' },
      { name: 'sensitivityLabel-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function create(
  body: IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['body'],
  params?: IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    method: 'post',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}
