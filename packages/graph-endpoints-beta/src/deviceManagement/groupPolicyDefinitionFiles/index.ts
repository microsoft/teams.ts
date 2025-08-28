export * as definitions from './definitions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}': Operation<
    '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}',
    'delete'
  >;
  'GET /deviceManagement/groupPolicyDefinitionFiles': Operation<
    '/deviceManagement/groupPolicyDefinitionFiles',
    'get'
  >;
  'GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}': Operation<
    '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}',
    'get'
  >;
  'PATCH /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}': Operation<
    '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}',
    'patch'
  >;
  'POST /deviceManagement/groupPolicyDefinitionFiles': Operation<
    '/deviceManagement/groupPolicyDefinitionFiles',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'groupPolicyDefinitionFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyDefinitionFiles`
 *
 * The available group policy definition files for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitionFiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/groupPolicyDefinitionFiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitionFiles',
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
 * `GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}`
 *
 * The available group policy definition files for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyDefinitionFile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/groupPolicyDefinitionFiles/{groupPolicyDefinitionFile-id}',
    paramDefs: [{ name: 'groupPolicyDefinitionFile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/groupPolicyDefinitionFiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyDefinitionFiles']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyDefinitionFiles']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/groupPolicyDefinitionFiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyDefinitionFiles',
    paramDefs: [],
    params,
    body,
  };
}
