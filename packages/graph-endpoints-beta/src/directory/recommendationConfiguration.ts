import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/recommendationConfiguration': Operation<
    '/directory/recommendationConfiguration',
    'delete'
  >;
  'GET /directory/recommendationConfiguration': Operation<
    '/directory/recommendationConfiguration',
    'get'
  >;
  'PATCH /directory/recommendationConfiguration': Operation<
    '/directory/recommendationConfiguration',
    'patch'
  >;
}

/**
 * `DELETE /directory/recommendationConfiguration`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/recommendationConfiguration']['parameters']
): EndpointRequest<IEndpoints['DELETE /directory/recommendationConfiguration']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/recommendationConfiguration',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /directory/recommendationConfiguration`
 *
 * Read the properties and relationships of a recommendationConfiguration object.
 */
export function get(
  params?: IEndpoints['GET /directory/recommendationConfiguration']['parameters']
): EndpointRequest<IEndpoints['GET /directory/recommendationConfiguration']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/recommendationConfiguration',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/recommendationConfiguration`
 *
 * Update the properties of a recommendationConfiguration object.
 */
export function update(
  body: IEndpoints['PATCH /directory/recommendationConfiguration']['body'],
  params?: IEndpoints['PATCH /directory/recommendationConfiguration']['parameters']
): EndpointRequest<IEndpoints['PATCH /directory/recommendationConfiguration']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/recommendationConfiguration',
    paramDefs: [],
    params,
    body,
  };
}
