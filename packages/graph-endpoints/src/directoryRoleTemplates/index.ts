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
  'DELETE /directoryRoleTemplates/{directoryRoleTemplate-id}': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}',
    'delete'
  >;
  'GET /directoryRoleTemplates': Operation<'/directoryRoleTemplates', 'get'>;
  'GET /directoryRoleTemplates/{directoryRoleTemplate-id}': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}',
    'get'
  >;
  'PATCH /directoryRoleTemplates/{directoryRoleTemplate-id}': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}',
    'patch'
  >;
  'POST /directoryRoleTemplates': Operation<'/directoryRoleTemplates', 'post'>;
}

/**
 * `DELETE /directoryRoleTemplates/{directoryRoleTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directoryRoleTemplates/{directoryRoleTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directoryRoleTemplates/{directoryRoleTemplate-id}']['response']
> {
  return {
    method: 'delete',
    path: '/directoryRoleTemplates/{directoryRoleTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'directoryRoleTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directoryRoleTemplates`
 *
 * Retrieve a list of directoryRoleTemplate objects.
 */
export function list(
  params?: IEndpoints['GET /directoryRoleTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /directoryRoleTemplates']['response']> {
  return {
    method: 'get',
    path: '/directoryRoleTemplates',
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
 * `GET /directoryRoleTemplates/{directoryRoleTemplate-id}`
 *
 * Retrieve the properties and relationships of a directoryroletemplate object.
 */
export function get(
  params?: IEndpoints['GET /directoryRoleTemplates/{directoryRoleTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directoryRoleTemplates/{directoryRoleTemplate-id}']['response']
> {
  return {
    method: 'get',
    path: '/directoryRoleTemplates/{directoryRoleTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryRoleTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directoryRoleTemplates/{directoryRoleTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directoryRoleTemplates/{directoryRoleTemplate-id}']['body'],
  params?: IEndpoints['PATCH /directoryRoleTemplates/{directoryRoleTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directoryRoleTemplates/{directoryRoleTemplate-id}']['response']
> {
  return {
    method: 'patch',
    path: '/directoryRoleTemplates/{directoryRoleTemplate-id}',
    paramDefs: [{ name: 'directoryRoleTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directoryRoleTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /directoryRoleTemplates']['body'],
  params?: IEndpoints['POST /directoryRoleTemplates']['parameters']
): EndpointRequest<IEndpoints['POST /directoryRoleTemplates']['response']> {
  return {
    method: 'post',
    path: '/directoryRoleTemplates',
    paramDefs: [],
    params,
    body,
  };
}
