import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}': Operation<
    '/security/labels/filePlanReferences/{filePlanReferenceTemplate-id}',
    'delete'
  >;
  'GET /security/labels/filePlanReferences': Operation<
    '/security/labels/filePlanReferences',
    'get'
  >;
  'GET /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}': Operation<
    '/security/labels/filePlanReferences/{filePlanReferenceTemplate-id}',
    'get'
  >;
  'PATCH /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}': Operation<
    '/security/labels/filePlanReferences/{filePlanReferenceTemplate-id}',
    'patch'
  >;
  'POST /security/labels/filePlanReferences': Operation<
    '/security/labels/filePlanReferences',
    'post'
  >;
}

/**
 * `DELETE /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}`
 *
 * Delete a filePlanReferenceTemplate object.
 */
export function del(
  params?: IEndpoints['DELETE /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/labels/filePlanReferences/{filePlanReferenceTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'filePlanReferenceTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/labels/filePlanReferences`
 *
 * Get a list of the filePlanReferenceTemplate objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/labels/filePlanReferences']['parameters']
): EndpointRequest<IEndpoints['GET /security/labels/filePlanReferences']['response']> {
  return {
    method: 'get',
    path: '/security/labels/filePlanReferences',
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
 * `GET /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}`
 *
 * Read the properties and relationships of a filePlanReferenceTemplate object.
 */
export function get(
  params?: IEndpoints['GET /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/labels/filePlanReferences/{filePlanReferenceTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'filePlanReferenceTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['body'],
  params?: IEndpoints['PATCH /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/labels/filePlanReferences/{filePlanReferenceTemplate-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/labels/filePlanReferences/{filePlanReferenceTemplate-id}',
    paramDefs: [{ name: 'filePlanReferenceTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/labels/filePlanReferences`
 *
 * Create a new filePlanReferenceTemplate object.
 */
export function create(
  body: IEndpoints['POST /security/labels/filePlanReferences']['body'],
  params?: IEndpoints['POST /security/labels/filePlanReferences']['parameters']
): EndpointRequest<IEndpoints['POST /security/labels/filePlanReferences']['response']> {
  return {
    method: 'post',
    path: '/security/labels/filePlanReferences',
    paramDefs: [],
    params,
    body,
  };
}
