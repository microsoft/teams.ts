import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries': Operation<
    '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries',
    'post'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}`
 *
 * Delete a reviewSetQuery object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
      { name: 'reviewSet-id', in: 'path' },
      { name: 'reviewSetQuery-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries`
 *
 * Retrieve a list of eDiscovery reviewSetQuery objects.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'reviewSet-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}`
 *
 * Retrieve the properties and relationships of an eDiscovery reviewSetQuery object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'reviewSet-id', in: 'path' },
      { name: 'reviewSetQuery-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}`
 *
 * Update the properties of an eDiscovery reviewSetQuery.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries/{reviewSetQuery-id}',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'reviewSet-id', in: 'path' },
      { name: 'reviewSetQuery-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries`
 *
 * Create a new reviewSetQuery object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/reviewSets/{reviewSet-id}/queries',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'reviewSet-id', in: 'path' },
    ],
    params,
    body,
  };
}
