export * as parent from './parent';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /users/{user-id}/security/informationProtection/sensitivityLabels': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels',
    'get'
  >;
  'GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /users/{user-id}/security/informationProtection/sensitivityLabels': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/security/informationProtection/sensitivityLabels`
 *
 * Get a list of sensitivityLabel objects associated with a user or organization.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/security/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/security/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels',
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
 * `GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 * Read the Microsoft Purview Information Protection labels for the user or organization.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
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
 * `PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/security/informationProtection/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/security/informationProtection/sensitivityLabels']['body'],
  params?: IEndpoints['POST /users/{user-id}/security/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/security/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
