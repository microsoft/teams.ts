export * as definitions from './definitions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/teamTemplates/{teamTemplate-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}',
    'delete'
  >;
  'GET /teamwork/teamTemplates': Operation<'/teamwork/teamTemplates', 'get'>;
  'GET /teamwork/teamTemplates/{teamTemplate-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}',
    'get'
  >;
  'PATCH /teamwork/teamTemplates/{teamTemplate-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}',
    'patch'
  >;
  'POST /teamwork/teamTemplates': Operation<'/teamwork/teamTemplates', 'post'>;
}

/**
 * `DELETE /teamwork/teamTemplates/{teamTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/teamTemplates/{teamTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /teamwork/teamTemplates`
 *
 * List the teamTemplateDefinition objects associated with a teamTemplate.
 */
export function list(
  params?: IEndpoints['GET /teamwork/teamTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/teamTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}`
 *
 * The templates associated with a team.
 */
export function get(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}',
    paramDefs: {
      path: ['teamTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamwork/teamTemplates/{teamTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/teamTemplates/{teamTemplate-id}',
    paramDefs: {
      path: ['teamTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamwork/teamTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/teamTemplates']['body']
): EndpointRequest<IEndpoints['POST /teamwork/teamTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/teamTemplates',
    body,
  };
}
