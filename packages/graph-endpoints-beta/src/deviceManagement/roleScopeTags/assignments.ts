import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments': Operation<
    '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'roleScopeTag-id', in: 'path' },
      { name: 'roleScopeTagAutoAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments`
 *
 * The list of assignments for this Role Scope Tag.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'roleScopeTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}`
 *
 * The list of assignments for this Role Scope Tag.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'roleScopeTag-id', in: 'path' },
      { name: 'roleScopeTagAutoAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments/{roleScopeTagAutoAssignment-id}',
    paramDefs: [
      { name: 'roleScopeTag-id', in: 'path' },
      { name: 'roleScopeTagAutoAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/roleScopeTags/{roleScopeTag-id}/assignments',
    paramDefs: [{ name: 'roleScopeTag-id', in: 'path' }],
    params,
    body,
  };
}
