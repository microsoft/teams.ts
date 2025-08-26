export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as getByIds from './getByIds';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as getUserOwnedObjects from './getUserOwnedObjects';
export * as restore from './restore';
export * as validateProperties from './validateProperties';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directoryObjects/{directoryObject-id}': Operation<
    '/directoryObjects/{directoryObject-id}',
    'delete'
  >;
  'GET /directoryObjects': Operation<'/directoryObjects', 'get'>;
  'GET /directoryObjects/{directoryObject-id}': Operation<
    '/directoryObjects/{directoryObject-id}',
    'get'
  >;
  'PATCH /directoryObjects/{directoryObject-id}': Operation<
    '/directoryObjects/{directoryObject-id}',
    'patch'
  >;
  'POST /directoryObjects': Operation<'/directoryObjects', 'post'>;
}

/**
 * `DELETE /directoryObjects/{directoryObject-id}`
 *
 * Delete a directory object, for example, a group, user, application, or service principal.
 */
export function del(
  params?: IEndpoints['DELETE /directoryObjects/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /directoryObjects/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directoryObjects/{directoryObject-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directoryObjects`
 *
 */
export function list(
  params?: IEndpoints['GET /directoryObjects']['parameters']
): EndpointRequest<IEndpoints['GET /directoryObjects']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directoryObjects',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
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
 * `GET /directoryObjects/{directoryObject-id}`
 *
 * Retrieve the properties and relationships of a directoryObject object.
 */
export function get(
  params?: IEndpoints['GET /directoryObjects/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /directoryObjects/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directoryObjects/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directoryObjects/{directoryObject-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directoryObjects/{directoryObject-id}']['body'],
  params?: IEndpoints['PATCH /directoryObjects/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /directoryObjects/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directoryObjects/{directoryObject-id}',
    paramDefs: [{ name: 'directoryObject-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directoryObjects`
 *
 */
export function create(
  body: IEndpoints['POST /directoryObjects']['body'],
  params?: IEndpoints['POST /directoryObjects']['parameters']
): EndpointRequest<IEndpoints['POST /directoryObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryObjects',
    paramDefs: [],
    params,
    body,
  };
}
