export * as computeRightsAndInheritance from './computeRightsAndInheritance';
export * as rights from './rights';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'delete'
  >;
  'GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'get'
  >;
  'GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'get'
  >;
  'PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'patch'
  >;
  'POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'post'
  >;
}

/**
 * `DELETE /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sensitivityLabel-id', in: 'path' },
      { name: 'sensitivityLabel-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function list(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    method: 'get',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels',
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
 * `GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    method: 'get',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
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
 * `PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['body'],
  params?: IEndpoints['PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: [
      { name: 'sensitivityLabel-id', in: 'path' },
      { name: 'sensitivityLabel-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function create(
  body: IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['body'],
  params?: IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    method: 'post',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}
