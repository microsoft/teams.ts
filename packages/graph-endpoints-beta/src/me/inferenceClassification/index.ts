export * as overrides from './overrides';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/inferenceClassification': Operation<'/me/inferenceClassification', 'get'>;
  'PATCH /me/inferenceClassification': Operation<'/me/inferenceClassification', 'patch'>;
}

/**
 * `GET /me/inferenceClassification`
 *
 * Relevance classification of the user&#x27;s messages based on explicit designations that override inferred relevance or importance.
 */
export function get(
  params?: IEndpoints['GET /me/inferenceClassification']['parameters']
): EndpointRequest<IEndpoints['GET /me/inferenceClassification']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/inferenceClassification',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/inferenceClassification`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/inferenceClassification']['body'],
  params?: IEndpoints['PATCH /me/inferenceClassification']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/inferenceClassification']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/inferenceClassification',
    paramDefs: [],
    params,
    body,
  };
}
