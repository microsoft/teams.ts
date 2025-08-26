export * as resource from './resource';
export * as roleSetting from './roleSetting';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/governanceRoleDefinitions/{governanceRoleDefinition-id}',
    'delete'
  >;
  'GET /governanceRoleDefinitions': Operation<'/governanceRoleDefinitions', 'get'>;
  'GET /governanceRoleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/governanceRoleDefinitions/{governanceRoleDefinition-id}',
    'get'
  >;
  'PATCH /governanceRoleDefinitions/{governanceRoleDefinition-id}': Operation<
    '/governanceRoleDefinitions/{governanceRoleDefinition-id}',
    'patch'
  >;
  'POST /governanceRoleDefinitions': Operation<'/governanceRoleDefinitions', 'post'>;
}

/**
 * `DELETE /governanceRoleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'governanceRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /governanceRoleDefinitions`
 *
 */
export function list(
  params?: IEndpoints['GET /governanceRoleDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /governanceRoleDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleDefinitions',
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
 * `GET /governanceRoleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /governanceRoleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'governanceRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /governanceRoleDefinitions/{governanceRoleDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleDefinitions/{governanceRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /governanceRoleDefinitions/{governanceRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleDefinitions/{governanceRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleDefinitions/{governanceRoleDefinition-id}',
    paramDefs: [{ name: 'governanceRoleDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /governanceRoleDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /governanceRoleDefinitions']['body'],
  params?: IEndpoints['POST /governanceRoleDefinitions']['parameters']
): EndpointRequest<IEndpoints['POST /governanceRoleDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceRoleDefinitions',
    paramDefs: [],
    params,
    body,
  };
}
