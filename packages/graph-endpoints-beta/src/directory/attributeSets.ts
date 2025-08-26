import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/attributeSets/{attributeSet-id}': Operation<
    '/directory/attributeSets/{attributeSet-id}',
    'delete'
  >;
  'GET /directory/attributeSets': Operation<'/directory/attributeSets', 'get'>;
  'GET /directory/attributeSets/{attributeSet-id}': Operation<
    '/directory/attributeSets/{attributeSet-id}',
    'get'
  >;
  'PATCH /directory/attributeSets/{attributeSet-id}': Operation<
    '/directory/attributeSets/{attributeSet-id}',
    'patch'
  >;
  'POST /directory/attributeSets': Operation<'/directory/attributeSets', 'post'>;
}

/**
 * `DELETE /directory/attributeSets/{attributeSet-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/attributeSets/{attributeSet-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /directory/attributeSets/{attributeSet-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/attributeSets/{attributeSet-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'attributeSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/attributeSets`
 *
 * Get a list of the attributeSet objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /directory/attributeSets']['parameters']
): EndpointRequest<IEndpoints['GET /directory/attributeSets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/attributeSets',
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
 * `GET /directory/attributeSets/{attributeSet-id}`
 *
 * Read the properties and relationships of an attributeSet object.
 */
export function get(
  params?: IEndpoints['GET /directory/attributeSets/{attributeSet-id}']['parameters']
): EndpointRequest<IEndpoints['GET /directory/attributeSets/{attributeSet-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/attributeSets/{attributeSet-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'attributeSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/attributeSets/{attributeSet-id}`
 *
 * Update the properties of an attributeSet object.
 */
export function update(
  body: IEndpoints['PATCH /directory/attributeSets/{attributeSet-id}']['body'],
  params?: IEndpoints['PATCH /directory/attributeSets/{attributeSet-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /directory/attributeSets/{attributeSet-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/attributeSets/{attributeSet-id}',
    paramDefs: [{ name: 'attributeSet-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/attributeSets`
 *
 * Create a new attributeSet object.
 */
export function create(
  body: IEndpoints['POST /directory/attributeSets']['body'],
  params?: IEndpoints['POST /directory/attributeSets']['parameters']
): EndpointRequest<IEndpoints['POST /directory/attributeSets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/attributeSets',
    paramDefs: [],
    params,
    body,
  };
}
