export * as computeRightsAndInheritance from './computeRightsAndInheritance';
export * as evaluate from './evaluate';
export * as rights from './rights';
export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection/sensitivityLabels': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels',
    'get'
  >;
  'GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /sites/{site-id}/informationProtection/sensitivityLabels': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/sensitivityLabels`
 *
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/informationProtection/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
