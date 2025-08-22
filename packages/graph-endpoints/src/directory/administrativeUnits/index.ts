export * as extensions from './extensions';
export * as members from './members';
export * as scopedRoleMembers from './scopedRoleMembers';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/administrativeUnits/{administrativeUnit-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}',
    'delete'
  >;
  'GET /directory/administrativeUnits': Operation<'/directory/administrativeUnits', 'get'>;
  'GET /directory/administrativeUnits/{administrativeUnit-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}',
    'get'
  >;
  'PATCH /directory/administrativeUnits/{administrativeUnit-id}': Operation<
    '/directory/administrativeUnits/{administrativeUnit-id}',
    'patch'
  >;
  'POST /directory/administrativeUnits': Operation<'/directory/administrativeUnits', 'post'>;
}

/**
 * `DELETE /directory/administrativeUnits/{administrativeUnit-id}`
 *
 * Delete an administrativeUnit.
 */
export function del(
  params?: IEndpoints['DELETE /directory/administrativeUnits/{administrativeUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/administrativeUnits/{administrativeUnit-id}']['response']
> {
  return {
    method: 'delete',
    path: '/directory/administrativeUnits/{administrativeUnit-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'administrativeUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/administrativeUnits`
 *
 * Retrieve a list of administrativeUnit objects.
 */
export function list(
  params?: IEndpoints['GET /directory/administrativeUnits']['parameters']
): EndpointRequest<IEndpoints['GET /directory/administrativeUnits']['response']> {
  return {
    method: 'get',
    path: '/directory/administrativeUnits',
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
 * `GET /directory/administrativeUnits/{administrativeUnit-id}`
 *
 * Retrieve the properties and relationships of an administrativeUnit object. The administrativeUnit resource supports extensions, which also allows you to use the GET operation to get custom properties and extension data in an administrativeUnit instance.
 */
export function get(
  params?: IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/administrativeUnits/{administrativeUnit-id}']['response']
> {
  return {
    method: 'get',
    path: '/directory/administrativeUnits/{administrativeUnit-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'administrativeUnit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/administrativeUnits/{administrativeUnit-id}`
 *
 * Update the properties of an administrativeUnit object.
 */
export function update(
  body: IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}']['body'],
  params?: IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/administrativeUnits/{administrativeUnit-id}']['response']
> {
  return {
    method: 'patch',
    path: '/directory/administrativeUnits/{administrativeUnit-id}',
    paramDefs: [{ name: 'administrativeUnit-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/administrativeUnits`
 *
 * Create a new administrativeUnit.
 */
export function create(
  body: IEndpoints['POST /directory/administrativeUnits']['body'],
  params?: IEndpoints['POST /directory/administrativeUnits']['parameters']
): EndpointRequest<IEndpoints['POST /directory/administrativeUnits']['response']> {
  return {
    method: 'post',
    path: '/directory/administrativeUnits',
    paramDefs: [],
    params,
    body,
  };
}
