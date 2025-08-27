export * as computeRightsAndInheritance from './computeRightsAndInheritance';
export * as evaluate from './evaluate';
export * as rights from './rights';
export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /me/informationProtection/sensitivityLabels': Operation<
    '/me/informationProtection/sensitivityLabels',
    'get'
  >;
  'GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /me/informationProtection/sensitivityLabels': Operation<
    '/me/informationProtection/sensitivityLabels',
    'post'
  >;
}

/**
 * `DELETE /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/informationProtection/sensitivityLabels`
 *
 */
export function list(
  params?: IEndpoints['GET /me/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<IEndpoints['GET /me/informationProtection/sensitivityLabels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/sensitivityLabels',
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
 * `GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/informationProtection/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/sensitivityLabels']['body'],
  params?: IEndpoints['POST /me/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<IEndpoints['POST /me/informationProtection/sensitivityLabels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/sensitivityLabels',
    paramDefs: [],
    params,
    body,
  };
}
