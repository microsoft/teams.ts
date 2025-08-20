export * as addToReviewSetOperation from './addToReviewSetOperation';
export * as additionalSources from './additionalSources';
export * as custodianSources from './custodianSources';
export * as lastEstimateStatisticsOperation from './lastEstimateStatisticsOperation';
export * as noncustodialSources from './noncustodialSources';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/sourceCollections': Operation<
    '/compliance/ediscovery/cases/{case-id}/sourceCollections',
    'post'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}`
 *
 * Delete a sourceCollection object.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
      { name: 'sourceCollection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections`
 *
 * Get the list of sourceCollections from a case object.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections',
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
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}`
 *
 * Returns a list of sourceCollection objects associated with this case.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'sourceCollection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}`
 *
 * Update the properties of a sourceCollection object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections/{sourceCollection-id}',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'sourceCollection-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/sourceCollections`
 *
 * Create a new sourceCollection object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/sourceCollections']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/sourceCollections']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/sourceCollections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/sourceCollections',
    paramDefs: [{ name: 'case-id', in: 'path' }],
    params,
    body,
  };
}
