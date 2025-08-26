export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as getAvailableExtensionProperties from './getAvailableExtensionProperties';
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
  * Permanently delete a recently deleted application, group, servicePrincipal, or user object from deleted items. After an item is permanently deleted, it cannot be restored. Permanently delete a recently deleted directory object from deleted items. The following types are supported:
- certificateBasedAuthPki
- certificateAuthorityDetail After an item is permanently deleted, it cannot be restored. Administrative units cannot be permanently deleted by using the deletedItems API. Soft-deleted administrative units will be permanently deleted 30 days after initial deletion unless they are restored.
  */
export function del(
  params?: IEndpoints['DELETE /directory/deletedItems/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /directory/deletedItems/{directoryObject-id}']['response']> {
  return {
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
  * Retrieve the properties of a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. Retrieve the properties of a recently deleted directory object from deleted items. The following types are supported:
- administrativeUnit
- application
- certificateBasedAuthPki
- certificateAuthorityDetail
- group
- servicePrincipal
- user
  */
export function list(
  params?: IEndpoints['GET /directory/deletedItems']['parameters']
): EndpointRequest<IEndpoints['GET /directory/deletedItems']['response']> {
  return {
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
  * Retrieve the properties of a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. Retrieve the properties of a recently deleted directory object from deleted items. The following types are supported:
- administrativeUnit
- application
- certificateBasedAuthPki
- certificateAuthorityDetail
- group
- servicePrincipal
- user
  */
export function get(
  params?: IEndpoints['GET /directory/deletedItems/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /directory/deletedItems/{directoryObject-id}']['response']> {
  return {
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
