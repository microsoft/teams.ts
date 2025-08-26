export * as retentionEventType from './retentionEventType';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/triggers/retentionEvents/{retentionEvent-id}': Operation<
    '/security/triggers/retentionEvents/{retentionEvent-id}',
    'delete'
  >;
  'GET /security/triggers/retentionEvents': Operation<'/security/triggers/retentionEvents', 'get'>;
  'GET /security/triggers/retentionEvents/{retentionEvent-id}': Operation<
    '/security/triggers/retentionEvents/{retentionEvent-id}',
    'get'
  >;
  'PATCH /security/triggers/retentionEvents/{retentionEvent-id}': Operation<
    '/security/triggers/retentionEvents/{retentionEvent-id}',
    'patch'
  >;
  'POST /security/triggers/retentionEvents': Operation<
    '/security/triggers/retentionEvents',
    'post'
  >;
}

/**
 * `DELETE /security/triggers/retentionEvents/{retentionEvent-id}`
 *
 * Delete a retentionEvent object.
 */
export function del(
  params?: IEndpoints['DELETE /security/triggers/retentionEvents/{retentionEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/triggers/retentionEvents/{retentionEvent-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/triggers/retentionEvents/{retentionEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'retentionEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/triggers/retentionEvents`
 *
 * Get a list of the retentionEvent objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/triggers/retentionEvents']['parameters']
): EndpointRequest<IEndpoints['GET /security/triggers/retentionEvents']['response']> {
  return {
    method: 'get',
    path: '/security/triggers/retentionEvents',
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
 * `GET /security/triggers/retentionEvents/{retentionEvent-id}`
 *
 * Read the properties and relationships of a retentionEvent object.
 */
export function get(
  params?: IEndpoints['GET /security/triggers/retentionEvents/{retentionEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/triggers/retentionEvents/{retentionEvent-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/triggers/retentionEvents/{retentionEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'retentionEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/triggers/retentionEvents/{retentionEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/triggers/retentionEvents/{retentionEvent-id}']['body'],
  params?: IEndpoints['PATCH /security/triggers/retentionEvents/{retentionEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/triggers/retentionEvents/{retentionEvent-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/triggers/retentionEvents/{retentionEvent-id}',
    paramDefs: [{ name: 'retentionEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/triggers/retentionEvents`
 *
 * Create a new retentionEvent object.
 */
export function create(
  body: IEndpoints['POST /security/triggers/retentionEvents']['body'],
  params?: IEndpoints['POST /security/triggers/retentionEvents']['parameters']
): EndpointRequest<IEndpoints['POST /security/triggers/retentionEvents']['response']> {
  return {
    method: 'post',
    path: '/security/triggers/retentionEvents',
    paramDefs: [],
    params,
    body,
  };
}
