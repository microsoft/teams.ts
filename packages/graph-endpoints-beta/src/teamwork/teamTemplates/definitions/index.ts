export * as teamDefinition from './teamDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}',
    'delete'
  >;
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions',
    'get'
  >;
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}',
    'get'
  >;
  'PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}',
    'patch'
  >;
  'POST /teamwork/teamTemplates/{teamTemplate-id}/definitions': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions',
    'post'
  >;
}

/**
 * `DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions`
 *
 * Read the properties and relationships of a teamTemplateDefinition object.
 */
export function list(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}`
 *
 * Read the properties and relationships of a teamTemplateDefinition object.
 */
export function get(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}',
    paramDefs: [
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamwork/teamTemplates/{teamTemplate-id}/definitions`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions']['body'],
  params?: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions',
    paramDefs: [{ name: 'teamTemplate-id', in: 'path' }],
    params,
    body,
  };
}
