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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplate-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplate-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'teamTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /teamwork/teamTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/teamTemplates']['body'],
  params?: IEndpoints['POST /teamwork/teamTemplates']['parameters']
): EndpointRequest<IEndpoints['POST /teamwork/teamTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/teamTemplates',
    paramDefs: [],
    params,
    body,
  };
}
