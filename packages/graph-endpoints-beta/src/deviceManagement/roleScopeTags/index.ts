export * as assign from './assign';
export * as assignments from './assignments';
export * as getRoleScopeTagsById from './getRoleScopeTagsById';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}',
    'delete'
  >;
  'GET /deviceManagement/roleScopeTags': Operation<'/deviceManagement/roleScopeTags', 'get'>;
  'GET /deviceManagement/roleScopeTags/{roleScopeTag-id}': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}',
    'get'
  >;
  'PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}',
    'patch'
  >;
  'POST /deviceManagement/roleScopeTags': Operation<'/deviceManagement/roleScopeTags', 'post'>;
}

/**
 * `DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'roleScopeTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/roleScopeTags`
 *
 * The Role Scope Tags.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/roleScopeTags']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/roleScopeTags']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/roleScopeTags',
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
 * `GET /deviceManagement/roleScopeTags/{roleScopeTag-id}`
 *
 * The Role Scope Tags.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleScopeTags/{roleScopeTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleScopeTags/{roleScopeTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'roleScopeTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}',
    paramDefs: [{ name: 'roleScopeTag-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/roleScopeTags`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/roleScopeTags']['body'],
  params?: IEndpoints['POST /deviceManagement/roleScopeTags']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/roleScopeTags']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/roleScopeTags',
    paramDefs: [],
    params,
    body,
  };
}
