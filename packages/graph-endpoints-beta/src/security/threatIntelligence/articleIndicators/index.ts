export * as artifact from './artifact';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/articleIndicators/{articleIndicator-id}': Operation<
    '/security/threatIntelligence/articleIndicators/{articleIndicator-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/articleIndicators': Operation<
    '/security/threatIntelligence/articleIndicators',
    'get'
  >;
  'GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}': Operation<
    '/security/threatIntelligence/articleIndicators/{articleIndicator-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/articleIndicators/{articleIndicator-id}': Operation<
    '/security/threatIntelligence/articleIndicators/{articleIndicator-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/articleIndicators': Operation<
    '/security/threatIntelligence/articleIndicators',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/articleIndicators/{articleIndicator-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/articleIndicators/{articleIndicator-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'articleIndicator-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/articleIndicators`
 *
 * Read the properties and relationships of an articleIndicator object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/articleIndicators']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/articleIndicators']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/articleIndicators',
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
 * `GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}`
 *
 * Read the properties and relationships of an articleIndicator object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/articleIndicators/{articleIndicator-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'articleIndicator-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/articleIndicators/{articleIndicator-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/articleIndicators/{articleIndicator-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/articleIndicators/{articleIndicator-id}',
    paramDefs: [{ name: 'articleIndicator-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/articleIndicators`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/articleIndicators']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/articleIndicators']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/articleIndicators']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/articleIndicators',
    paramDefs: [],
    params,
    body,
  };
}
