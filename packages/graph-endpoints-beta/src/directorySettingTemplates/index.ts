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
  'DELETE /directorySettingTemplates/{directorySettingTemplate-id}': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}',
    'delete'
  >;
  'GET /directorySettingTemplates': Operation<'/directorySettingTemplates', 'get'>;
  'GET /directorySettingTemplates/{directorySettingTemplate-id}': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}',
    'get'
  >;
  'PATCH /directorySettingTemplates/{directorySettingTemplate-id}': Operation<
    '/directorySettingTemplates/{directorySettingTemplate-id}',
    'patch'
  >;
  'POST /directorySettingTemplates': Operation<'/directorySettingTemplates', 'post'>;
}

/**
 * `DELETE /directorySettingTemplates/{directorySettingTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directorySettingTemplates/{directorySettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directorySettingTemplates/{directorySettingTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directorySettingTemplates/{directorySettingTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'directorySettingTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directorySettingTemplates`
 *
 * Directory setting templates represents a set of templates of directory settings, from which directory settings may be created and used within a tenant.  This operation retrieves the list of available directorySettingTemplates objects.
 */
export function list(
  params?: IEndpoints['GET /directorySettingTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /directorySettingTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directorySettingTemplates',
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
 * `GET /directorySettingTemplates/{directorySettingTemplate-id}`
 *
 * A directory setting template represents a template of settings from which settings may be created within a tenant. This operation allows retrieval of the properties of the directorySettingTemplate object, including the available settings and their defaults.
 */
export function get(
  params?: IEndpoints['GET /directorySettingTemplates/{directorySettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directorySettingTemplates/{directorySettingTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directorySettingTemplates/{directorySettingTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directorySettingTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directorySettingTemplates/{directorySettingTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directorySettingTemplates/{directorySettingTemplate-id}']['body'],
  params?: IEndpoints['PATCH /directorySettingTemplates/{directorySettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directorySettingTemplates/{directorySettingTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directorySettingTemplates/{directorySettingTemplate-id}',
    paramDefs: [{ name: 'directorySettingTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directorySettingTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /directorySettingTemplates']['body'],
  params?: IEndpoints['POST /directorySettingTemplates']['parameters']
): EndpointRequest<IEndpoints['POST /directorySettingTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directorySettingTemplates',
    paramDefs: [],
    params,
    body,
  };
}
