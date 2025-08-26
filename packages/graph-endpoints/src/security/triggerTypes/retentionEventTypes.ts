import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/triggerTypes/retentionEventTypes/{retentionEventType-id}': Operation<
    '/security/triggerTypes/retentionEventTypes/{retentionEventType-id}',
    'delete'
  >;
  'GET /security/triggerTypes/retentionEventTypes': Operation<
    '/security/triggerTypes/retentionEventTypes',
    'get'
  >;
  'GET /security/triggerTypes/retentionEventTypes/{retentionEventType-id}': Operation<
    '/security/triggerTypes/retentionEventTypes/{retentionEventType-id}',
    'get'
  >;
  'PATCH /security/triggerTypes/retentionEventTypes/{retentionEventType-id}': Operation<
    '/security/triggerTypes/retentionEventTypes/{retentionEventType-id}',
    'patch'
  >;
  'POST /security/triggerTypes/retentionEventTypes': Operation<
    '/security/triggerTypes/retentionEventTypes',
    'post'
  >;
}

/**
 * `DELETE /security/triggerTypes/retentionEventTypes/{retentionEventType-id}`
 *
 * Delete a retentionEventType object.
 */
export function del(
  params?: IEndpoints['DELETE /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/triggerTypes/retentionEventTypes/{retentionEventType-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'retentionEventType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/triggerTypes/retentionEventTypes`
 *
 * Get a list of the retentionEventType objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/triggerTypes/retentionEventTypes']['parameters']
): EndpointRequest<IEndpoints['GET /security/triggerTypes/retentionEventTypes']['response']> {
  return {
    method: 'get',
    path: '/security/triggerTypes/retentionEventTypes',
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
 * `GET /security/triggerTypes/retentionEventTypes/{retentionEventType-id}`
 *
 * Read the properties and relationships of a retentionEventType object.
 */
export function get(
  params?: IEndpoints['GET /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/triggerTypes/retentionEventTypes/{retentionEventType-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionEventType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/triggerTypes/retentionEventTypes/{retentionEventType-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['body'],
  params?: IEndpoints['PATCH /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/triggerTypes/retentionEventTypes/{retentionEventType-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/triggerTypes/retentionEventTypes/{retentionEventType-id}',
    paramDefs: [{ name: 'retentionEventType-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/triggerTypes/retentionEventTypes`
 *
 * Create a new retentionEventType object.
 */
export function create(
  body: IEndpoints['POST /security/triggerTypes/retentionEventTypes']['body'],
  params?: IEndpoints['POST /security/triggerTypes/retentionEventTypes']['parameters']
): EndpointRequest<IEndpoints['POST /security/triggerTypes/retentionEventTypes']['response']> {
  return {
    method: 'post',
    path: '/security/triggerTypes/retentionEventTypes',
    paramDefs: [],
    params,
    body,
  };
}
