export * as computeRightsAndInheritance from './computeRightsAndInheritance';
export * as evaluate from './evaluate';
export * as rights from './rights';
export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels',
    'get'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels']['body'],
  params?: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
