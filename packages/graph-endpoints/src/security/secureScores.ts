import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /security/secureScores/{secureScore-id}': Operation<
    '/security/secureScores/{secureScore-id}',
    'delete'
  >;
  'GET /security/secureScores': Operation<'/security/secureScores', 'get'>;
  'GET /security/secureScores/{secureScore-id}': Operation<
    '/security/secureScores/{secureScore-id}',
    'get'
  >;
  'PATCH /security/secureScores/{secureScore-id}': Operation<
    '/security/secureScores/{secureScore-id}',
    'patch'
  >;
  'POST /security/secureScores': Operation<'/security/secureScores', 'post'>;
}

/**
 * `DELETE /security/secureScores/{secureScore-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/secureScores/{secureScore-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/secureScores/{secureScore-id}']['response']> {
  return {
    method: 'delete',
    path: '/security/secureScores/{secureScore-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'secureScore-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/secureScores`
 *
 * Retrieve a list of secureScore objects.
 */
export function list(
  params?: IEndpoints['GET /security/secureScores']['parameters']
): EndpointRequest<IEndpoints['GET /security/secureScores']['response']> {
  return {
    method: 'get',
    path: '/security/secureScores',
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
 * `GET /security/secureScores/{secureScore-id}`
 *
 * Retrieve the properties and relationships of a secureScore object.
 */
export function get(
  params?: IEndpoints['GET /security/secureScores/{secureScore-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/secureScores/{secureScore-id}']['response']> {
  return {
    method: 'get',
    path: '/security/secureScores/{secureScore-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'secureScore-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/secureScores/{secureScore-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/secureScores/{secureScore-id}']['body'],
  params?: IEndpoints['PATCH /security/secureScores/{secureScore-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/secureScores/{secureScore-id}']['response']> {
  return {
    method: 'patch',
    path: '/security/secureScores/{secureScore-id}',
    paramDefs: [{ name: 'secureScore-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/secureScores`
 *
 */
export function create(
  body: IEndpoints['POST /security/secureScores']['body'],
  params?: IEndpoints['POST /security/secureScores']['parameters']
): EndpointRequest<IEndpoints['POST /security/secureScores']['response']> {
  return {
    method: 'post',
    path: '/security/secureScores',
    paramDefs: [],
    params,
    body,
  };
}
