import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}': Operation<
    '/users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    'delete'
  >;
  'GET /users/{user-id}/inferenceClassification/overrides': Operation<
    '/users/{user-id}/inferenceClassification/overrides',
    'get'
  >;
  'GET /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}': Operation<
    '/users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    'get'
  >;
  'PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}': Operation<
    '/users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    'patch'
  >;
  'POST /users/{user-id}/inferenceClassification/overrides': Operation<
    '/users/{user-id}/inferenceClassification/overrides',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'inferenceClassificationOverride-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/inferenceClassification/overrides`
 *
 * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/inferenceClassification/overrides']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/inferenceClassification/overrides']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/inferenceClassification/overrides',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}`
 *
 * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'inferenceClassificationOverride-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'inferenceClassificationOverride-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/inferenceClassification/overrides`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/inferenceClassification/overrides']['body'],
  params?: IEndpoints['POST /users/{user-id}/inferenceClassification/overrides']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/inferenceClassification/overrides']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/inferenceClassification/overrides',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
