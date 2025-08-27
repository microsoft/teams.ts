import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /accessReviewDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviewDecisions/{accessReviewDecision-id}',
    'delete'
  >;
  'GET /accessReviewDecisions': Operation<'/accessReviewDecisions', 'get'>;
  'GET /accessReviewDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviewDecisions/{accessReviewDecision-id}',
    'get'
  >;
  'PATCH /accessReviewDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviewDecisions/{accessReviewDecision-id}',
    'patch'
  >;
  'POST /accessReviewDecisions': Operation<'/accessReviewDecisions', 'post'>;
}

/**
 * `DELETE /accessReviewDecisions/{accessReviewDecision-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /accessReviewDecisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /accessReviewDecisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/accessReviewDecisions/{accessReviewDecision-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReviewDecision-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /accessReviewDecisions`
 *
 */
export function list(
  params?: IEndpoints['GET /accessReviewDecisions']['parameters']
): EndpointRequest<IEndpoints['GET /accessReviewDecisions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviewDecisions',
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
 * `GET /accessReviewDecisions/{accessReviewDecision-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /accessReviewDecisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<IEndpoints['GET /accessReviewDecisions/{accessReviewDecision-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviewDecisions/{accessReviewDecision-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReviewDecision-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /accessReviewDecisions/{accessReviewDecision-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /accessReviewDecisions/{accessReviewDecision-id}']['body'],
  params?: IEndpoints['PATCH /accessReviewDecisions/{accessReviewDecision-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /accessReviewDecisions/{accessReviewDecision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/accessReviewDecisions/{accessReviewDecision-id}',
    paramDefs: [{ name: 'accessReviewDecision-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /accessReviewDecisions`
 *
 */
export function create(
  body: IEndpoints['POST /accessReviewDecisions']['body'],
  params?: IEndpoints['POST /accessReviewDecisions']['parameters']
): EndpointRequest<IEndpoints['POST /accessReviewDecisions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviewDecisions',
    paramDefs: [],
    params,
    body,
  };
}
