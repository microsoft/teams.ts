import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /search/qnas/{qna-id}': Operation<'/search/qnas/{qna-id}', 'delete'>;
  'GET /search/qnas': Operation<'/search/qnas', 'get'>;
  'GET /search/qnas/{qna-id}': Operation<'/search/qnas/{qna-id}', 'get'>;
  'PATCH /search/qnas/{qna-id}': Operation<'/search/qnas/{qna-id}', 'patch'>;
  'POST /search/qnas': Operation<'/search/qnas', 'post'>;
}

/**
 * `DELETE /search/qnas/{qna-id}`
 *
 * Delete a qna object.
 */
export function del(
  params?: IEndpoints['DELETE /search/qnas/{qna-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /search/qnas/{qna-id}']['response']> {
  return {
    method: 'delete',
    path: '/search/qnas/{qna-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'qna-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /search/qnas`
 *
 * Get a list of the qna objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /search/qnas']['parameters']
): EndpointRequest<IEndpoints['GET /search/qnas']['response']> {
  return {
    method: 'get',
    path: '/search/qnas',
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
 * `GET /search/qnas/{qna-id}`
 *
 * Read the properties and relationships of a qna object.
 */
export function get(
  params?: IEndpoints['GET /search/qnas/{qna-id}']['parameters']
): EndpointRequest<IEndpoints['GET /search/qnas/{qna-id}']['response']> {
  return {
    method: 'get',
    path: '/search/qnas/{qna-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'qna-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /search/qnas/{qna-id}`
 *
 * Update the properties of a qna object.
 */
export function update(
  body: IEndpoints['PATCH /search/qnas/{qna-id}']['body'],
  params?: IEndpoints['PATCH /search/qnas/{qna-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /search/qnas/{qna-id}']['response']> {
  return {
    method: 'patch',
    path: '/search/qnas/{qna-id}',
    paramDefs: [{ name: 'qna-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /search/qnas`
 *
 * Create a new qna object.
 */
export function create(
  body: IEndpoints['POST /search/qnas']['body'],
  params?: IEndpoints['POST /search/qnas']['parameters']
): EndpointRequest<IEndpoints['POST /search/qnas']['response']> {
  return {
    method: 'post',
    path: '/search/qnas',
    paramDefs: [],
    params,
    body,
  };
}
