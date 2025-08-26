import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources',
    'post'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
      { name: 'sourceCollection-id', in: 'path' },
      { name: 'dataSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources`
 *
 * Get a list of additional dataSource objects associated with a source collection.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources',
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
      { name: 'sourceCollection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}`
 *
 * Adds an additional source to the sourceCollection.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'sourceCollection-id', in: 'path' },
      { name: 'dataSource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources/{dataSource-id}',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'sourceCollection-id', in: 'path' },
      { name: 'dataSource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}/additionalSources',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'sourceCollection-id', in: 'path' },
    ],
    params,
    body,
  };
}
