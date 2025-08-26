import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels/authorities/{authorityTemplate-id}': Operation<
    '/security/labels/authorities/{authorityTemplate-id}',
    'delete'
  >;
  'GET /security/labels/authorities': Operation<'/security/labels/authorities', 'get'>;
  'GET /security/labels/authorities/{authorityTemplate-id}': Operation<
    '/security/labels/authorities/{authorityTemplate-id}',
    'get'
  >;
  'PATCH /security/labels/authorities/{authorityTemplate-id}': Operation<
    '/security/labels/authorities/{authorityTemplate-id}',
    'patch'
  >;
  'POST /security/labels/authorities': Operation<'/security/labels/authorities', 'post'>;
}

/**
 * `DELETE /security/labels/authorities/{authorityTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/labels/authorities/{authorityTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/labels/authorities/{authorityTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/labels/authorities/{authorityTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authorityTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/labels/authorities`
 *
 * Get a list of the authorityTemplate objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/labels/authorities']['parameters']
): EndpointRequest<IEndpoints['GET /security/labels/authorities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/authorities',
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
 * `GET /security/labels/authorities/{authorityTemplate-id}`
 *
 * Read the properties and relationships of a authorityTemplate object.
 */
export function get(
  params?: IEndpoints['GET /security/labels/authorities/{authorityTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/authorities/{authorityTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/authorities/{authorityTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authorityTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/labels/authorities/{authorityTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/labels/authorities/{authorityTemplate-id}']['body'],
  params?: IEndpoints['PATCH /security/labels/authorities/{authorityTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/labels/authorities/{authorityTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/labels/authorities/{authorityTemplate-id}',
    paramDefs: [{ name: 'authorityTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/labels/authorities`
 *
 * Create a new authorityTemplate object.
 */
export function create(
  body: IEndpoints['POST /security/labels/authorities']['body'],
  params?: IEndpoints['POST /security/labels/authorities']['parameters']
): EndpointRequest<IEndpoints['POST /security/labels/authorities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/labels/authorities',
    paramDefs: [],
    params,
    body,
  };
}
