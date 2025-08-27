export * as childTags from './childTags';
export * as parent from './parent';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}',
    'delete'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/tags',
    'get'
  >;
  'GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}',
    'get'
  >;
  'PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}',
    'patch'
  >;
  'POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags': Operation<
    '/security/cases/ediscoveryCases/{ediscoveryCase-id}/tags',
    'post'
  >;
}

/**
 * `DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}`
 *
 * Remove an ediscoveryReviewTag object.
 */
export function del(
  params?: IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryReviewTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags`
 *
 * Get a list of eDiscoveryReviewTag objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/tags',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}`
 *
 * Read the properties and relationships of an ediscoveryReviewTag object.
 */
export function get(
  params?: IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryReviewTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}`
 *
 * Update the properties of an ediscoveryReviewTag object.
 */
export function update(
  body: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}']['body'],
  params?: IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/tags/{ediscoveryReviewTag-id}',
    paramDefs: [
      { name: 'ediscoveryCase-id', in: 'path' },
      { name: 'ediscoveryReviewTag-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags`
 *
 * Create a new ediscoveryReviewTag object.
 */
export function create(
  body: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags']['body'],
  params?: IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/tags']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/cases/ediscoveryCases/{ediscoveryCase-id}/tags',
    paramDefs: [{ name: 'ediscoveryCase-id', in: 'path' }],
    params,
    body,
  };
}
