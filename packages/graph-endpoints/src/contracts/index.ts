export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as getAvailableExtensionProperties from './getAvailableExtensionProperties';
export * as getByIds from './getByIds';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as restore from './restore';
export * as validateProperties from './validateProperties';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /contracts/{contract-id}': Operation<'/contracts/{contract-id}', 'delete'>;
  'GET /contracts': Operation<'/contracts', 'get'>;
  'GET /contracts/{contract-id}': Operation<'/contracts/{contract-id}', 'get'>;
  'PATCH /contracts/{contract-id}': Operation<'/contracts/{contract-id}', 'patch'>;
  'POST /contracts': Operation<'/contracts', 'post'>;
}

/**
 * `DELETE /contracts/{contract-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /contracts/{contract-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /contracts/{contract-id}']['response']> {
  return {
    method: 'delete',
    path: '/contracts/{contract-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'contract-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /contracts`
 *
 * Retrieve a list of contract objects associated to a partner tenant.
 */
export function list(
  params?: IEndpoints['GET /contracts']['parameters']
): EndpointRequest<IEndpoints['GET /contracts']['response']> {
  return {
    method: 'get',
    path: '/contracts',
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
 * `GET /contracts/{contract-id}`
 *
 * Retrieve the properties and relationships of contract object.
 */
export function get(
  params?: IEndpoints['GET /contracts/{contract-id}']['parameters']
): EndpointRequest<IEndpoints['GET /contracts/{contract-id}']['response']> {
  return {
    method: 'get',
    path: '/contracts/{contract-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'contract-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /contracts/{contract-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /contracts/{contract-id}']['body'],
  params?: IEndpoints['PATCH /contracts/{contract-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /contracts/{contract-id}']['response']> {
  return {
    method: 'patch',
    path: '/contracts/{contract-id}',
    paramDefs: [{ name: 'contract-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /contracts`
 *
 */
export function create(
  body: IEndpoints['POST /contracts']['body'],
  params?: IEndpoints['POST /contracts']['parameters']
): EndpointRequest<IEndpoints['POST /contracts']['response']> {
  return {
    method: 'post',
    path: '/contracts',
    paramDefs: [],
    params,
    body,
  };
}
