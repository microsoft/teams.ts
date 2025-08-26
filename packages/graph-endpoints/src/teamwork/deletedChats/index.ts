export * as undoDelete from './undoDelete';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedChats/{deletedChat-id}': Operation<
    '/teamwork/deletedChats/{deletedChat-id}',
    'delete'
  >;
  'GET /teamwork/deletedChats': Operation<'/teamwork/deletedChats', 'get'>;
  'GET /teamwork/deletedChats/{deletedChat-id}': Operation<
    '/teamwork/deletedChats/{deletedChat-id}',
    'get'
  >;
  'PATCH /teamwork/deletedChats/{deletedChat-id}': Operation<
    '/teamwork/deletedChats/{deletedChat-id}',
    'patch'
  >;
  'POST /teamwork/deletedChats': Operation<'/teamwork/deletedChats', 'post'>;
}

/**
 * `DELETE /teamwork/deletedChats/{deletedChat-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedChats/{deletedChat-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teamwork/deletedChats/{deletedChat-id}']['response']> {
  return {
    method: 'delete',
    path: '/teamwork/deletedChats/{deletedChat-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deletedChat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedChats`
 *
 * Read the properties and relationships of a deletedChat object.
 */
export function list(
  params?: IEndpoints['GET /teamwork/deletedChats']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/deletedChats']['response']> {
  return {
    method: 'get',
    path: '/teamwork/deletedChats',
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
 * `GET /teamwork/deletedChats/{deletedChat-id}`
 *
 * Read the properties and relationships of a deletedChat object.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedChats/{deletedChat-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/deletedChats/{deletedChat-id}']['response']> {
  return {
    method: 'get',
    path: '/teamwork/deletedChats/{deletedChat-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deletedChat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/deletedChats/{deletedChat-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/deletedChats/{deletedChat-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/deletedChats/{deletedChat-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teamwork/deletedChats/{deletedChat-id}']['response']> {
  return {
    method: 'patch',
    path: '/teamwork/deletedChats/{deletedChat-id}',
    paramDefs: [{ name: 'deletedChat-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /teamwork/deletedChats`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedChats']['body'],
  params?: IEndpoints['POST /teamwork/deletedChats']['parameters']
): EndpointRequest<IEndpoints['POST /teamwork/deletedChats']['response']> {
  return {
    method: 'post',
    path: '/teamwork/deletedChats',
    paramDefs: [],
    params,
    body,
  };
}
