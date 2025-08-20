export * as overrides from './overrides';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/inferenceClassification': Operation<
    '/users/{user-id}/inferenceClassification',
    'get'
  >;
  'PATCH /users/{user-id}/inferenceClassification': Operation<
    '/users/{user-id}/inferenceClassification',
    'patch'
  >;
}

/**
 * `GET /users/{user-id}/inferenceClassification`
 *
 * Relevance classification of the user&#x27;s messages based on explicit designations that override inferred relevance or importance.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/inferenceClassification']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/inferenceClassification']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/inferenceClassification',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/inferenceClassification`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/inferenceClassification']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/inferenceClassification']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/inferenceClassification']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/inferenceClassification',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
