export * as copyToNotebook from './copyToNotebook';
export * as copyToSectionGroup from './copyToSectionGroup';
export * as pages from './pages';
export * as parentNotebook from './parentNotebook';
export * as parentSectionGroup from './parentSectionGroup';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/sections/{onenoteSection-id}': Operation<
    '/me/onenote/sections/{onenoteSection-id}',
    'delete'
  >;
  'GET /me/onenote/sections': Operation<'/me/onenote/sections', 'get'>;
  'GET /me/onenote/sections/{onenoteSection-id}': Operation<
    '/me/onenote/sections/{onenoteSection-id}',
    'get'
  >;
  'PATCH /me/onenote/sections/{onenoteSection-id}': Operation<
    '/me/onenote/sections/{onenoteSection-id}',
    'patch'
  >;
  'POST /me/onenote/sections': Operation<'/me/onenote/sections', 'post'>;
}

/**
 * `DELETE /me/onenote/sections/{onenoteSection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote/sections/{onenoteSection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onenote/sections/{onenoteSection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onenote/sections`
 *
 * Retrieve a list of section objects.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/sections']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/sections']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/sections',
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
 * `GET /me/onenote/sections/{onenoteSection-id}`
 *
 * Retrieve the properties and relationships of a section object.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/sections/{onenoteSection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/sections/{onenoteSection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onenoteSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onenote/sections/{onenoteSection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/sections/{onenoteSection-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/sections/{onenoteSection-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onenote/sections/{onenoteSection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onenote/sections/{onenoteSection-id}',
    paramDefs: [{ name: 'onenoteSection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/onenote/sections`
 *
 */
export function create(
  body: IEndpoints['POST /me/onenote/sections']['body'],
  params?: IEndpoints['POST /me/onenote/sections']['parameters']
): EndpointRequest<IEndpoints['POST /me/onenote/sections']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onenote/sections',
    paramDefs: [],
    params,
    body,
  };
}
