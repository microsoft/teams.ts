export * as artifact from './artifact';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}': Operation<
    '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/intelligenceProfileIndicators': Operation<
    '/security/threatIntelligence/intelligenceProfileIndicators',
    'get'
  >;
  'GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}': Operation<
    '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}': Operation<
    '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/intelligenceProfileIndicators': Operation<
    '/security/threatIntelligence/intelligenceProfileIndicators',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'intelligenceProfileIndicator-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/intelligenceProfileIndicators`
 *
 * Read the properties and relationships of a intelligenceProfileIndicator object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/intelligenceProfileIndicators']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/intelligenceProfileIndicators']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/intelligenceProfileIndicators',
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
 * `GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}`
 *
 * Read the properties and relationships of a intelligenceProfileIndicator object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'intelligenceProfileIndicator-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator-id}',
    paramDefs: [{ name: 'intelligenceProfileIndicator-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/intelligenceProfileIndicators`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/intelligenceProfileIndicators']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/intelligenceProfileIndicators']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/threatIntelligence/intelligenceProfileIndicators']['response']
> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/intelligenceProfileIndicators',
    paramDefs: [],
    params,
    body,
  };
}
