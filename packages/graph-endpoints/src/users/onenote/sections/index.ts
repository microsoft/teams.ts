export * as copyToNotebook from './copyToNotebook';
export * as copyToSectionGroup from './copyToSectionGroup';
export * as pages from './pages';
export * as parentNotebook from './parentNotebook';
export * as parentSectionGroup from './parentSectionGroup';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onenote/sections/{onenoteSection-id}': Operation<
    '/users/{user-id}/onenote/sections/{onenoteSection-id}',
    'delete'
  >;
  'GET /users/{user-id}/onenote/sections': Operation<'/users/{user-id}/onenote/sections', 'get'>;
  'GET /users/{user-id}/onenote/sections/{onenoteSection-id}': Operation<
    '/users/{user-id}/onenote/sections/{onenoteSection-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onenote/sections/{onenoteSection-id}': Operation<
    '/users/{user-id}/onenote/sections/{onenoteSection-id}',
    'patch'
  >;
  'POST /users/{user-id}/onenote/sections': Operation<'/users/{user-id}/onenote/sections', 'post'>;
}

/**
 * `DELETE /users/{user-id}/onenote/sections/{onenoteSection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onenote/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onenote/sections/{onenoteSection-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/onenote/sections/{onenoteSection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/sections`
 *
 * The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onenote/sections']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/sections']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/onenote/sections',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/sections/{onenoteSection-id}`
 *
 * The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onenote/sections/{onenoteSection-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/onenote/sections/{onenoteSection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onenote/sections/{onenoteSection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onenote/sections/{onenoteSection-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onenote/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onenote/sections/{onenoteSection-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/onenote/sections/{onenoteSection-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onenote/sections`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onenote/sections']['body'],
  params?: IEndpoints['POST /users/{user-id}/onenote/sections']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/onenote/sections']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/onenote/sections',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
