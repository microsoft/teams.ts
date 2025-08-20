import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /teamsTemplates/{teamsTemplate-id}': Operation<
    '/teamsTemplates/{teamsTemplate-id}',
    'delete'
  >;
  'GET /teamsTemplates': Operation<'/teamsTemplates', 'get'>;
  'GET /teamsTemplates/{teamsTemplate-id}': Operation<'/teamsTemplates/{teamsTemplate-id}', 'get'>;
  'PATCH /teamsTemplates/{teamsTemplate-id}': Operation<
    '/teamsTemplates/{teamsTemplate-id}',
    'patch'
  >;
  'POST /teamsTemplates': Operation<'/teamsTemplates', 'post'>;
}

/**
 * `DELETE /teamsTemplates/{teamsTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamsTemplates/{teamsTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teamsTemplates/{teamsTemplate-id}']['response']> {
  return {
    method: 'delete',
    path: '/teamsTemplates/{teamsTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamsTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamsTemplates`
 *
 */
export function list(
  params?: IEndpoints['GET /teamsTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /teamsTemplates']['response']> {
  return {
    method: 'get',
    path: '/teamsTemplates',
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
 * `GET /teamsTemplates/{teamsTemplate-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /teamsTemplates/{teamsTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teamsTemplates/{teamsTemplate-id}']['response']> {
  return {
    method: 'get',
    path: '/teamsTemplates/{teamsTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamsTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamsTemplates/{teamsTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamsTemplates/{teamsTemplate-id}']['body'],
  params?: IEndpoints['PATCH /teamsTemplates/{teamsTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teamsTemplates/{teamsTemplate-id}']['response']> {
  return {
    method: 'patch',
    path: '/teamsTemplates/{teamsTemplate-id}',
    paramDefs: [{ name: 'teamsTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /teamsTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /teamsTemplates']['body'],
  params?: IEndpoints['POST /teamsTemplates']['parameters']
): EndpointRequest<IEndpoints['POST /teamsTemplates']['response']> {
  return {
    method: 'post',
    path: '/teamsTemplates',
    paramDefs: [],
    params,
    body,
  };
}
