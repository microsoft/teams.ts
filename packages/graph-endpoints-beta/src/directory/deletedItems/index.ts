export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as getByIds from './getByIds';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as restore from './restore';
export * as validateProperties from './validateProperties';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/deletedItems/{directoryObject-id}': Operation<
    '/directory/deletedItems/{directoryObject-id}',
    'delete'
  >;
  'GET /directory/deletedItems': Operation<'/directory/deletedItems', 'get'>;
  'GET /directory/deletedItems/{directoryObject-id}': Operation<
    '/directory/deletedItems/{directoryObject-id}',
    'get'
  >;
}

/**
 * `DELETE /directory/deletedItems/{directoryObject-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/deletedItems/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /directory/deletedItems/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/deletedItems/{directoryObject-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/deletedItems`
 *
 * Recently deleted items. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /directory/deletedItems']['parameters']
): EndpointRequest<IEndpoints['GET /directory/deletedItems']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/deletedItems',
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
 * `GET /directory/deletedItems/{directoryObject-id}`
 *
 * Recently deleted items. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /directory/deletedItems/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /directory/deletedItems/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/deletedItems/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
