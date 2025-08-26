import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}',
    'delete'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/operations': Operation<
    '/compliance/ediscovery/cases/{case-id}/operations',
    'get'
  >;
  'GET /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}',
    'get'
  >;
  'PATCH /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}': Operation<
    '/compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}',
    'patch'
  >;
  'POST /compliance/ediscovery/cases/{case-id}/operations': Operation<
    '/compliance/ediscovery/cases/{case-id}/operations',
    'post'
  >;
}

/**
 * `DELETE /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'case-id', in: 'path' },
      { name: 'caseOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/operations`
 *
 * Returns a list of case operation objects for this case. Nullable.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/operations']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/operations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/operations',
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
 * `GET /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}`
 *
 * Returns a list of case operation objects for this case. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'caseOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['body'],
  params?: IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance/ediscovery/cases/{case-id}/operations/{caseOperation-id}',
    paramDefs: [
      { name: 'case-id', in: 'path' },
      { name: 'caseOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /compliance/ediscovery/cases/{case-id}/operations`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/operations']['body'],
  params?: IEndpoints['POST /compliance/ediscovery/cases/{case-id}/operations']['parameters']
): EndpointRequest<
  IEndpoints['POST /compliance/ediscovery/cases/{case-id}/operations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/compliance/ediscovery/cases/{case-id}/operations',
    paramDefs: [{ name: 'case-id', in: 'path' }],
    params,
    body,
  };
}
