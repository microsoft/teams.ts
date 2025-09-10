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
  'POST /teamwork/deletedChats/{deletedChat-id}/undoDelete': Operation<
    '/teamwork/deletedChats/{deletedChat-id}/undoDelete',
    'post'
  >;
}

/**
 * `DELETE /teamwork/deletedChats/{deletedChat-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedChats/{deletedChat-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teamwork/deletedChats/{deletedChat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/deletedChats/{deletedChat-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deletedChat-id'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedChats',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedChats/{deletedChat-id}',
    paramDefs: {
      path: ['deletedChat-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/deletedChats/{deletedChat-id}',
    paramDefs: {
      path: ['deletedChat-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamwork/deletedChats`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedChats']['body']
): EndpointRequest<IEndpoints['POST /teamwork/deletedChats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/deletedChats',
    body,
  };
}

export const undoDelete = {
  /**
   * `POST /teamwork/deletedChats/{deletedChat-id}/undoDelete`
   *
   * Restore a deletedChat to an active chat.
   */
  create: function create(
    params?: IEndpoints['POST /teamwork/deletedChats/{deletedChat-id}/undoDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedChats/{deletedChat-id}/undoDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedChats/{deletedChat-id}/undoDelete',
      paramDefs: {
        path: ['deletedChat-id'],
      },
      params,
    };
  },
};
