import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /organization/{organization-id}/extensions/{extension-id}': Operation<
    '/organization/{organization-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /organization/{organization-id}/extensions': Operation<
    '/organization/{organization-id}/extensions',
    'get'
  >;
  'GET /organization/{organization-id}/extensions/{extension-id}': Operation<
    '/organization/{organization-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /organization/{organization-id}/extensions/{extension-id}': Operation<
    '/organization/{organization-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /organization/{organization-id}/extensions': Operation<
    '/organization/{organization-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /organization/{organization-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /organization/{organization-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /organization/{organization-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/organization/{organization-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'organization-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/extensions`
 *
 * The collection of open extensions defined for the organization resource. Nullable.
 */
export function list(
  params?: IEndpoints['GET /organization/{organization-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['GET /organization/{organization-id}/extensions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/extensions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /organization/{organization-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for the organization resource. Nullable.
 */
export function get(
  params?: IEndpoints['GET /organization/{organization-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /organization/{organization-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/organization/{organization-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'organization-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /organization/{organization-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /organization/{organization-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /organization/{organization-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /organization/{organization-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/organization/{organization-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'organization-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /organization/{organization-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /organization/{organization-id}/extensions']['body'],
  params?: IEndpoints['POST /organization/{organization-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['POST /organization/{organization-id}/extensions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/organization/{organization-id}/extensions',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
