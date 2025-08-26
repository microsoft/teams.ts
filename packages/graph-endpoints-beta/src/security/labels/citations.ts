import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels/citations/{citationTemplate-id}': Operation<
    '/security/labels/citations/{citationTemplate-id}',
    'delete'
  >;
  'GET /security/labels/citations': Operation<'/security/labels/citations', 'get'>;
  'GET /security/labels/citations/{citationTemplate-id}': Operation<
    '/security/labels/citations/{citationTemplate-id}',
    'get'
  >;
  'PATCH /security/labels/citations/{citationTemplate-id}': Operation<
    '/security/labels/citations/{citationTemplate-id}',
    'patch'
  >;
  'POST /security/labels/citations': Operation<'/security/labels/citations', 'post'>;
}

/**
 * `DELETE /security/labels/citations/{citationTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/labels/citations/{citationTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/labels/citations/{citationTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/labels/citations/{citationTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'citationTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/labels/citations`
 *
 * Get a list of the citationTemplate objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/labels/citations']['parameters']
): EndpointRequest<IEndpoints['GET /security/labels/citations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/citations',
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
 * `GET /security/labels/citations/{citationTemplate-id}`
 *
 * Read the properties and relationships of a citationTemplate object.
 */
export function get(
  params?: IEndpoints['GET /security/labels/citations/{citationTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/labels/citations/{citationTemplate-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/citations/{citationTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'citationTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/labels/citations/{citationTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/labels/citations/{citationTemplate-id}']['body'],
  params?: IEndpoints['PATCH /security/labels/citations/{citationTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/labels/citations/{citationTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/labels/citations/{citationTemplate-id}',
    paramDefs: [{ name: 'citationTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/labels/citations`
 *
 * Create a new citationTemplate object.
 */
export function create(
  body: IEndpoints['POST /security/labels/citations']['body'],
  params?: IEndpoints['POST /security/labels/citations']['parameters']
): EndpointRequest<IEndpoints['POST /security/labels/citations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/labels/citations',
    paramDefs: [],
    params,
    body,
  };
}
