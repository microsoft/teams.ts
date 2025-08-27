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
  'DELETE /groupSettingTemplates/{groupSettingTemplate-id}': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}',
    'delete'
  >;
  'GET /groupSettingTemplates': Operation<'/groupSettingTemplates', 'get'>;
  'GET /groupSettingTemplates/{groupSettingTemplate-id}': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}',
    'get'
  >;
  'PATCH /groupSettingTemplates/{groupSettingTemplate-id}': Operation<
    '/groupSettingTemplates/{groupSettingTemplate-id}',
    'patch'
  >;
  'POST /groupSettingTemplates': Operation<'/groupSettingTemplates', 'post'>;
}

/**
 * `DELETE /groupSettingTemplates/{groupSettingTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groupSettingTemplates/{groupSettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groupSettingTemplates/{groupSettingTemplate-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groupSettingTemplates/{groupSettingTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupSettingTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groupSettingTemplates`
 *
 * Group setting templates represents a set of templates from which group settings may be created and used within a tenant. This operation retrieves the list of available groupSettingTemplates objects.
 */
export function list(
  params?: IEndpoints['GET /groupSettingTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /groupSettingTemplates']['response']> {
  return {
    method: 'get',
    path: '/groupSettingTemplates',
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
 * `GET /groupSettingTemplates/{groupSettingTemplate-id}`
 *
 * A group setting template represents a template of settings from which settings may be created within a tenant. This operation allows retrieval of the properties of the groupSettingTemplate object, including the available settings and their defaults.
 */
export function get(
  params?: IEndpoints['GET /groupSettingTemplates/{groupSettingTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groupSettingTemplates/{groupSettingTemplate-id}']['response']> {
  return {
    method: 'get',
    path: '/groupSettingTemplates/{groupSettingTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupSettingTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groupSettingTemplates/{groupSettingTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groupSettingTemplates/{groupSettingTemplate-id}']['body'],
  params?: IEndpoints['PATCH /groupSettingTemplates/{groupSettingTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groupSettingTemplates/{groupSettingTemplate-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groupSettingTemplates/{groupSettingTemplate-id}',
    paramDefs: [{ name: 'groupSettingTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /groupSettingTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /groupSettingTemplates']['body'],
  params?: IEndpoints['POST /groupSettingTemplates']['parameters']
): EndpointRequest<IEndpoints['POST /groupSettingTemplates']['response']> {
  return {
    method: 'post',
    path: '/groupSettingTemplates',
    paramDefs: [],
    params,
    body,
  };
}
