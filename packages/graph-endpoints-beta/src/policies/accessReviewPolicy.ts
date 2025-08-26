import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/accessReviewPolicy': Operation<'/policies/accessReviewPolicy', 'delete'>;
  'GET /policies/accessReviewPolicy': Operation<'/policies/accessReviewPolicy', 'get'>;
  'PATCH /policies/accessReviewPolicy': Operation<'/policies/accessReviewPolicy', 'patch'>;
}

/**
 * `DELETE /policies/accessReviewPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/accessReviewPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /policies/accessReviewPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/accessReviewPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /policies/accessReviewPolicy`
 *
 * Read the properties and relationships of an accessReviewPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/accessReviewPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/accessReviewPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/accessReviewPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/accessReviewPolicy`
 *
 * Update the properties of an accessReviewPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/accessReviewPolicy']['body'],
  params?: IEndpoints['PATCH /policies/accessReviewPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /policies/accessReviewPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/accessReviewPolicy',
    paramDefs: [],
    params,
    body,
  };
}
