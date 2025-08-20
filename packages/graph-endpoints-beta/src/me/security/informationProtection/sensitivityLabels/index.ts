export * as parent from './parent';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /me/security/informationProtection/sensitivityLabels': Operation<
    '/me/security/informationProtection/sensitivityLabels',
    'get'
  >;
  'GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /me/security/informationProtection/sensitivityLabels': Operation<
    '/me/security/informationProtection/sensitivityLabels',
    'post'
  >;
}

/**
 * `DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/security/informationProtection/sensitivityLabels`
 *
 * Read the Microsoft Purview Information Protection labels for the user or organization.
 */
export function list(
  params?: IEndpoints['GET /me/security/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/security/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/security/informationProtection/sensitivityLabels',
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
 * `GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 * Read the Microsoft Purview Information Protection labels for the user or organization.
 */
export function get(
  params?: IEndpoints['GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/security/informationProtection/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /me/security/informationProtection/sensitivityLabels']['body'],
  params?: IEndpoints['POST /me/security/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/security/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/security/informationProtection/sensitivityLabels',
    paramDefs: [],
    params,
    body,
  };
}
