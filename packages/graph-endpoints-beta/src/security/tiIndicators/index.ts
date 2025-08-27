export * as deleteTiIndicators from './deleteTiIndicators';
export * as deleteTiIndicatorsByExternalId from './deleteTiIndicatorsByExternalId';
export * as submitTiIndicators from './submitTiIndicators';
export * as updateTiIndicators from './updateTiIndicators';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/tiIndicators/{tiIndicator-id}': Operation<
    '/security/tiIndicators/{tiIndicator-id}',
    'delete'
  >;
  'GET /security/tiIndicators': Operation<'/security/tiIndicators', 'get'>;
  'GET /security/tiIndicators/{tiIndicator-id}': Operation<
    '/security/tiIndicators/{tiIndicator-id}',
    'get'
  >;
  'PATCH /security/tiIndicators/{tiIndicator-id}': Operation<
    '/security/tiIndicators/{tiIndicator-id}',
    'patch'
  >;
  'POST /security/tiIndicators': Operation<'/security/tiIndicators', 'post'>;
}

/**
 * `DELETE /security/tiIndicators/{tiIndicator-id}`
 *
 * Delete a tiIndicator object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /security/tiIndicators/{tiIndicator-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/tiIndicators/{tiIndicator-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/tiIndicators/{tiIndicator-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'tiIndicator-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/tiIndicators`
 *
 * Retrieve a list of tiIndicator objects.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /security/tiIndicators']['parameters']
): EndpointRequest<IEndpoints['GET /security/tiIndicators']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/tiIndicators',
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
 * `GET /security/tiIndicators/{tiIndicator-id}`
 *
 * Retrieve the properties and relationships of a tiIndicator object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /security/tiIndicators/{tiIndicator-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/tiIndicators/{tiIndicator-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/tiIndicators/{tiIndicator-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tiIndicator-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/tiIndicators/{tiIndicator-id}`
 *
 * Update the properties of a tiIndicator object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /security/tiIndicators/{tiIndicator-id}']['body'],
  params?: IEndpoints['PATCH /security/tiIndicators/{tiIndicator-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/tiIndicators/{tiIndicator-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/tiIndicators/{tiIndicator-id}',
    paramDefs: [{ name: 'tiIndicator-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/tiIndicators`
 *
 * Create a new tiIndicator object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /security/tiIndicators']['body'],
  params?: IEndpoints['POST /security/tiIndicators']['parameters']
): EndpointRequest<IEndpoints['POST /security/tiIndicators']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/tiIndicators',
    paramDefs: [],
    params,
    body,
  };
}
