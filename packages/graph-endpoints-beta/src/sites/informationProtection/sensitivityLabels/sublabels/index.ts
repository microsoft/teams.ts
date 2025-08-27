export * as computeRightsAndInheritance from './computeRightsAndInheritance';
export * as evaluate from './evaluate';
export * as rights from './rights';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'get'
  >;
  'GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'patch'
  >;
  'POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
      { name: 'sensitivityLabel-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels',
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
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
      { name: 'sensitivityLabel-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
      { name: 'sensitivityLabel-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
    body,
  };
}
