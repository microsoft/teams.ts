export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as deletedMembers from './deletedMembers';
export * as extensions from './extensions';
export * as getByIds from './getByIds';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as getUserOwnedObjects from './getUserOwnedObjects';
export * as members from './members';
export * as restore from './restore';
export * as scopedRoleMembers from './scopedRoleMembers';
export * as validateProperties from './validateProperties';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /administrativeUnits/{administrativeUnit-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}',
    'delete'
  >;
  'GET /administrativeUnits': Operation<'/administrativeUnits', 'get'>;
  'GET /administrativeUnits/{administrativeUnit-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}',
    'get'
  >;
  'PATCH /administrativeUnits/{administrativeUnit-id}': Operation<
    '/administrativeUnits/{administrativeUnit-id}',
    'patch'
  >;
  'POST /administrativeUnits': Operation<'/administrativeUnits', 'post'>;
}

/**
 * `DELETE /administrativeUnits/{administrativeUnit-id}`
 *
 * Delete an administrativeUnit.
 */
export function del(
  params?: IEndpoints['DELETE /administrativeUnits/{administrativeUnit-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /administrativeUnits/{administrativeUnit-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/administrativeUnits/{administrativeUnit-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'administrativeUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /administrativeUnits`
 *
 * Retrieve a list of administrativeUnit objects.
 */
export function list(
  params?: IEndpoints['GET /administrativeUnits']['parameters']
): EndpointRequest<IEndpoints['GET /administrativeUnits']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/administrativeUnits',
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
 * `GET /administrativeUnits/{administrativeUnit-id}`
 *
 * Retrieve the properties and relationships of an administrativeUnit object. The administrativeUnit resource supports extensions, which also allows you to use the GET operation to get custom properties and extension data in an administrativeUnit instance.
 */
export function get(
  params?: IEndpoints['GET /administrativeUnits/{administrativeUnit-id}']['parameters']
): EndpointRequest<IEndpoints['GET /administrativeUnits/{administrativeUnit-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/administrativeUnits/{administrativeUnit-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'administrativeUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /administrativeUnits/{administrativeUnit-id}`
 *
 * Update the properties of an administrativeUnit object.
 */
export function update(
  body: IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}']['body'],
  params?: IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /administrativeUnits/{administrativeUnit-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/administrativeUnits/{administrativeUnit-id}',
    paramDefs: [{ name: 'administrativeUnit-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /administrativeUnits`
 *
 * Create a new administrativeUnit.
 */
export function create(
  body: IEndpoints['POST /administrativeUnits']['body'],
  params?: IEndpoints['POST /administrativeUnits']['parameters']
): EndpointRequest<IEndpoints['POST /administrativeUnits']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/administrativeUnits',
    paramDefs: [],
    params,
    body,
  };
}
