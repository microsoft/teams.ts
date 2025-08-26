export * as parent from './parent';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /security/informationProtection/sensitivityLabels': Operation<
    '/security/informationProtection/sensitivityLabels',
    'get'
  >;
  'GET /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /security/informationProtection/sensitivityLabels': Operation<
    '/security/informationProtection/sensitivityLabels',
    'post'
  >;
}

/**
 * `DELETE /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/informationProtection/sensitivityLabels`
 *
 * Read the Microsoft Purview Information Protection labels for the user or organization.
 */
export function list(
  params?: IEndpoints['GET /security/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/informationProtection/sensitivityLabels',
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
 * `GET /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 * Read the Microsoft Purview Information Protection labels for the user or organization.
 */
export function get(
  params?: IEndpoints['GET /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/informationProtection/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /security/informationProtection/sensitivityLabels']['body'],
  params?: IEndpoints['POST /security/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/informationProtection/sensitivityLabels',
    paramDefs: [],
    params,
    body,
  };
}
