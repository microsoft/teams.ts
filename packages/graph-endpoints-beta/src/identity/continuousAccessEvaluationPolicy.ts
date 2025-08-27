import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/continuousAccessEvaluationPolicy': Operation<
    '/identity/continuousAccessEvaluationPolicy',
    'delete'
  >;
  'GET /identity/continuousAccessEvaluationPolicy': Operation<
    '/identity/continuousAccessEvaluationPolicy',
    'get'
  >;
  'PATCH /identity/continuousAccessEvaluationPolicy': Operation<
    '/identity/continuousAccessEvaluationPolicy',
    'patch'
  >;
}

/**
 * `DELETE /identity/continuousAccessEvaluationPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identity/continuousAccessEvaluationPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /identity/continuousAccessEvaluationPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/continuousAccessEvaluationPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /identity/continuousAccessEvaluationPolicy`
 *
 * Read the properties and relationships of a continuousAccessEvaluationPolicy object.
 */
export function get(
  params?: IEndpoints['GET /identity/continuousAccessEvaluationPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /identity/continuousAccessEvaluationPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/continuousAccessEvaluationPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/continuousAccessEvaluationPolicy`
 *
 * Update the properties of a continuousAccessEvaluationPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /identity/continuousAccessEvaluationPolicy']['body'],
  params?: IEndpoints['PATCH /identity/continuousAccessEvaluationPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /identity/continuousAccessEvaluationPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/continuousAccessEvaluationPolicy',
    paramDefs: [],
    params,
    body,
  };
}
